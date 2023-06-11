

import axios from "axios";
import { useQuery } from "react-query";

const useInstructor = () => {
  const { data: instructors = [], isLoading: isInstructorLoading } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_LINK}/popularInstructors`
      );
      return data;
    },
  });
  return { instructors, isInstructorLoading };
};

export default useInstructor;
