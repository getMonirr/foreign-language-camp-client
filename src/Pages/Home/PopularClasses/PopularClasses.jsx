import useClasses from "../../../Hooks/useClasses";
import SectionHeading from "../../../components/Shared/SectionHeading";
import ClassCard from "./ClassCard";
import CampContainer from "../../../components/Shared/CampContainer";
import CampBtn from "../../../components/Shared/CampBtn";

const PopularClasses = () => {
  const { classes } = useClasses();
  return (
    <div className="mt-24">
      <SectionHeading title="Popular Classes">
        Here is our popular classes. you can see all popular classes here.
        popular class based on the number of students.
      </SectionHeading>
      <CampContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 mb-16">
          {(classes &&
            Array.isArray(classes) &&
            classes.map((item) => (
              <ClassCard key={item._id} item={item} />
            ))) || <>Not Class Found</>}
        </div>
        <div className="text-center mt-32">
          <CampBtn>Show All Class</CampBtn>
        </div>
      </CampContainer>
    </div>
  );
};

export default PopularClasses;
