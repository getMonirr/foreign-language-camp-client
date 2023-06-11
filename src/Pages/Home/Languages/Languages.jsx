import CampContainer from "../../../components/Shared/CampContainer";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import bgIcon from "../../../assets/bg/Icon-Grid.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Language.css";

// import required modules
import { Navigation } from "swiper";

const Languages = () => {
  const languages = [
    {
      name: "English",
      icon: "FaUser",
      desc: "English is a widely spoken language used for communication, business, and academic purposes. It is the official language of many countries and serves as a global lingua franca.",
    },
    {
      name: "Bangla",
      icon: "FaUser",
      desc: "Bangla, also known as Bengali, is the official language of Bangladesh and one of the most widely spoken languages in India. It has a rich literary tradition and is the second most spoken language in the world.",
    },
    {
      name: "Spanish",
      icon: "FaUser",
      desc: "Spanish is a Romance language spoken by millions of people worldwide. It is the official language of Spain and many Latin American countries, and it has a vibrant culture and literature associated with it.",
    },
    {
      name: "French",
      icon: "FaUser",
      desc: "French is a Romance language known for its elegance and cultural influence. It is the official language of France and is widely spoken in many countries. French is also an important language in diplomacy and the arts.",
    },
    {
      name: "Mandarin Chinese",
      icon: "FaUser",
      desc: "Mandarin Chinese is the most widely spoken language in the world. It is the official language of China and is used by a significant portion of the global population. Learning Mandarin opens up opportunities in business, culture, and communication.",
    },
    {
      name: "Arabic",
      icon: "FaUser",
      desc: "Arabic is a Semitic language spoken by millions of people across the Middle East and North Africa. It has a rich history and is the liturgical language of Islam. Arabic is also an official language of the United Nations.",
    },
  ];
  return (
    <CampContainer>
      <div className="mt-16 lg:-mt-40 lg:px-24 relative languageSwiper">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-lan",
            prevEl: ".swiper-button-prev-lan",
          }}
        >
          {languages.map((lan, index) => (
            <SwiperSlide key={index}>
              <div
                className="p-4 lg:p-12 rounded-lg w-full text-white text-center relative"
                style={{ backgroundImage: `url(${bgIcon})` }}
              >
                {/* <div className="h-full w-full bg-camp-primary-hover bg-opacity-90 absolute left-0 top-0 z-10"></div> */}
                <div className="z-30">
                  <FaUsers className="mx-auto h-16 w-16 lg:h-24 lg:w-24 lg:mb-6" />
                  <p className="text-2xl lg:text-3xl my-3">Bangla</p>
                  <p className="lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, possimus!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev-lan absolute left-10 lg:left-0 top-[38%] z-50">
          <AiOutlineLeft className="lg:h-6 lg:w-6" />
        </div>
        <div className="swiper-button-next-lan absolute right-2 lg:right-0 top-[38%] z-50">
          <AiOutlineRight className="lg:h-6 lg:w-6" />
        </div>
      </div>
    </CampContainer>
  );
};

export default Languages;
