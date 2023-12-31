import { useMutation, useQuery, useQueryClient } from "react-query";
import SectionHeading from "../../../../../components/Shared/SectionHeading";
import useAuth from "../../../../../Hooks/useAuth";
import useSecureAxios from "../../../../../Hooks/useSecureAxios";
import CampContainer from "../../../../../components/Shared/CampContainer";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import AdminBtn from "../../../../../components/Dashboard/AdminBtn";
import { FaMoneyBillAlt, FaTrashAlt } from "react-icons/fa";

const SelectedClasses = () => {
  // use auth
  const { user } = useAuth();

  // use secure axios
  const secureAxios = useSecureAxios();

  // client
  const queryClient = useQueryClient();

  // get data
  const { data: selectedClasses = [] } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const { data } = await secureAxios.get(
        `/selectedCarts?email=${user?.email}`
      );
      return data;
    },
  });

  // mutation
  const mutation = useMutation({
    mutationFn: async (id) => {
      const { data } = await secureAxios.delete(
        `/selectedCarts/${id}?email=${user?.email}`
      );
      return data;
    },
    onSuccess: (data) => {
      // after deleted
      if (data?.deletedCount) {
        toast.success("Delete Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      queryClient.invalidateQueries("selectedClasses");
    },
  });

  // handle class delete
  const handleClassDelete = (id) => {
    mutation.mutate(id);
  };

  // TODO: make beautiful the table

  return (
    <div>
      <SectionHeading title="My Selected Classes">
        Here is your all Selected Class
      </SectionHeading>
      <CampContainer>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-camp-primary text-white">
                <th>#</th>
                <th>ClassDetails</th>
                <th>Instructor Details</th>
                <th>Seats</th>
                <th>Enrolled</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {(selectedClasses &&
                Array.isArray(selectedClasses) &&
                selectedClasses.length > 0 &&
                selectedClasses.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt={item.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          <div className="text-sm opacity-50">
                            Rating: {item.rating}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.instructor}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {item.instructorEmail}
                      </span>
                    </td>
                    <td>{item.seats}</td>
                    <td>{item.enrolledStudents}</td>
                    <th>
                      <AdminBtn
                        className="bg-red-300"
                        handleOnClick={() => handleClassDelete(item._id)}
                      >
                        <FaTrashAlt className="text-rose-700" /> Delete
                      </AdminBtn>
                    </th>
                    <th>
                      <Link to={`/dashboard/payment/${item?._id}`}>
                        <AdminBtn>
                          <FaMoneyBillAlt className="text-green-800" /> Pay <span>${item.price}</span>
                        </AdminBtn>
                      </Link>
                    </th>
                  </tr>
                ))) ||
                (selectedClasses.length <= 0 && (
                  <tr className="text-center">
                    {"Selected Classes not Found"}
                  </tr>
                )) ||
                "Selected Classes not Found"}
            </tbody>
          </table>
        </div>
      </CampContainer>
    </div>
  );
};

export default SelectedClasses;
