import CampContainer from "../CampContainer";
import logo from "../../../assets/logo/only-Logo.svg";

import "./PageHeader.css";

const PageHeader = ({ height = "min-h-[400px]" }) => {
  return (
    <>
      <div className="bg-camp-bg-2">
        <CampContainer>
          <div
            className={`flex justify-center items-center py-4 flex-col ${height}`}
          >
            <div>
              <img className="h-32" src={logo} alt="logo" />
            </div>
            <h3 className="text-white font-camp-dis text-4xl font-bold uppercase tracking-widest">
              Foreign Language
            </h3>
            <h4 className="uppercase font-camp-mon text-white tracking-[10px]">
              Summer Camp
            </h4>
            <div className="flex gap-3 mt-4">
              <p className="h-2 w-2 bg-[#3B6367] rounded-full"></p>
              <p className="h-2 w-2 bg-[#3B6367] rounded-full"></p>
              <p className="h-2 w-2 bg-[#3B6367] rounded-full"></p>
              <p className="h-2 w-2 bg-[#3B6367] rounded-full"></p>
              <p className="h-2 w-2 bg-[#3B6367] rounded-full"></p>
              <p className="h-2 w-2 bg-[#3B6367] rounded-full"></p>
              <p className="h-2 w-2 bg-[#3B6367] rounded-full"></p>
              <p className="h-2 w-2 bg-[#3B6367] rounded-full"></p>
              <p className="h-2 w-2 bg-[#3B6367] rounded-full"></p>
              <p className="h-2 w-2 bg-[#3B6367] rounded-full"></p>
            </div>
          </div>
        </CampContainer>
      </div>
    </>
  );
};

export default PageHeader;
