// get role of the user

import { useQuery } from "react-query";
import useSecureAxios from "./useSecureAxios";
import useAuth from "./useAuth";

const useRole = () => {
  const { user } = useAuth();
  const secureAxios = useSecureAxios();

  const { data: role, refetch:roleRefetch } = useQuery({
    queryKey: ["userRole", user?.email],
    queryFn: async () => {
      const { data } = await secureAxios(`/users?email=${user?.email}`);
      return data?.role;
    },
    enabled: Boolean(user),
  });
  return { role, roleRefetch };
};

export default useRole;
