
import SectionHeading from "../../components/Shared/SectionHeading";
import useClasses from "../../Hooks/useClasses";
import CampContainer from "../../components/Shared/CampContainer";
import SingleCard from "./SingleClass";

const AllClasses = () => {
  const { classes } = useClasses();
  return (
    <div>
      <SectionHeading>Our All Classes</SectionHeading>
      <CampContainer>
        <div className="">
          {/* TODO: replace index to _id */}
          {(classes &&
            Array.isArray(classes) &&
            classes.map((item, index) => (
              <SingleCard item={item} key={index} />
            ))) || <>No Instructors Found</>}
        </div>
      </CampContainer>
    </div>
  );
};

export default AllClasses;
