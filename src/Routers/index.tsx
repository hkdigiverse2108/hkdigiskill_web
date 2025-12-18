import { createBrowserRouter } from "react-router-dom";
import { PageRoutes } from "./PageRoutes";
import Layout from "../Layout";
import PageNotFound from "../Pages/PageNotFound";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: PageRoutes,
  },
  // {
  //   element: <PrivateRoutes />,
  //   children: [
  //     {
  //       element: <Layout />,
  //       children: PageRoutes,
  //     },
  //   ],
  // },
  // {
  //   element: <PublicRoutes />,
  //   children: AuthRoutes,
  // },
  
]);
