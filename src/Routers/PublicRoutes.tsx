import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../Constants";

export const PublicRoutes = () => {
  // const { isAuthenticated } = useAppSelector((store) => store.auth);
  // return isAuthenticated ? <Navigate to={ROUTES.HOME} replace /> : <Outlet />;
};

export default PublicRoutes;
