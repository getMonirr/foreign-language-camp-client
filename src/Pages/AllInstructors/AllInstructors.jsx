import { useQuery } from "react-query";
import useAuth from "../../Hooks/useAuth";
import CampContainer from "../../components/Shared/CampContainer";
import SectionHeading from "../../components/Shared/SectionHeading";
import InstructorCard from "./InstructorCard";
import axios from "axios";

const AllInstructors = () => {
  const { user } = useAuth();

  const { data: instructors } = useQuery({
    queryKey: ["all-classes", user?.email],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_LINK}/instructors`
      );
      return data;
    },
  });

  return (
    <div>
      <SectionHeading>Our All Instructors</SectionHeading>
      <CampContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 mb-16">
          {(instructors &&
            Array.isArray(instructors) &&
            instructors.map((instructor) => (
              <InstructorCard instructor={instructor} key={instructor._id} />
            ))) || <>No Instructors Found</>}
        </div>
      </CampContainer>
    </div>
  );
};

export default AllInstructors;
