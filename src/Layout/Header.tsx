import { useState } from "react";

import { ImagePath } from "../Constants";
import StickyBar from "../Utils/StickyBar";

const Header = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const fix = StickyBar(200);

  const handleSubMenuToggle = (menu: string) =>
    setActiveSubMenu((prev) => (prev === menu ? null : menu));

  return (
    <>
      <header
        className={`site-header theme-header-1 header-get-sticky ${
          fix ? "edublink-header-sticky" : ""
        }`}
      >
        <div className="edublink-header-area edublink-navbar edublink-navbar-expand-lg">
          <div className="edublink-container-fluid">
            <div className="eb-header-navbar edublink-align-items-center">
              <div className="site-branding site-logo-info">
                <div
                  className="logo-wrapper"
                  itemScope
                  itemType="http://schema.org/Brand"
                >
                  <a
                    href="https://demo.edublink.co/"
                    className="navbar-brand site-main-logo"
                    rel="home"
                  >
                    <img
                      width={158}
                      height={50}
                      src={`${ImagePath}/logo/logo-dark.png`}
                      className="site-logo"
                      alt="logo"
                      decoding="async"
                    />
                  </a>
                  <a
                    href="https://demo.edublink.co/"
                    className="navbar-brand site-white-logo"
                  >
                    <img
                      src="../wp-content/themes/edublink/assets/images/logo-white.png"
                      className="header-white-logo"
                      alt="logo"
                    />
                  </a>
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
                          <a href="https://demo.edublink.co/course-category/business/">
                            Business
                          </a>
                        </li>
                        <li className="cat-item">
                          <a href="https://demo.edublink.co/course-category/cooking/">
                            Cooking
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="edublink-theme-header-nav edublink-d-none edublink-d-xl-block">
                <nav
                  id="site-navigation"
                  className="main-navigation edublink-theme-nav edublink-navbar-collapse"
                >
                  <div className="edublink-navbar-primary-menu">
                    <div
                      id="primary-menu-container-id"
                      className="primary-menu-container-class"
                    >
                      <ul
                        id="primary-menu-custom-id"
                        className="edublink-default-header-navbar edublink-navbar-nav edublink-navbar-right"
                      >
                        <li
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-13615"
                          className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-13615 active-mega-menu menu-item-has-children dropdown menu-align-fullwidth"
                        >
                          <a className="nav-link" href="#" aria-haspopup="true">
                            Home
                          </a>
                          <ul
                            className="edublink-mega-menu home-pages-mega-menu"
                            style={{ width: "100%" }}
                          >
                            <div className="edublink-mega-menu-inner">
                              {" "}
                              <div
                                data-elementor-type="wp-post"
                                data-elementor-id={13579}
                                className="elementor elementor-13579"
                              >
                                <section
                                  className="elementor-section elementor-top-section elementor-element elementor-element-bcbd27c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                  data-id="bcbd27c"
                                  data-element_type="section"
                                >
                                  <div className="elementor-container elementor-column-gap-extended">
                                    <div
                                      className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f532adc"
                                      data-id="f532adc"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-25928ad elementor-widget elementor-widget-edublink-menu-list"
                                          data-id="25928ad"
                                          data-element_type="widget"
                                          data-widget_type="edublink-menu-list.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="edublink-el-single-depth-menu">
                                              <nav className="edublink-el-menu-list">
                                                <ul
                                                  id="menu-1-25928ad"
                                                  className="edublink-nav-dropdown-menu"
                                                >
                                                  <li
                                                    id="menu-item-13592"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-13592"
                                                  >
                                                    <a href="https://demo.edublink.co/">
                                                      EduBlink Education
                                                      <span className="eb-menu-hot-badge">
                                                        HOT
                                                      </span>
                                                    </a>
                                                  </li>
                                                  <li
                                                    id="menu-item-13586"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1233 current_page_item menu-item-13586"
                                                  >
                                                    <a
                                                      href="index.html"
                                                      aria-current="page"
                                                    >
                                                      Distant Learning
                                                    </a>
                                                  </li>
                                                  <li
                                                    id="menu-item-13602"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13602"
                                                  >
                                                    <a href="https://demo.edublink.co/university/">
                                                      University
                                                    </a>
                                                  </li>
                                                </ul>
                                              </nav>
                                            </div>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-110c9b8"
                                      data-id="110c9b8"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-77b02c8 elementor-widget elementor-widget-edublink-menu-list"
                                          data-id="77b02c8"
                                          data-element_type="widget"
                                          data-widget_type="edublink-menu-list.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="edublink-el-single-depth-menu">
                                              <nav className="edublink-el-menu-list">
                                                <ul
                                                  id="menu-1-77b02c8"
                                                  className="edublink-nav-dropdown-menu"
                                                >
                                                  <li
                                                    id="menu-item-13606"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13606"
                                                  >
                                                    <a href="https://demo.edublink.co/business-coach/">
                                                      Business Coach
                                                    </a>
                                                  </li>
                                                  <li
                                                    id="menu-item-13607"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13607"
                                                  >
                                                    <a href="https://demo.edublink.co/motivation/">
                                                      Motivation
                                                    </a>
                                                  </li>
                                                  <li
                                                    id="menu-item-13608"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13608"
                                                  >
                                                    <a href="https://demo.edublink.co/programming/">
                                                      Programming
                                                    </a>
                                                  </li>
                                                </ul>
                                              </nav>
                                            </div>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f032a32"
                                      data-id="f032a32"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-25f14d4 elementor-widget elementor-widget-image"
                                          data-id="25f14d4"
                                          data-element_type="widget"
                                          data-widget_type="image.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <img
                                              width={534}
                                              height={315}
                                              src={`${ImagePath}others/mega-menu-image.webp`}
                                              className="attachment-large size-large wp-image-13582"
                                              alt=""
                                              srcSet={`${ImagePath}others/mega-menu-image.webp 534w, ${ImagePath}others/mega-menu-image.webp 300w`}
                                              sizes="(max-width: 534px) 100vw, 534px"
                                            />{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                          </ul>
                        </li>
                        <li
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-13616"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13616 dropdown menu-align-left"
                        >
                          <a className="nav-link" href="#" aria-haspopup="true">
                            Pages
                          </a>
                          <ul role="menu" className=" edublink-dropdown-menu">
                            <li
                              itemType="https://www.schema.org/SiteNavigationElement"
                              id="menu-item-19159"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-19159 edublink-dropdown-submenu menu-align-left"
                            >
                              <a className="nav-link" href="#">
                                About Us
                              </a>
                              <ul
                                role="menu"
                                className=" edublink-dropdown-menu"
                              >
                                <li
                                  itemType="https://www.schema.org/SiteNavigationElement"
                                  id="menu-item-19160"
                                  className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-19160 menu-align-left"
                                >
                                  <a
                                    className="nav-link"
                                    href="https://demo.edublink.co/about-us-1/"
                                  >
                                    About Us 1
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              itemType="https://www.schema.org/SiteNavigationElement"
                              id="menu-item-19180"
                              className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-19180 menu-align-left"
                            >
                              <a
                                className="nav-link"
                                href="https://demo.edublink.co/404"
                              >
                                404 Page
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-13617"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13617 dropdown menu-align-left"
                        >
                          <a className="nav-link" href="#" aria-haspopup="true">
                            Courses
                          </a>
                          <ul role="menu" className=" edublink-dropdown-menu">
                            <li
                              itemType="https://www.schema.org/SiteNavigationElement"
                              id="menu-item-19181"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-19181 edublink-dropdown-submenu menu-align-left"
                            >
                              <a className="nav-link" href="#">
                                Courses Style
                              </a>
                              <ul
                                role="menu"
                                className=" edublink-dropdown-menu"
                              >
                                <li
                                  itemType="https://www.schema.org/SiteNavigationElement"
                                  id="menu-item-19182"
                                  className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-19182 menu-align-left"
                                >
                                  <a
                                    className="nav-link"
                                    href="https://demo.edublink.co/courses/?course_preset=1"
                                  >
                                    Course Style 1
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-13618"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13618 dropdown menu-align-left"
                        >
                          <a className="nav-link" href="#" aria-haspopup="true">
                            Blog
                          </a>
                          <ul role="menu" className=" edublink-dropdown-menu">
                            <li
                              itemType="https://www.schema.org/SiteNavigationElement"
                              id="menu-item-19205"
                              className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-19205 menu-align-left"
                            >
                              <a
                                className="nav-link"
                                href="https://demo.edublink.co/blog/?excerpt_length=10&post_preset=1"
                              >
                                Blog Style 1
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-13619"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13619 dropdown menu-align-left"
                        >
                          <a className="nav-link" href="#" aria-haspopup="true">
                            Contact
                          </a>
                          <ul role="menu" className=" edublink-dropdown-menu">
                            <li
                              itemType="https://www.schema.org/SiteNavigationElement"
                              id="menu-item-19210"
                              className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-19210 menu-align-left"
                            >
                              <a
                                className="nav-link"
                                href="https://demo.edublink.co/contact-us/"
                              >
                                Contact Us
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="edublink-header-right-side">
                <div className="edu-header-search-field">
                  <div className="inner">
                    <form
                      action="https://demo.edublink.co/courses/"
                      className="search-form"
                      method="get"
                    >
                      <input
                        type="text"
                        name="search_query"
                        placeholder="Search"
                        className="edublink-search-popup-field"
                        autoComplete="off"
                      />
                      <input
                        type="hidden"
                        defaultValue="lp_course_search"
                        name="eb_lp_course_filter"
                      />
                      <button className="submit-button">
                        <i className="icon-2" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="header-quote">
                  <div className="quote-icon quote-search">
                    <button className="search-trigger">
                      <i className="icon-2" />
                    </button>
                  </div>
                </div>
                <div className="edublink-woo-mini-cart-wrapper woocommerce">
                  <div className="edublink-woo-mini-cart-inner">
                    <div className="edublink-woo-mini-cart-icon-wrapper edublink-woo-mini-cart-active-on-hover">
                      <a
                        className="edublink-woo-mini-cart-link edublink-woo-mini-cart-visible-on-hover"
                        href="https://demo.edublink.co/cart/"
                        target="_self"
                      >
                        <i aria-hidden="true" className="icon-3" />
                      </a>
                      <span className="edublink-woo-mini-cart-total-item">
                        0
                      </span>
                      <div className="edublink-woo-mini-cart-content">
                        <div className="widget_shopping_cart_content">
                          <div className="edublink-cart-empty-content">
                            <p className="edublink-cart-empty-text">
                              <strong>Currently Empty:</strong>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  0
                                  <span className="decimal-separator">.00</span>
                                </bdi>
                              </span>{" "}
                            </p>
                            <p className="edublink-cart-shop-page-link">
                              <a
                                href="https://demo.edublink.co/shop/"
                                className="edublink-cart-shop-page-button"
                              >
                                Continue shopping
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://demo.edublink.co/contact-us"
                  target="_self"
                  className="main-header-btn edu-btn btn-medium"
                >
                  Try for free <i className="icon-4" />
                </a>
                <div className="quote-icon edublink-theme-nav-responsive hamburger-icon">
                  <div
                    className="edublink-mobile-hamburger-menu"
                    onClick={() => setMobileMenu(!isMobileMenu)}
                  >
                    <a href="#javascript">
                      <i className="icon-54" />
                    </a>
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
              <div
                className="logo-wrapper"
                itemScope
                itemType="http://schema.org/Brand"
              >
                <a
                  href="https://demo.edublink.co/"
                  className="navbar-brand site-main-logo"
                  rel="home"
                >
                  <img
                    width={158}
                    height={50}
                    src={`${ImagePath}/logo/logo-dark.png`}
                    className="site-logo"
                    alt="EduBlink"
                    decoding="async"
                  />
                </a>
                <a
                  href="https://demo.edublink.co/"
                  className="navbar-brand site-white-logo"
                >
                  <img
                    src="../wp-content/themes/edublink/assets/images/logo-white.png"
                    className="header-white-logo"
                    alt="EduBlink"
                  />
                </a>
              </div>
            </div>
            <div
              className="edublink-mobile-menu-close"
              onClick={() => setMobileMenu(!isMobileMenu)}
            >
              <a href="#javascript">
                <i className="icon-73" />
              </a>
            </div>
          </div>
          <ul
            id="edublink-mobile-menu-item"
            className="edublink-mobile-menu-item metismenu"
          >
            <li
              itemType="https://www.schema.org/SiteNavigationElement"
              className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13616 dropdown menu-align-left ${
                activeSubMenu === "pages" ? "mm-active" : ""
              }`}
              onClick={() => handleSubMenuToggle("pages")}
            >
              <a className="nav-link" href="#">
                Pages
              </a>
              <ul
                role="menu"
                className={`edublink-dropdown-menu mm-collapse ${
                  activeSubMenu === "pages" ? "mm-show" : ""
                }`}
              >
                <li
                  itemType="https://www.schema.org/SiteNavigationElement"
                  className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-19159 edublink-dropdown-submenu menu-align-left ${
                    activeSubMenu === "about" ? "mm-active" : ""
                  }`}
                  onClick={() => handleSubMenuToggle("about")}
                >
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                  <ul
                    role="menu"
                    className={`edublink-dropdown-menu mm-collapse ${
                      activeSubMenu === "about" ? "mm-show" : ""
                    }`}
                  >
                    <li
                      itemType="https://www.schema.org/SiteNavigationElement"
                      className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-19160 menu-align-left"
                    >
                      <a
                        className="nav-link"
                        href="https://demo.edublink.co/about-us-1/"
                      >
                        About Us 1
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  itemType="https://www.schema.org/SiteNavigationElement"
                  className="menu-item menu-item-type-post_type menu-item-object-zoom-meetings nav-item menu-item-21485 menu-align-left"
                >
                  <a
                    className="nav-link"
                    href="https://demo.edublink.co/zoom-meetings/developing-your-communication/"
                  >
                    Zoom Meeting
                  </a>
                </li>
              </ul>
            </li>
            <li
              itemType="https://www.schema.org/SiteNavigationElement"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13617 dropdown menu-align-left"
            >
              <a className="nav-link" href="#" aria-haspopup="true">
                Courses
              </a>
              <ul role="menu" className=" edublink-dropdown-menu">
                <li
                  itemType="https://www.schema.org/SiteNavigationElement"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-19201 edublink-dropdown-submenu menu-align-left"
                >
                  <a className="nav-link" href="#">
                    Course Filter
                  </a>
                  <ul role="menu" className=" edublink-dropdown-menu">
                    <li
                      itemType="https://www.schema.org/SiteNavigationElement"
                      className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-19203 menu-align-left"
                    >
                      <a
                        className="nav-link"
                        href="https://demo.edublink.co/course-filter-sidebar-left/"
                      >
                        Filter Sidebar Left
                      </a>
                    </li>
                    <li
                      itemType="https://www.schema.org/SiteNavigationElement"
                      className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-19204 menu-align-left"
                    >
                      <a
                        className="nav-link"
                        href="https://demo.edublink.co/course-filter-sidebar-right/"
                      >
                        Filter Sidebar Right
                      </a>
                    </li>
                    <li
                      itemType="https://www.schema.org/SiteNavigationElement"
                      className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-19202 menu-align-left"
                    >
                      <a
                        className="nav-link"
                        href="https://demo.edublink.co/course-filter-category/"
                      >
                        Filter Category
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              itemType="https://www.schema.org/SiteNavigationElement"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13618 dropdown menu-align-left"
            >
              <a className="nav-link" href="#" aria-haspopup="true">
                Blog
              </a>
              <ul role="menu" className=" edublink-dropdown-menu">
                <li
                  itemType="https://www.schema.org/SiteNavigationElement"
                  className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-19205 menu-align-left"
                >
                  <a
                    className="nav-link"
                    href="https://demo.edublink.co/blog/?excerpt_length=10&post_preset=1"
                  >
                    Blog Style 1
                  </a>
                </li>
              </ul>
            </li>
            <li
              itemType="https://www.schema.org/SiteNavigationElement"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13619 dropdown menu-align-left"
            >
              <a className="nav-link" href="#" aria-haspopup="true">
                Contact
              </a>
              <ul role="menu" className=" edublink-dropdown-menu">
                <li
                  itemType="https://www.schema.org/SiteNavigationElement"
                  className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-19210 menu-align-left"
                >
                  <a
                    className="nav-link"
                    href="https://demo.edublink.co/contact-us/"
                  >
                    Contact Us
                  </a>
                </li>
                <li
                  itemType="https://www.schema.org/SiteNavigationElement"
                  className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-19209 menu-align-left"
                >
                  <a
                    className="nav-link"
                    href="https://demo.edublink.co/contact-me/"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
