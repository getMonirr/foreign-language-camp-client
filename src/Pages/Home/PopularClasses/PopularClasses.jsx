import useClasses from "../../../Hooks/useClasses";
import SectionHeading from "../../../components/Shared/SectionHeading";
import ClassCard from "./ClassCard";
import CampContainer from "../../../components/Shared/CampContainer";

const PopularClasses = () => {
  const { classes } = useClasses();
  return (
    <>
      <SectionHeading>Popular Classes</SectionHeading>
      {/* TODO: replace index to _id and sort by enrolled student */}
      <CampContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 mb-16">
          {(classes &&
            Array.isArray(classes) &&
            classes.map((item, index) => (
              <ClassCard key={index} item={item} />
            ))) || <>Not Class Found</>}
        </div>
      </CampContainer>
    </>
  );
};

export default PopularClasses;
