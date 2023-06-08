import CampBtn from "../../../components/Shared/CampBtn";
import blobBg from '../../../assets/bg/blob-bg.png';

const Hero = ({ content }) => {
  const { title, subtitle, desc, img } = content;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen">
      <div className="space-y-6">
        <h2 className="text-7xl font-semibold font-camp-dis text-camp-secondary">
          {title}
        </h2>
        <h1 className="text-7xl font-bold font-camp-dis text-camp-primary">
          {subtitle}
        </h1>
        <p className="text-lg font-normal text-camp-text leading-8">{desc}</p>
        <CampBtn>Explore</CampBtn>
      </div>

      <div className="mx-auto relative">
        <img src={blobBg} alt="" />
        <img className="absolute left-[100px] top-[150px] mx-auto" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Hero;
