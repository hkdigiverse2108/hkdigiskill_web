import { ImagePath } from "../Constants";
import { Link, NavLink } from "react-router-dom";
import { ContactDetails, FooterAboutText, FooterContactText, HK_DigiVerse_Link, QuickLinks, SocialMediaLinks, SupportPolicy } from "../Data";
import { useState } from "react";
import Mutations from "../api/Mutations";

const Footer = () => {
  const [email, setEmail] = useState("");

  const { mutate: newsletter, isPending } = Mutations.useNewsletter();

  const handleSubscribeBtn = async () => {
    try {
      if (!email) {
        return false;
      }

      const payload = {
        email: email,
      };
      newsletter(payload, {
        onSuccess: () => {
          setEmail("");
        },
      });
    } catch (error) {}
  };

  return (
    <footer id="edublink-footer" className="edublink-footer footer-builder-wrapper footer-common">
      <div className="edublink-footer-inner">
        <div className="elementor elementor-13627">
          <section className="elementor-section elementor-top-section elementor-element elementor-element-d21d741 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d21d741" data-element_type="section" data-settings='{"background_background":"classic"}'>
            <div className="elementor-background-overlay" />
            <div className="elementor-container elementor-column-gap-extended">
              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-cb78022" data-id="cb78022" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-b167e35 elementor-widget elementor-widget-edublink-site-logo" data-id="b167e35" data-element_type="widget" data-widget_type="edublink-site-logo.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-site-logo-widget-container">
                        <span className="edublink-site-main-logo edublink-site-main-logo-type">
                          <a href="" data-elementor-open-lightbox className="elementor-clickable">
                            <img alt="logo-white" src={`${ImagePath}/logo/logo-white.png`} />
                          </a>
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-eacdb72 elementor-widget elementor-widget-text-editor" data-id="eacdb72" data-element_type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>{FooterAboutText}</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-68c25a6 elementor-widget elementor-widget-text-editor" data-id="68c25a6" data-element_type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>
                        <span className="edublink-p-medium">Address:</span> {ContactDetails?.Address}
                        <br />
                        <span className="edublink-p-medium">Call:</span>
                        <Link to={`tel:${ContactDetails?.Number}`} className="edublink-color-off-white">
                          {ContactDetails?.Number}
                        </Link>
                        <br />
                        <span className="edublink-p-medium">Email:</span>
                        <Link to={`mailto:${ContactDetails?.EmailInfo}`} className="edublink-color-off-white">
                          {ContactDetails?.EmailInfo}
                        </Link>
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-19ecb93" data-id="19ecb93" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-48938a7 elementor-widget elementor-widget-heading" data-id="48938a7" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h4 className="elementor-heading-title elementor-size-default">Quick Links</h4>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-4f66943 elementor-widget elementor-widget-edublink-footer-menu" data-id="4f66943" data-element_type="widget" data-widget_type="edublink-footer-menu.default">
                    <div className="elementor-widget-container">
                      <nav className="edublink-nav-menu-wrapper">
                        <ul id="menu-1-4f66943" className="footer-navigation-menu">
                          {QuickLinks.map((item, index) => (
                            <li key={index} className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-16553 menu-align-left">
                              <NavLink to={item?.link || ""} className="nav-link">
                                {item?.Title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </nav>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-67ce78c" data-id="67ce78c" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-9cafb16 elementor-widget elementor-widget-heading" data-id="9cafb16" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h4 className="elementor-heading-title elementor-size-default">Support & Policy</h4>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-5cc6a14 elementor-widget elementor-widget-edublink-footer-menu" data-id="5cc6a14" data-element_type="widget" data-widget_type="edublink-footer-menu.default">
                    <div className="elementor-widget-container">
                      <nav className="edublink-nav-menu-wrapper">
                        <ul id="menu-1-5cc6a14" className="footer-navigation-menu">
                          {SupportPolicy.map((item, index) => (
                            <li key={index} className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-17401 menu-align-left">
                              <NavLink to={item?.link || ""} className="nav-link">
                                {item?.Title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-1b5af9b" data-id="1b5af9b" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-1d6c34b elementor-widget elementor-widget-heading" data-id="1d6c34b" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h4 className="elementor-heading-title elementor-size-default">Contacts</h4>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-ae82895 elementor-widget elementor-widget-text-editor" data-id="ae82895" data-element_type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>{FooterContactText}</p>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-54f833c elementor-widget elementor-widget-edublink-mailchimp" data-id="54f833c" data-element_type="widget" data-widget_type="edublink-mailchimp.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-mailchimp-wrapper edublink-mailchimp-horizontal-type edublink-mailchimp-mobile-yes">
                        <form onSubmit={(e) => e.preventDefault()}>
                          <div className="edublink-mailchimp-form-container">
                            <div className="edublink-mailchimp-item edublink-mailchimp-email">
                              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="edublink-mailchimp-input-field" placeholder="Your email" required />
                            </div>
                            <div className="edublink-mailchimp-submit-btn">
                              <button onClick={handleSubscribeBtn} className="edublink-mailchimp-subscribe-btn edublink-button-item edublink-button-type-fill style-1 b-default">
                                <span className="edublink-mailchimp-subscribe-btn-text">Subscribe</span>
                                <span className="edublink-mailchimp-subscribe-btn-icon">
                                  <i aria-hidden="true" className="edublink icon-4" />
                                </span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-a258bcb elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="a258bcb" data-element_type="widget" data-widget_type="social-icons.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-social-icons-wrapper elementor-grid space-x-3! ps-3!">
                        {SocialMediaLinks.map((item, index) => {
                          const Icon = item?.icon;

                          return (
                            <span key={index} className="elementor-grid-item">
                              <Link to={item?.link} className="elementor-icon elementor-social-icon elementor-social-icon-icon-facebook elementor-repeater-item-14da801" target="_blank">
                                <span className="elementor-screen-only">{item?.title}</span>
                                <span>
                                  <Icon className="text-4xl!" />
                                </span>
                              </Link>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="elementor-section elementor-top-section elementor-element elementor-element-8f6bdcb elementor-section-boxed elementor-section-height-default elementor-section-height-default">
            <div className="elementor-container elementor-column-gap-extended">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-732c287" data-id="732c287" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-dcc37e4 elementor-widget elementor-widget-edublink-footer-copyright" data-id="dcc37e4" data-element_type="widget" data-widget_type="edublink-footer-copyright.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-copyright-wrapper">
                        <span>
                          © 2025 HK edublink. All Rights Reserved. Designed & maintained by
                          <Link to={HK_DigiVerse_Link}> HK DigiVerse LLP</Link>
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
