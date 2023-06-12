import { useMutation, useQuery, useQueryClient } from "react-query";
import useAuth from "../../../../Hooks/useAuth";
import useSecureAxios from "../../../../Hooks/useSecureAxios";
import SectionHeading from "../../../../components/Shared/SectionHeading";
import AdminBtn from "../../../../components/Dashboard/AdminBtn";
import { toast } from "react-toastify";
import useRole from "../../../../Hooks/useRole";
import { FaUser, FaUserGraduate } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const ManageUsers = () => {
  const { user } = useAuth();
  const { roleRefetch } = useRole();
  const secureAxios = useSecureAxios();
  const queryClient = useQueryClient();

  // get all users
  const { data: allUsers = [] } = useQuery({
    queryKey: ["all-users", user?.email],
    queryFn: async () => {
      const { data } = await secureAxios(`/all-users?email=${user?.email}`);
      return data;
    },
  });

  // update user role
  const updateUserRole = async ({ email, role }) => {
    const { data } = await secureAxios.patch(`/users?email=${email}`, {
      role,
    });
    return data;
  };

  // user mutation
  const mutation = useMutation({
    mutationKey: ["all-users", user?.email],
    mutationFn: updateUserRole,
    onSuccess: (data, { role }) => {
      if (data?.modifiedCount) {
        roleRefetch;
        if (role === "instructor") {
          toast.success("user now instructor");
        } else if (role === "admin") {
          toast.success("user now admin");
        }
      }

      queryClient.invalidateQueries("all-users");
    },
  });

  // handle make instructor
  const handleMakeInstructor = (email) => {
    mutation.mutate({ email, role: "instructor" });
  };

  // handle make Admin
  const handleMakeAdmin = (email) => {
    mutation.mutate({ email, role: "admin" });
  };

  return (
    <>
      <SectionHeading title="Manage Users">
        You can manage user from here, make someone to instructor or admin
      </SectionHeading>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center bg-camp-primary text-white">
                <th>#</th>
                <th>Name</th>
                <th>User Email</th>
                <th>Role</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {(allUsers &&
                Array.isArray(allUsers) &&
                allUsers.length > 0 &&
                allUsers.map((user, index) => (
                  <tr key={user._id} className="text-center">
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={user.image} alt={user.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <div className="flex justify-start items-center gap-2">
                        {user.role === "admin" ? (
                          <RiAdminFill />
                        ) : user.role === "instructor" ? (
                          <FaUserGraduate />
                        ) : (
                          <FaUser />
                        )}
                        {user.role}
                      </div>
                    </td>
                    <th className="text-center">
                      <AdminBtn
                        handleOnClick={() => handleMakeAdmin(user.email)}
                        disabled={user.role === "admin"}
                      >
                        Make Admin
                      </AdminBtn>
                    </th>
                    <th className="text-center">
                      <AdminBtn
                        handleOnClick={() => handleMakeInstructor(user.email)}
                        disabled={user.role === "instructor"}
                      >
                        Make Instructor
                      </AdminBtn>
                    </th>
                  </tr>
                ))) ||
                (allUsers?.length <= 0 && "no classes found") ||
                "no classes found"}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
