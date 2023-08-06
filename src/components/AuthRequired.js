import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/authContext";
import Layout from "./Layout";

const PublicRoute = () => {
  const auth = useAuth();
  return !auth.token ? <Outlet /> : <Navigate to={"/"} replace />;
};

const PrivateRoute = () => {
  const auth = useAuth();
  return (
    <Layout>
      {auth.token ? <Outlet /> : <Navigate to={"/auth"} replace />}
    </Layout>
  );
};

export { PublicRoute, PrivateRoute };
