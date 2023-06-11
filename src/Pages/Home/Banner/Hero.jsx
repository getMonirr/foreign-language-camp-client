import CampBtn from "../../../components/Shared/CampBtn";
import blobBg from "../../../assets/bg/blob-bg.png";
import CampContainer from "../../../components/Shared/CampContainer";

const Hero = ({ content }) => {
  const { title, subtitle, desc, img } = content;
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="bg-no-repeat bg-cover relative"
    >
      {/* background overlay */}
      <div
        className="absolute h-full w-full"
        style={{
          background: "rgba(31,39,43,0.75)",
          pointerEvents: "none",
        }} 
      ></div>
      <CampContainer>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen py-8 relative">  */}
        <div className="items-center min-h-screen py-8 relative flex justify-center text-center max-w-5xl mx-auto text-white">
          <div className="space-y-3 lg:space-y-6">
            <h2 className="text-4xl lg:text-6xl font-semibold font-camp-dis ">
              {title}
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold font-camp-dis">
              {subtitle}
            </h1>
            <p className="lg:text-lg font-normal text-white leading-8">
              {desc}
            </p>
            <CampBtn>Explore</CampBtn>
          </div>

          {/* <div className="mx-auto relative">
            <img src={blobBg} alt="" />
            <img
              className="absolute lg:left-[100px] top-12 lg:top-[150px] mx-auto"
              src={img}
              alt="img"
            />
          </div> */}
        </div>
      </CampContainer>
    </div>
  );
};

export default Hero;
