const AdminBtn = ({
  disabled = false,
  children,
  handleOnClick,
  className = "bg-camp-primary border-camp-primary hover:bg-camp-primary-hover",
}) => {
  return (
    <button
      onClick={handleOnClick}
      disabled={disabled}
      className={`btn btn-primary btn-xs ${className}`}
    >
      {children}
    </button>
  );
};

export default AdminBtn;
