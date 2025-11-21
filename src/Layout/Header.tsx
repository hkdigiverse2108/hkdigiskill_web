import { useState } from "react";
import StickyBar from "../Utils/StickyBar";
import { ImagePath } from "../Constants";

const Header = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const fix = StickyBar(200);

  const handleSubMenuToggle = (menu: string) => setActiveSubMenu((prev) => (prev === menu ? null : menu));

  return (
    <>
      <header id="masthead" className={`site-header theme-header-1 header-get-sticky ${fix ? "digiSkill-header-sticky" : ""}`}>
        <div className="digiSkill-header-area digiSkill-navbar digiSkill-navbar-expand-lg">
          <div className="digiSkill-container-fluid">
            <div className="diheader-navbar digiSkill-align-items-center">
              <div className="site-branding site-logo-info">
                <div className="logo-wrapper">
                  <a href="" className="navbar-brand site-main-logo" rel="home">
                    <img width={158} height={50} src={`${ImagePath}/logo/logo.png`} className="site-logo" alt="logo" decoding="async" />
                  </a>
                </div>
              </div>
              <div className="header-category">
                <nav className="main-navigation">
                  <ul className="category-menu digiSkill-navbar-nav">
                    <li className="cat-menu-item dropdown">
                      <a className="cat-menu-anchor-item">
                        <i className="icon-1" />
                        Category
                      </a>
                      <ul className="digiSkill-dropdown-menu">
                        <li className="cat-item">
                          <a href="https://demo.digiSkill.co/course-category/business/">Business</a>
                        </li>
                        <li className="cat-item">
                          <a href="https://demo.digiSkill.co/course-category/cooking/">Cooking</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="digiSkill-theme-header-nav digiSkill-d-none digiSkill-d-xl-block">
                <nav id="site-navigation" className="main-navigation digiSkill-theme-nav digiSkill-navbar-collapse">
                  <div className="digiSkill-navbar-primary-menu">
                    <div id="primary-menu-container-id" className="primary-menu-container-class">
                      <ul id="primary-menu-custom-id" className="digiSkill-default-header-navbar digiSkill-navbar-nav digiSkill-navbar-right">
                        <li itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-13615" className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-13615 active-mega-menu menu-item-has-children dropdown menu-align-fullwidth">
                          <a className="nav-link" href="#" aria-haspopup="true">
                            Home
                          </a>
                          <ul className="digiSkill-mega-menu home-pages-mega-menu" style={{ width: "100%" }}>
                            <div className="digiSkill-mega-menu-inner">
                              {" "}
                              <div data-elementor-type="wp-post" data-elementor-id={13579} className="elementor elementor-13579">
                                <section className="elementor-section elementor-top-section elementor-element elementor-element-bcbd27c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="bcbd27c" data-element_type="section">
                                  <div className="elementor-container elementor-column-gap-extended">
                                    <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f532adc" data-id="f532adc" data-element_type="column">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div className="elementor-element elementor-element-25928ad elementor-widget elementor-widget-digiSkill-menu-list" data-id="25928ad" data-element_type="widget" data-widget_type="digiSkill-menu-list.default">
                                          <div className="elementor-widget-container">
                                            <div className="digiSkill-el-single-depth-menu">
                                              <nav className="digiSkill-el-menu-list">
                                                <ul id="menu-1-25928ad" className="digiSkill-nav-dropdown-menu">
                                                  <li id="menu-item-13592" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-13592">
                                                    <a href="https://demo.digiSkill.co/">
                                                      digiSkill Education<span className="dimenu-hot-badge">HOT</span>
                                                    </a>
                                                  </li>
                                                  <li id="menu-item-13586" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1233 current_page_item menu-item-13586">
                                                    <a href="index.html" aria-current="page">
                                                      Distant Learning
                                                    </a>
                                                  </li>
                                                  <li id="menu-item-13602" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13602">
                                                    <a href="https://demo.digiSkill.co/university/">University</a>
                                                  </li>
                                                </ul>
                                              </nav>
                                            </div>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-110c9b8" data-id="110c9b8" data-element_type="column">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div className="elementor-element elementor-element-77b02c8 elementor-widget elementor-widget-digiSkill-menu-list" data-id="77b02c8" data-element_type="widget" data-widget_type="digiSkill-menu-list.default">
                                          <div className="elementor-widget-container">
                                            <div className="digiSkill-el-single-depth-menu">
                                              <nav className="digiSkill-el-menu-list">
                                                <ul id="menu-1-77b02c8" className="digiSkill-nav-dropdown-menu">
                                                  <li id="menu-item-13606" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13606">
                                                    <a href="https://demo.digiSkill.co/business-coach/">Business Coach</a>
                                                  </li>
                                                  <li id="menu-item-13607" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13607">
                                                    <a href="https://demo.digiSkill.co/motivation/">Motivation</a>
                                                  </li>
                                                  <li id="menu-item-13608" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13608">
                                                    <a href="https://demo.digiSkill.co/programming/">Programming</a>
                                                  </li>
                                                </ul>
                                              </nav>
                                            </div>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f032a32" data-id="f032a32" data-element_type="column">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div className="elementor-element elementor-element-25f14d4 elementor-widget elementor-widget-image" data-id="25f14d4" data-element_type="widget" data-widget_type="image.default">
                                          <div className="elementor-widget-container">
                                            <img width={534} height={315} src={`${ImagePath}others/mega-menu-image.webp`} className="attachment-large size-large wp-image-13582" alt="" srcSet={`${ImagePath}others/mega-menu-image.webp 534w, ${ImagePath}others/mega-menu-image.webp 300w`} sizes="(max-width: 534px) 100vw, 534px" />{" "}
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
                        <li itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-13616" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13616 dropdown menu-align-left">
                          <a className="nav-link" href="#" aria-haspopup="true">
                            Pages
                          </a>
                          <ul role="menu" className=" digiSkill-dropdown-menu">
                            <li itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-19159" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-19159 digiSkill-dropdown-submenu menu-align-left">
                              <a className="nav-link" href="#">
                                About Us
                              </a>
                              <ul role="menu" className=" digiSkill-dropdown-menu">
                                <li itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-19160" className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-19160 menu-align-left">
                                  <a className="nav-link" href="https://demo.digiSkill.co/about-us-1/">
                                    About Us 1
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-19180" className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-19180 menu-align-left">
                              <a className="nav-link" href="https://demo.digiSkill.co/404">
                                404 Page
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-13617" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13617 dropdown menu-align-left">
                          <a className="nav-link" href="#" aria-haspopup="true">
                            Courses
                          </a>
                          <ul role="menu" className=" digiSkill-dropdown-menu">
                            <li itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-19181" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-19181 digiSkill-dropdown-submenu menu-align-left">
                              <a className="nav-link" href="#">
                                Courses Style
                              </a>
                              <ul role="menu" className=" digiSkill-dropdown-menu">
                                <li itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-19182" className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-19182 menu-align-left">
                                  <a className="nav-link" href="https://demo.digiSkill.co/courses/?course_preset=1">
                                    Course Style 1
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-13618" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13618 dropdown menu-align-left">
                          <a className="nav-link" href="#" aria-haspopup="true">
                            Blog
                          </a>
                          <ul role="menu" className=" digiSkill-dropdown-menu">
                            <li itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-19205" className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-19205 menu-align-left">
                              <a className="nav-link" href="https://demo.digiSkill.co/blog/?excerpt_length=10&post_preset=1">
                                Blog Style 1
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-13619" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-13619 dropdown menu-align-left">
                          <a className="nav-link" href="#" aria-haspopup="true">
                            Contact
                          </a>
                          <ul role="menu" className=" digiSkill-dropdown-menu">
                            <li itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-19210" className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-19210 menu-align-left">
                              <a className="nav-link" href="https://demo.digiSkill.co/contact-us/">
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
              <div className="digiSkill-header-right-side">
                <div className="edu-header-search-field">
                  <div className="inner">
                    <form action="https://demo.digiSkill.co/courses/" className="search-form" method="get">
                      <input type="text" name="search_query" placeholder="Search" className="digiSkill-search-popup-field" autoComplete="off" />
                      <input type="hidden" defaultValue="lp_course_search" name="eb_lp_course_filter" />
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
                <div className="digiSkill-woo-mini-cart-wrapper woocommerce">
                  <div className="digiSkill-woo-mini-cart-inner">
                    <div className="digiSkill-woo-mini-cart-icon-wrapper digiSkill-woo-mini-cart-active-on-hover">
                      <a className="digiSkill-woo-mini-cart-link digiSkill-woo-mini-cart-visible-on-hover" href="https://demo.digiSkill.co/cart/" target="_self">
                        <i aria-hidden="true" className="icon-3" />
                      </a>
                      <span className="digiSkill-woo-mini-cart-total-item">0</span>
                      <div className="digiSkill-woo-mini-cart-content">
                        <div className="widget_shopping_cart_content">
                          <div className="digiSkill-cart-empty-content">
                            <p className="digiSkill-cart-empty-text">
                              <strong>Currently Empty:</strong>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">$</span>0<span className="decimal-separator">.00</span>
                                </bdi>
                              </span>{" "}
                            </p>
                            <p className="digiSkill-cart-shop-page-link">
                              <a href="https://demo.digiSkill.co/shop/" className="digiSkill-cart-shop-page-button">
                                Continue shopping
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="https://demo.digiSkill.co/contact-us" target="_self" className="main-header-btn edu-btn btn-medium">
                  Try for free <i className="icon-4" />
                </a>
                <div className="quote-icon digiSkill-theme-nav-responsive hamburger-icon">
                  <div className="digiSkill-mobile-hamburger-menu" onClick={() => setMobileMenu(!isMobileMenu)}>
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
    </>
  );
};

export default Header;
