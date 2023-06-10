import axios from "axios";
import { useQuery } from "react-query";

const useClasses = () => {
  const { data: classes = [], isLoading: isClassesLoading } = useQuery({
    queryKey: ["popularClasses"],
    queryFn: async () => {
      // TODO: transform to server
      const { data } = await axios(`${import.meta.env.VITE_API_LINK}/popularClasses`);
      return data;
    },
  });

  return { classes, isClassesLoading };
};

export default useClasses;
