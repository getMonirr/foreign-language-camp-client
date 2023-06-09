import SectionHeading from "../../../../components/Shared/SectionHeading";


const ManageUsers = () => {
  return <>
    <SectionHeading>Manage Users</SectionHeading>
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
                <td>pending</td>
                <th className="text-center">
                  <button className="btn btn-primary btn-xs">Make Admin</button>
                </th>
                <th className="text-center">
                  <button className="btn btn-primary btn-xs">Make Instructor</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </>;
};

export default ManageUsers;
