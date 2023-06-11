import useAuth from "../../../../Hooks/useAuth";
import logo from "../../../../assets/logo/camp-logo-dark.svg";

const UpSidebar = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col justify-between items-center">
      <div className=" mt-4">
        <img src={logo} alt="logo" />
        <div className="divider after:bg-camp-secondary before:bg-camp-secondary"></div>
      </div>
      <div className="text-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-offset-camp-secondary  ring-offset-2">
            <img src={user?.photoURL} alt="" />
          </div>
        </div>

        <h3 className="text-lg font-camp-dis">{user?.displayName}</h3>
        <p className="text-xs">{user?.email}</p>
      </div>
      <div className="divider after:bg-camp-secondary before:bg-camp-secondary"></div>
    </div>
  );
};

export default UpSidebar;
