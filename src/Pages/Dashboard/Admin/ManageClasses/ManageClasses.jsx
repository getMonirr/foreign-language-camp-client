
import SectionHeading from "../../../../components/Shared/SectionHeading";

const ManageClasses = () => {
  return (
    <div>
      <SectionHeading>Manage All Classes</SectionHeading>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center bg-camp-primary text-white">
                <th>#</th>
                <th>Class Name</th>
                <th>Instructor Details</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="text-center">
                <th>1
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  ins name
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    ins email
                  </span>
                </td>
                <td>100</td>
                <td>$100</td>
                <td>pending</td>
                <th className="text-center">
                  <button className="btn btn-primary btn-xs">Deny</button>
                </th>
                <th className="text-center">
                  <button className="btn btn-primary btn-xs">Approve</button>
                </th>
                <th className="text-center">
                  <button className="btn btn-primary btn-xs">Send Feedback</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
