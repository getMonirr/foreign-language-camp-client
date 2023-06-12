import { useQuery } from "react-query";
import useAuth from "../../Hooks/useAuth";
import CampContainer from "../../components/Shared/CampContainer";
import SectionHeading from "../../components/Shared/SectionHeading";
import InstructorCard from "./InstructorCard";
import axios from "axios";
import PageHeader from "../../components/Shared/PageHeader/PageHeader";
import Breadcrumbs from "../../components/Shared/Breadcrumbs/Breadcrumbs";

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
    <>
      <PageHeader />
      <Breadcrumbs />
      <div className="my-32">
        <SectionHeading title="Our All Instructors">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          atque ea ullam sapiente pariatur possimus, iure ipsum consectetur
          impedit! Ut.
        </SectionHeading>
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
    </>
  );
};

export default AllInstructors;
