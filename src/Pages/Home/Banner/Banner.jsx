import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import Hero from "./Hero";
import { useQuery } from "react-query";
import axios from "axios";

const Banner = () => {

  const { data: content } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_LINK}/banner`);
      return data;
    },
  });

  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwipe"
      >
        {content &&
          Array.isArray(content) &&
          content.map((item, index) => (
            <SwiperSlide key={index}>
              <Hero content={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
