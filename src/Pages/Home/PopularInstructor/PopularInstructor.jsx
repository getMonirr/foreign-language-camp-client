import useInstructor from "../../../Hooks/useInstructor";
import CampContainer from "../../../components/Shared/CampContainer";
import SectionHeading from "../../../components/Shared/SectionHeading";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructor = () => {
  const { instructors } = useInstructor();
  return (
    <>
      <SectionHeading>Popular Instructor</SectionHeading>
      <CampContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 mb-16">
          {/* TODO: replace index to _id */}
          {(instructors &&
            Array.isArray(instructors) &&
            instructors.map((instructor, index) => (
              <PopularInstructorCard instructor={instructor} key={index} />
            ))) || <>No Instructors Found</>}
        </div>
      </CampContainer>
    </>
  );
};

export default PopularInstructor;
