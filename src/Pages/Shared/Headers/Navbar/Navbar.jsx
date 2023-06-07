import { Link, NavLink } from "react-router-dom";
import CampContainer from "../../../../components/Shared/CampContainer";
import CampBtn from "../../../../components/Shared/CampBtn";
import { useDark } from "../../../../Hooks/useDark";

const Navbar = () => {
  // control dark mode
  const { setDark } = useDark();
  const handleDarkMode = (e) => {
    setDark(e.target.checked);
  };

  // navItems
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <CampContainer>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-2xl hover:bg-transparent">
              <p className="font-bold text-camp-primary">Foreign Language</p>
              <p className="text-camp-secondary">Camp</p>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <Link>
              <CampBtn>Login</CampBtn>
            </Link>
            <div className="ml-4">
              <input
                onClick={handleDarkMode}
                type="checkbox"
                className="toggle"
              />
            </div>
          </div>
        </div>
      </CampContainer>
    </div>
  );
};

export default Navbar;
