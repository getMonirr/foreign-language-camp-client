import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import Hero from "./Hero";

const Banner = () => {
  // TODO: make dynamic
  const content = [
    {
      title: "Refreshing",
      subtitle: "Mind And Brain",
      desc: "Meet yourself where you are mindfulness balance, tadasana intentional. Namaste inhales, exhale reach expand open intentional Bikram intentional. Rinse deeper out of your comfort zone bandha self-care hug.",
      img: "https://picsum.photos/id/6/600/400",
    },
    {
      title: "Refreshing",
      subtitle: "Mind And Brain",
      desc: "Meet yourself where you are mindfulness balance, tadasana intentional. Namaste inhales, exhale reach expand open intentional Bikram intentional. Rinse deeper out of your comfort zone bandha self-care hug.",
      img: "https://picsum.photos/id/6/600/400",
    },
    {
      title: "Refreshing",
      subtitle: "Mind And Brain",
      desc: "Meet yourself where you are mindfulness balance, tadasana intentional. Namaste inhales, exhale reach expand open intentional Bikram intentional. Rinse deeper out of your comfort zone bandha self-care hug.",
      img: "https://picsum.photos/id/6/600/400",
    },
    {
      title: "Refreshing",
      subtitle: "Mind And Brain",
      desc: "Meet yourself where you are mindfulness balance, tadasana intentional. Namaste inhales, exhale reach expand open intentional Bikram intentional. Rinse deeper out of your comfort zone bandha self-care hug.",
      img: "https://picsum.photos/id/6/600/400",
    },
  ];

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
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <Hero content={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
