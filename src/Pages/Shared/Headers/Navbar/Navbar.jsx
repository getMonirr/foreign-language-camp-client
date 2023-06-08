import { Link, NavLink } from "react-router-dom";
import CampContainer from "../../../../components/Shared/CampContainer";
import CampBtn from "../../../../components/Shared/CampBtn";
import { useDark } from "../../../../Hooks/useDark";
import "./Navbar.css";
import useAuth from "../../../../Hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useAuth();

  // control dark mode
  const { setDark } = useDark();
  const handleDarkMode = (e) => {
    setDark(e.target.checked);
  };

  // handle log out
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log out Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => console.log(err));
  };

  // navItems
  const navItems = (
    <>
      <li className="hover:text-camp-secondary text-lg">
        <NavLink className="hover:bg-none" to="/">
          Home
        </NavLink>
      </li>
      <li className="hover:text-camp-secondary text-lg">
        <NavLink className="hover:bg-none" to="/classes">
          Classes
        </NavLink>
      </li>
      <li className="hover:text-camp-secondary text-lg">
        <NavLink className="hover:bg-none" to="/instructors">
          Instructors
        </NavLink>
      </li>
      {user && (
        <li className="hover:text-camp-secondary text-lg">
          <NavLink className="hover:bg-none" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      )}
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
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium"
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
            <ul className="menu menu-horizontal px-1 font-medium">
              {navItems}
            </ul>
          </div>
          <div className="navbar-end">
            {user && user ? (
              <>
                <CampBtn handleOnClick={handleLogOut}>Log Out</CampBtn>
              </>
            ) : (
              <Link to="/login">
                <CampBtn>Login</CampBtn>
              </Link>
            )}
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
