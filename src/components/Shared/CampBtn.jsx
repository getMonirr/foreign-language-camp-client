// import { useDark } from "../../Hooks/useDark";

const CampBtn = ({
  children,
  handleOnClick,
  disabled = false,
  className = "btn px-8 text-white",
}) => {
  // const { dark } = useDark();
  // const bgImg = dark
  //   ? "linear-gradient(130deg, #CFA649 93%, #FFFFFF00 90%)"
  //   : "linear-gradient(130deg, #17543E 93%, #FFFFFF00 90%)";
  return (
    // <button
    //   disabled={disabled}
    //   onClick={handleOnClick}
    //   style={{
    //     backgroundImage: bgImg,
    //   }}
    //   className="btn px-8 bg-transparent rounded-none border-none text-white  hover:text-camp-secondary  hover:bg-transparent"
    // >
    //   {children}
    // </button>
    <button
      disabled={disabled}
      onClick={handleOnClick}
      className={`border-camp-secondary hover:text-camp-secondary  bg-camp-secondary hover:bg-white hover:border-camp-secondary hover:border-2 rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default CampBtn;
