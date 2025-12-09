import { ROUTES } from "../Constants";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import BlogDetails from "../Pages/Blog/BlogDetails";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq";
import Gallery from "../Pages/Gallery";
import Home from "../Pages/Home";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import ReturnPolicy from "../Pages/ReturnPolicy";
import TermsCondition from "../Pages/TermsCondition";

export const PageRoutes = [
  { path: ROUTES.HOME, element: <Home /> },

  // ======= Quick Links =======
  { path: ROUTES.ABOUT, element: <About /> },
  { path: ROUTES.GALLERY, element: <Gallery /> },
  { path: ROUTES.CONTACT, element: <Contact /> },
  { path: ROUTES.BLOG.BASE, element: <Blog /> },
  { path: ROUTES.BLOG.DETAILS, element: <BlogDetails /> },

  // ======= Support & Policy =======
  { path: ROUTES.FAQ, element: <Faq /> },
  { path: ROUTES.PRIVACY_POLICY, element: <PrivacyPolicy /> },
  { path: ROUTES.TERMS_CONDITION, element: <TermsCondition /> },
  { path: ROUTES.RETURN_POLICY, element: <ReturnPolicy /> },
];

// export const AuthRoutes = [];
