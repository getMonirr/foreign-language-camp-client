import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Languages from "../Languages/Languages";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <>
      <Banner />
      <Languages />
      <PopularClasses />
      <PopularInstructor />
      <ContactUs />
    </>
  );
};

export default Home;
