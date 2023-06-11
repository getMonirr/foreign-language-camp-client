import useInstructor from "../../../Hooks/useInstructor";
import CampBtn from "../../../components/Shared/CampBtn";
import CampContainer from "../../../components/Shared/CampContainer";
import SectionHeading from "../../../components/Shared/SectionHeading";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructor = () => {
  const { instructors } = useInstructor();
  return (
    <div className="my-32">
      <SectionHeading title="Popular Instructor">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam
        ab eligendi dolores facilis, natus itaque ex suscipit voluptas dicta.
      </SectionHeading>
      <CampContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 mb-16">
          {(instructors &&
            Array.isArray(instructors) &&
            instructors.map((instructor) => (
              <PopularInstructorCard
                instructor={instructor}
                key={instructor._id}
              />
            ))) || <>No Instructors Found</>}
        </div>
        <div className="text-center mt-20">
          <CampBtn>Show all instructors</CampBtn>
        </div>
      </CampContainer>
    </div>
  );
};

export default PopularInstructor;
