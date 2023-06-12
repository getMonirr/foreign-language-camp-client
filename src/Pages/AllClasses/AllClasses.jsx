import SectionHeading from "../../components/Shared/SectionHeading";
import CampContainer from "../../components/Shared/CampContainer";
import SingleCard from "./SingleClass";
import { useQuery } from "react-query";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import PageHeader from "../../components/Shared/PageHeader/PageHeader";
import Breadcrumbs from "../../components/Shared/Breadcrumbs/Breadcrumbs";

const AllClasses = () => {
  const { user } = useAuth();

  const { data: classes } = useQuery({
    queryKey: ["all-classes", user?.email],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_LINK}/all-classes`
      );
      return data;
    },
  });
  return (
    <>
      <PageHeader />
      <Breadcrumbs />
      <div className="my-32">
        <SectionHeading title="Our All Classes">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum magni
          tempore, quae asperiores nemo fuga? Perspiciatis exercitationem
          reprehenderit corrupti repellat.
        </SectionHeading>
        <CampContainer>
          <div className="">
            {(classes &&
              Array.isArray(classes) &&
              classes.map((item) => (
                <SingleCard item={item} key={item._id} />
              ))) || <>No Instructors Found</>}
          </div>
        </CampContainer>
      </div>
    </>
  );
};

export default AllClasses;
