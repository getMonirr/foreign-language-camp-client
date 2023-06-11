import SectionHeading from "../../components/Shared/SectionHeading";
import CampContainer from "../../components/Shared/CampContainer";
import SingleCard from "./SingleClass";
import { useQuery } from "react-query";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

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
    <div>
      <SectionHeading>Our All Classes</SectionHeading>
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
  );
};

export default AllClasses;
