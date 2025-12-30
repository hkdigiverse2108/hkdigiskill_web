import React from "react";
import { BreadCrumb } from "../../Components/Common";
import { ImagePath } from "../../Constants";
import { MouseParallax } from "../../CoreComponents";
import { ContactDetails, SocialMediaLink } from "../../Data";
import { Link } from "react-router-dom";
import { Mutation } from "../../Api";

const Contact = () => {
  const { mutate: addContact } = Mutation.useAddContact();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    addContact(payload);
  };

  return (
    <div>
      <section>
        <BreadCrumb title="Contact Us" />
      </section>
      <section>
        <div
          data-elementor-type="wp-page"
          data-elementor-id="17213"
          className=" elementor elementor-17213"
        >
          {/* ================= SECTION 1 ================= */}
          <section
            className="mt-50! mb-30! elementor-section elementor-top-section elementor-element elementor-element-7ed12df elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="7ed12df"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-extended">
              {/* COLUMN LEFT */}
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c8aa340"
                data-id="c8aa340"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  {/* Heading */}
                  <div
                    className="elementor-element elementor-element-bef7517 elementor-widget elementor-widget-heading"
                    data-id="bef7517"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default  space-y-5! ">
                        <p> We're Always Eager to </p>
                        <span>Hear From You! </span>
                      </h3>
                    </div>
                  </div>

                  {/* Address */}
                  <div
                    className="space-y-3! mt-6! elementor-element elementor-element-614944a elementor-widget-heading"
                    data-id="614944a"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h5 className="elementor-heading-title elementor-size-default">
                        Address
                      </h5>
                    </div>

                    <p>
                      {ContactDetails?.Address}
                      {/* Studio 76d, Riley Ford, North Michael chester,
                      <br /> CF99 6QQ */}
                    </p>
                  </div>

                  {/* Email */}
                  <div
                    className="space-y-3! elementor-element elementor-element-18d270e elementor-widget-heading"
                    data-id="18d270e"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h5 className="elementor-heading-title elementor-size-default">
                        Email
                      </h5>
                    </div>

                    <p>
                      <Link to={`mailto:${ContactDetails?.EmailSales}`}>
                        {/* edublink@example.com */}
                        {ContactDetails?.EmailSales}
                      </Link>
                    </p>
                  </div>

                  {/* Phone */}
                  <div
                    className="space-y-3! elementor-element elementor-element-aa261c0 elementor-widget elementor-widget-heading"
                    data-id="aa261c0"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h5 className="elementor-heading-title elementor-size-default">
                        Phone
                      </h5>
                    </div>

                    <p>
                      <Link to={`tel:${ContactDetails?.Number}`}>
                        {/* (+091) 413 554 8598 */}
                        {ContactDetails?.Number}
                      </Link>
                    </p>
                  </div>

                  {/* Social Icons */}
                  <div
                    className="elementor-element elementor-element-78ac899 elementor-widget elementor-widget-edublink-social-icons"
                    data-id="78ac899"
                    data-element_type="widget"
                    data-widget_type="edublink-social-icons.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="edublink-social-icons-wrapper">
                        <Link
                          to={SocialMediaLink?.instagram}
                          className="  elementor-repeater-item-cf6a47b edublink-social-icon-each-item elementor-animation-"
                        >
                          <i
                            aria-hidden="true"
                            className="edublink icon-share-alt"
                          />
                        </Link>
                        <Link
                          to={SocialMediaLink?.instagram}
                          className="elementor-repeater-item-01aed80 edublink-social-icon-each-item elementor-animation-"
                        >
                          <i
                            aria-hidden="true"
                            className="edublink icon-facebook"
                          />
                        </Link>
                        <Link
                          to={SocialMediaLink?.instagram}
                          className="elementor-repeater-item-9450a8b edublink-social-icon-each-item elementor-animation-"
                        >
                          <i
                            aria-hidden="true"
                            className="edublink icon-twitter"
                          />
                        </Link>
                        <Link
                          to={SocialMediaLink?.instagram}
                          className="elementor-repeater-item-60bf3fe edublink-social-icon-each-item elementor-animation-"
                        >
                          <i
                            aria-hidden="true"
                            className="edublink icon-linkedin2"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* COLUMN RIGHT */}
              <div
                className=" elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-88dca94"
                data-id="88dca94"
                data-element_type="column"
                data-settings='{"background_background":"classic"}'
              >
                <MouseParallax>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    {/* Floating Shape 1 */}
                    <div
                      className="z-50! elementor-element elementor-element-3a53f08 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                      data-id="3a53f08"
                      data-element_type="widget"
                      data-settings='{"_position":"absolute"}'
                      data-widget_type="edublink-animation.default"
                    >
                      <div className="elementor-widget-container ">
                        <div className=" z-50! edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                          <div
                            className="absolute! z-50!  elementor-element elementor-element-aaaf6e9 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                            data-aos="zoom-in"
                            data-aos-duration={1200}
                          >
                            <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                              <span data-depth={4}>
                                <img
                                  decoding="async"
                                  src={`${ImagePath}shapes/shape-5.png`}
                                  alt="Hero-Shape-18"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Shape 2 */}
                    <div
                      className=" flex! justify-end! w-full! absolute! edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item"
                      style={{
                        transform: "translate3d(0px,0px,0px) rotate(0.0001deg)",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        position: "relative",
                        pointerEvents: "none",
                      }}
                      data-aos="zoom-in"
                      data-aos-duration={1200}
                    >
                      <div className="elementor-element elementor-element-2f22afa elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation">
                        <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                          <span data-depth={-4}>
                            <img
                              decoding="async"
                              src={`${ImagePath}shapes/shape-1.png`}
                              alt="About-Shape-2"
                            />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* FORM SECTION */}
                    <div
                      className=" bg-white! p-25! -mb-70! shadow-2xl! z-10! rounded-lg! elementor-element elementor-element-5690efc e-con-full e-flex e-con e-child"
                      data-id="5690efc"
                      data-element_type="container"
                      data-settings='{"content_width":"full"}'
                    >
                      <div
                        className="elementor-element elementor-element-5a24098 elementor-widget elementor-widget-heading"
                        data-id="5a24098"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h5 className="elementor-heading-title elementor-size-default">
                            Get In Touch
                          </h5>
                        </div>
                      </div>

                      <div
                        className="mt-3! elementor-element elementor-element-3e24b46 elementor-widget elementor-widget-text-editor"
                        data-id="3e24b46"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>
                            Fill out this form for booking a consultant advising
                            session.
                          </p>
                        </div>
                      </div>

                      {/* CONTACT FORM (STATIC) */}
                      <div
                        className="elementor-element elementor-element-43b0ae4 elementor-widget elementor-widget-edublink-contact-form-seven"
                        data-id="43b0ae4"
                        data-element_type="widget"
                        data-widget_type="edublink-contact-form-seven.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="edublink-contact-form-wrapper">
                            {/* FORM START */}
                            <form className="wpcf7-form" onSubmit={handleSubmit}>
                              <div className="edublink-contact-form-wrapper eb-contact-us-form">
                                {/* Name */}
                                <div className="edublink-contact-form-single-item">
                                  <div className="edublink-contact-form-single-item-content">
                                    <p>
                                      <input
                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                        placeholder="Your name *"
                                        type="text"
                                        name="name"
                                      />
                                    </p>
                                  </div>
                                </div>

                                {/* Email */}
                                <div className="edublink-contact-form-single-item">
                                  <div className="edublink-contact-form-single-item-content">
                                    <p>
                                      <input
                                        className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email edublink-contact-form-field"
                                        placeholder="Enter your email *"
                                        type="email"
                                        name="email"
                                      />
                                    </p>
                                  </div>
                                </div>

                                {/* Subject */}
                                <div className="edublink-contact-form-single-item">
                                  <div className="edublink-contact-form-single-item-content">
                                    <p>
                                      <input
                                        className="wpcf7-form-control wpcf7-text edublink-contact-form-field"
                                        placeholder="Phone Number"
                                        type="text"
                                        name="phoneNumber"
                                      />
                                    </p>
                                  </div>
                                </div>
                                {/* Subject */}
                                <div className="edublink-contact-form-single-item">
                                  <div className="edublink-contact-form-single-item-content">
                                    <p>
                                      <input
                                        className="wpcf7-form-control wpcf7-text edublink-contact-form-field"
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                      />
                                    </p>
                                  </div>
                                </div>

                                {/* Message */}
                                <div className="edublink-contact-form-single-item">
                                  <div className="edublink-contact-form-single-item-content edublink-contact-form-textarea">
                                    <p>
                                      <textarea
                                        className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required edublink-contact-form-textarea edublink-contact-form-field"
                                        placeholder="Your Message"
                                        name="message"
                                      ></textarea>
                                    </p>
                                  </div>
                                </div>

                                {/* Submit */}
                                <div className="edublink-contact-form-single-item eb-contact-button">
                                  <div className="eb-contact-button-wrapper">
                                    <p>
                                      <input
                                        className="wpcf7-form-control wpcf7-submit has-spinner edublink-button-with-icon"
                                        type="submit"
                                        value="Submit Message"
                                      />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </form>
                            {/* FORM END */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End FORM SECTION */}
                  </div>
                </MouseParallax>
              </div>
            </div>
          </section>

          {/* ================= MAP SECTION ================= */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-a7d265d elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="a7d265d"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-102888e"
                data-id="102888e"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-3ac55f1 elementor-widget elementor-widget-google_maps"
                    data-id="3ac55f1"
                    data-element_type="widget"
                    data-widget_type="google_maps.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-custom-embed">
                        <iframe
                          loading="lazy"
                          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
                          title="London Eye, London, United Kingdom"
                          aria-label="London Eye, London, United Kingdom"
                          style={{
                            height: "600px",
                            width: "100%",
                            border: "0",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Contact;
