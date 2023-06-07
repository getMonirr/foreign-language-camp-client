import { useDark } from "../../Hooks/useDark";

const CampBtn = ({ children }) => {
  const { dark } = useDark();
  const bgImg = dark
    ? "linear-gradient(130deg, #CFA649 93%, #FFFFFF00 90%)"
    : "linear-gradient(130deg, #17543E 93%, #FFFFFF00 90%)";
  return (
    <button
      style={{
        backgroundImage: bgImg,
      }}
      className="btn px-8 bg-transparent rounded-none border-none text-white  hover:text-camp-secondary  hover:bg-transparent"
    >
      {children}
    </button>
  );
};

export default CampBtn;
