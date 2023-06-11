import { useQuery } from "react-query";
import useAuth from "../../../../Hooks/useAuth";
import useSecureAxios from "../../../../Hooks/useSecureAxios";
import SectionHeading from "../../../../components/Shared/SectionHeading";
import AdminBtn from "../../../../components/Dashboard/AdminBtn";

const MyClasses = () => {
  const secureAxios = useSecureAxios();
  const { user } = useAuth();

  const { data: allClasses } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const { data } = await secureAxios(`/classes?email=${user?.email}`);
      return data;
    },
  });

  return (
    <div>
      <SectionHeading title="My All Classes">
        Here is your all added classes with admin feedback and also what is the
        status of your class
      </SectionHeading>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="bg-camp-primary text-white">
                <th>#</th>
                <th>Class Details</th>
                <th>Price</th>
                <th>Enrolled</th>
                <th>Seats</th>
                <th>Status</th>
                <th>Feedback</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {(allClasses &&
                Array.isArray(allClasses) &&
                allClasses.length > 0 &&
                allClasses.map((item, index) => (
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
                        </div>
                      </div>
                    </td>
                    <td>${item.price}</td>
                    <td>{item.enrolledStudents}</td>
                    <td>{item.seats}</td>
                    <td>{item.status}</td>
                    <td>
                      {(item?.feedback && item?.feedback) || "no feedback"}
                    </td>
                    <td className="text-center">
                      <AdminBtn>Update</AdminBtn>
                    </td>
                  </tr>
                ))) ||
                (allClasses?.length <= 0 && <>No Class Found</>) || (
                  <>No class found</>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
