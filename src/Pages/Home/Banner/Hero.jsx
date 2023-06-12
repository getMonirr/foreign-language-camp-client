import { FaArrowCircleRight } from "react-icons/fa";
import CampBtn from "../../../components/Shared/CampBtn";
import CampContainer from "../../../components/Shared/CampContainer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        <div className="items-center min-h-screen py-8 relative flex justify-center text-center max-w-5xl mx-auto text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="">
              <h2 className="text-4xl lg:text-6xl font-semibold font-camp-dis ">
                {title}
              </h2>

              <h1 className="text-4xl lg:text-6xl font-bold font-camp-dis my-4">
                {subtitle}
              </h1>
              <p className="lg:text-lg font-normal text-white leading-8 mb-20">
                {desc}
              </p>
              <Link to="classes">
              <CampBtn>
                Explore <FaArrowCircleRight />
              </CampBtn>
              </Link>
            </div>
          </motion.div>
        </div>
      </CampContainer>
    </div>
  );
};

export default Hero;
