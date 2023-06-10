import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import Loading from "../../components/Shared/Loading";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  // TODO: url typing get access must be protected
  const { user, loading } = useAuth();
  const { role } = useRole();

  if (loading) {
    return <Loading />;
  }
  if (!user && role !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminRoutes;
