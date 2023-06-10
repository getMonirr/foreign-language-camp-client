import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import Loading from "../../components/Shared/Loading";
import { Navigate } from "react-router-dom";

const InstructorRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const { role } = useRole();

  if (loading) {
    return <Loading />;
  }
  if (user && role == "instructor") {
    return children;
  }

  return <Navigate to="/login" />;
};

export default InstructorRoutes;
