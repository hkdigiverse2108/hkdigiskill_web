import { useEffect, useState } from "react";
import StickyBar from "../Utils/StickyBar";
import { ImagePath } from "../Constants";
import { GetHeaderMenuItems } from "../Utils/GetHeaderMenuItems";
import type { MenuItem } from "../Types";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const fix = StickyBar(200);

  const handleSubMenuToggle = (menu: string) => setActiveSubMenu((prev) => (prev === menu ? null : menu));
  console.log("fix : ", fix);
  useEffect(() => {
    const menuItems = GetHeaderMenuItems() || [];
    setMenuItems(menuItems);
  }, []);

  return (
    <>
      <header className={`site-header theme-header-1 header-get-sticky ${fix === true ? "edublink-header-sticky" : ""}`}>
        <div className="edublink-header-area edublink-navbar edublink-navbar-expand-lg">
          <div className="edublink-container-fluid">
            <div className="eb-header-navbar edublink-align-items-center">
              <div className="site-branding site-logo-info">
                <div className="logo-wrapper">
                  <Link to="" className="navbar-brand site-main-logo" rel="home">
                    <img width={158} height={50} src={`${ImagePath}/logo/logo-dark.png`} className="site-logo" alt="logo" decoding="async" />
                  </Link>
                </div>
              </div>
              <div className="header-category">
                <nav className="main-navigation">
                  <ul className="category-menu edublink-navbar-nav">
                    <li className="cat-menu-item dropdown">
                      <a className="cat-menu-anchor-item">
                        <i className="icon-1" />
                        Category
                      </a>
                      <ul className="edublink-dropdown-menu">
                        <li className="cat-item">
                          <Link to="/Bussiness">Business</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/Bussiness">Cooking</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="  edublink-theme-header-nav edublink-d-none edublink-d-xl-block">
                <nav id="site-navigation" className=" flex! justify-center! main-navigation edublink-theme-nav edublink-navbar-collapse">
                  <div className="edublink-navbar-primary-menu ">
                    <div id="primary-menu-container-id" className="primary-menu-container-class">
                      <ul id="primary-menu-custom-id" className="edublink-default-header-navbar edublink-navbar-nav edublink-navbar-right">
                        {menuItems.map((item, index) => (
                          <li key={index} id={`menu-item-${index}`} className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-align-left">
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
                <Link to="" target="_self" className="main-header-btn edu-btn btn-medium">
                  Login <i className="icon-4" />
                </Link>
                <div className="quote-icon edublink-theme-nav-responsive hamburger-icon">
                  <div className="edublink-mobile-hamburger-menu" onClick={() => setMobileMenu(!isMobileMenu)}>
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
        <div className={`edublink-mobile-menu-nav-wrapper ${isMobileMenu ? "edublink-mobile-menu-visible" : ""}`}>
          <div className="responsive-header-top">
            <div className="responsive-header-logo">
              <div className="logo-wrapper">
                <Link to="" className="navbar-brand site-main-logo" rel="home">
                  <img width={158} height={50} src={`${ImagePath}/logo/logo-dark.png`} className="site-logo" alt="edublink" decoding="async" />
                </Link>
              </div>
            </div>
            <div className="edublink-mobile-menu-close" onClick={() => setMobileMenu(!isMobileMenu)}>
              <span>
                <i className="icon-73" />
              </span>
            </div>
          </div>
          <ul id="edublink-mobile-menu-item" className="edublink-mobile-menu-item metismenu">
            <li className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13616 dropdown menu-align-left ${activeSubMenu === "pages" ? "mm-active" : ""}`} onClick={() => handleSubMenuToggle("pages")}>
              <Link className="nav-link" to="">
                Category
              </Link>
              <ul className="edublink-dropdown-menu">
                <li className="cat-item">
                  <Link to="">Business</Link>
                </li>
                <li className="cat-item">
                  <Link to="">Cooking</Link>
                </li>
              </ul>
            </li>
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13617 dropdown menu-align-left">
                <NavLink to={item?.link || ""} className="nav-link">
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
