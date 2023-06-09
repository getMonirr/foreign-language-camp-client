import CampBtn from "../../../../components/Shared/CampBtn";
import SectionHeading from "../../../../components/Shared/SectionHeading";

const MyClasses = () => {
  return (
    <div>
      <SectionHeading>My All Classes</SectionHeading>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="bg-camp-primary text-white">
                <th>#</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Enrolled</th>
                <th>Status</th>
                <th>Feedback</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>className</td>
                <td>Price</td>
                <td>Enrolled</td>
                <td>pending</td>
                <td>no feedback</td>
                <td className="text-center">
                  <CampBtn>Update</CampBtn>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
