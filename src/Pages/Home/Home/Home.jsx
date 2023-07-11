import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Card from "../Card/Card";
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
      <Card />
      <Blog />
      <ContactUs />
    </>
  );
};

export default Home;
