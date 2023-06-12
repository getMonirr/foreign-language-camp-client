import CampContainer from "../../../components/Shared/CampContainer";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import bgIcon from "../../../assets/bg/Icon-Grid.svg";
import { SiGoogleclassroom } from "react-icons/si";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Language.css";

// import required modules
import { Navigation } from "swiper";
import { useQuery } from "react-query";
import axios from "axios";

const Languages = () => {
  const { data: languages } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_LINK}/banner`);
      return data;
    },
  });

  return (
    <CampContainer>
      <div className="mt-16 lg:-mt-40 lg:px-24 relative languageSwiper lg:block hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-lan",
            prevEl: ".swiper-button-prev-lan",
          }}
        >
          {languages &&
            Array.isArray(languages) &&
            languages.map((lan) => (
              <SwiperSlide key={lan._id}>
                <div
                  className="p-4 lg:p-12 rounded-lg w-full text-white text-center relative"
                  style={{ backgroundImage: `url(${bgIcon})` }}
                >
                  {/* <div className="h-full w-full bg-camp-primary-hover bg-opacity-90 absolute left-0 top-0 z-10"></div> */}
                  <div className="z-30">
                    <SiGoogleclassroom className="mx-auto h-16 w-16 lg:h-24 lg:w-24 lg:mb-6" />
                    <p className="text-2xl lg:text-2xl my-3">{lan.name}</p>
                    <p className="lg:text-lg">
                      {lan.description?.slice(0, 80)}
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
