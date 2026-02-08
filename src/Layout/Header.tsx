import { useEffect, useState } from "react";
// import StickyBar from "../Utils/StickyBar";
import { ImagePath, ROUTES } from "../Constants";
import { GetHeaderMenuItems } from "../Utils/GetHeaderMenuItems";
import type { MenuItem } from "../Types";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Queries } from "../Api";
import { useAppDispatch, useAppSelector } from "../Store/Hook";
import { setLogoutModalOpen } from "../Store/Slices/ModalSlice";

const Header = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<boolean | null>(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [fix, setFix] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const AllSettings = useAppSelector((state) => state.settings.settings);

  const { data } = Queries.useGetCourseCategory();
  const allCategory = data?.data?.course_category_data;

  const scroll = 300;
  useEffect(() => {
    const handleScroll = () => {
      setFix(window.scrollY > scroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  useEffect(() => {
    const menuItems = GetHeaderMenuItems() || [];
    setMenuItems(menuItems);
  }, []);

  return (
    <>
      <header
        className={`site-header theme-header-1 header-get-sticky overflow-hidden ${
          fix ? "edublink-header-sticky " : ""
        }`}
      >
        <div className="edublink-header-area edublink-navbar edublink-navbar-expand-lg">
          <div className="edublink-container-fluid">
            <div className="eb-header-navbar edublink-align-items-center">
              <div className="site-branding site-logo-info">
                <div className="logo-wrapper ">
                  <Link
                    to=""
                    className="navbar-brand site-main-logo"
                    rel="home"
                  >
                    <img
                      width={158}
                      height={50}
                      src={AllSettings?.logo}
                      className="site-logo h-fit!"
                      alt="logo"
                      decoding="async"
                    />
                  </Link>
                </div>
              </div>
              <div className="header-category">
                <nav className="main-navigation">
                  <ul className="category-menu edublink-navbar-nav">
                    {allCategory?.length && (
                      <li className="cat-menu-item dropdown">
                        <a className="cat-menu-anchor-item">
                          <i className="icon-1" />
                          Category
                        </a>
                        <ul className="edublink-dropdown-menu">
                          {allCategory?.map((item, index) => {
                            return (
                              <li key={index} className="cat-item">
                                <Link to={ROUTES.COURSE.BASE} state={item?._id}>
                                  {item?.name}
                                </Link>
                              </li>
                            );
                          })}

                          {/* <li className="cat-item">
                          <Link to="/Bussiness">Cooking</Link>
                        </li> */}
                        </ul>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
              <div className="  edublink-theme-header-nav edublink-d-none edublink-d-xl-block">
                <nav
                  id="site-navigation"
                  className=" flex! justify-center! main-navigation edublink-theme-nav edublink-navbar-collapse"
                >
                  <div className="edublink-navbar-primary-menu ">
                    <div
                      id="primary-menu-container-id"
                      className="primary-menu-container-class"
                    >
                      <ul
                        id="primary-menu-custom-id"
                        className="edublink-default-header-navbar edublink-navbar-nav edublink-navbar-right"
                      >
                        {menuItems.map((item, index) => (
                          <li
                            key={index}
                            id={`menu-item-${index}`}
                            className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-align-left"
                          >
                            <NavLink to={item?.link || ""} className="nav-link">
                              {item?.Title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="edublink-header-right-side">
                {isAuthenticated ? (
                  <button
                    onClick={() => dispatch(setLogoutModalOpen(true))}
                    className="main-header-btn edu-btn btn-medium"
                  >
                    Logout <i className="icon-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => navigate(ROUTES.AUTH.BASE)}
                    className="main-header-btn edu-btn btn-medium"
                  >
                    Login <i className="icon-4" />
                  </button>
                )}
                <div className="quote-icon edublink-theme-nav-responsive hamburger-icon">
                  <div
                    className="edublink-mobile-hamburger-menu"
                    onClick={() => setMobileMenu(!isMobileMenu)}
                  >
                    <span>
                      <i className="icon-54" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="edublink-mobile-menu">
        <div className="edublink-mobile-menu-overlay" />
        <div
          className={`edublink-mobile-menu-nav-wrapper ${
            isMobileMenu ? "edublink-mobile-menu-visible" : ""
          }`}
        >
          <div className="responsive-header-top">
            <div className="responsive-header-logo">
              <div className="logo-wrapper">
                <Link to="" className="navbar-brand site-main-logo" rel="home">
                  <img
                    width={158}
                    height={50}
                    src={`${ImagePath}/logo/logo-dark.png`}
                    className="site-logo"
                    alt="edublink"
                    decoding="async"
                  />
                </Link>
              </div>
            </div>
            <div
              className="edublink-mobile-menu-close"
              onClick={() => setMobileMenu(!isMobileMenu)}
            >
              <span>
                <i className="icon-73" />
              </span>
            </div>
          </div>
          <ul
            id="edublink-mobile-menu-item"
            className="edublink-mobile-menu-item metismenu"
          >
            {allCategory?.length && (
              <li
                className={`menu-item menu-item-type-custom menu-item-object-custom  menu-item-has-children nav-item menu-item-13616 dropdown menu-align-left ${
                  activeSubMenu ? "mm-active" : ""
                }`}
                onClick={() => setActiveSubMenu(!activeSubMenu)}
              >
                <a
                  className="nav-link"
                  aria-expanded={activeSubMenu ? "true" : "false"}
                >
                  Category
                </a>
                <ul
                  className={`edublink-dropdown-menu ${
                    activeSubMenu ? "block" : "hidden"
                  }`}
                >
                  {allCategory?.map((item, index) => {
                    return (
                      <li key={index} className="cat-item">
                        <Link
                          onClick={() => setMobileMenu(!isMobileMenu)}
                          to={ROUTES.COURSE.BASE}
                          state={item?._id}
                        >
                          {item?.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            )}

            {menuItems.map((item, index) => (
              <li
                key={index}
                className="menu-item menu-item-type-custom menu-item-object-custom  nav-item menu-item-13617 dropdown menu-align-left"
              >
                <NavLink
                  onClick={() => setMobileMenu(!isMobileMenu)}
                  to={item?.link || ""}
                  className="nav-link"
                >
                  {item?.Title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
