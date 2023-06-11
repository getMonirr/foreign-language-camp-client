const AdminBtn = ({
  disabled = false,
  children,
  handleOnClick,
  className = "bg-green-400 hover:bg-blue-200",
}) => {
  return (
    // <button
    //   onClick={handleOnClick}
    //   disabled={disabled}
    //   className={`btn btn-primary btn-xs ${className}`}
    // >
    //   {children}
    // </button>
    <button
      onClick={handleOnClick}
      disabled={disabled}
      className={` btn btn-xs rounded-md border border-transparent px-4 font-medium text-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 capitalize ${className}`}
    >
      {children}
    </button>
  );
};

export default AdminBtn;
