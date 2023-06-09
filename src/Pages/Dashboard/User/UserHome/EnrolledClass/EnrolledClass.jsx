import { useQuery } from "react-query";
import SectionHeading from "../../../../../components/Shared/SectionHeading";
import useAuth from "../../../../../Hooks/useAuth";
import useSecureAxios from "../../../../../Hooks/useSecureAxios";
import CampContainer from "../../../../../components/Shared/CampContainer";
import CampBtn from "../../../../../components/Shared/CampBtn";
import { Link } from "react-router-dom";

const EnrolledClass = () => {
  const { user } = useAuth();
  const secureAxios = useSecureAxios();

  const { data: enrolledClasses } = useQuery({
    queryKey: ["enrolledClasses", user?.email],
    queryFn: async () => {
      const { data } = await secureAxios(
        `/enrolledClasses?email=${user?.email}`
      );
      return data;
    },
  });

  const handleClassDelete = () => {};

  return (
    <div>
      <SectionHeading>Your Enrolled Classes</SectionHeading>
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
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {(enrolledClasses &&
                Array.isArray(enrolledClasses) &&
                enrolledClasses.length > 0 &&
                enrolledClasses.map((item, index) => (
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
                            {item.rating}
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
                  </tr>
                ))) ||
                (enrolledClasses?.length <= 0 && (
                  <tr className="text-center">
                    {"Enrolled Classes not Found"}
                  </tr>
                )) ||
                "Enrolled Classes not Found"}
            </tbody>
          </table>
        </div>
      </CampContainer>
    </div>
  );
};

export default EnrolledClass;
