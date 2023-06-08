import axios from "axios";

// put a user in DB
const putUser = async (user) => {
  const { data } = await axios.put(
    `${import.meta.env.VITE_API_LINK}/users?email=${user?.email}`,
    user
  );
  return data;
};

export default putUser;
