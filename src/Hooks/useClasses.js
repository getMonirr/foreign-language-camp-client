import axios from "axios";
import { useQuery } from "react-query";

const useClasses = () => {
  const { data: classes = [], isLoading: isClassesLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      // TODO: transform to server
      const { data } = await axios("classes.json");
      return data;
    },
  });

  return { classes, isClassesLoading };
};

export default useClasses;
