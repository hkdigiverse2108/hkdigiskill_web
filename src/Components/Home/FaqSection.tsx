// import { useState } from "react";
import { MouseParallax } from "../../CoreComponents";
import { ImagePath } from "../../Constants";
import FaqCard from "../../Components/Faq/FaqCard";
import { Queries } from "../../Api";

const FaqSection = () => {
  const { data } = Queries.useGetFaq();

  const faq = data?.data?.faq_data;
  const featuedFaq = faq?.filter((item) => item?.isFeatured === true);

  // const [activeFaqId, setActiveFaqId] = useState<number | null>(null);

  // const handleChange = (id: number) =>
  //   setActiveFaqId((prev) => (prev === id ? null : id));

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-c4cb900 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="c4cb900"
      data-element_type="section"
    >
      <MouseParallax className="elementor-container elementor-column-gap-extended">
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-aaf26ff"
          data-id="aaf26ff"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-4352fe5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="4352fe5"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-86f548d"
                  data-id="86f548d"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-2535bbc elementor-widget elementor-widget-image"
                      data-aos="fade-right"
                      data-aos-duration={1200}
                    >
                      <div className="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={220}
                          height={280}
                          src={`${ImagePath}faq/faq-01.jpg`}
                          className="attachment-full size-full wp-image-4921"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b67e6a2"
                  data-id="b67e6a2"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-f4d5eac elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                      data-aos="zoom-in"
                      data-aos-duration={1200}
                    >
                      <div className="elementor-widget-container">
                        <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                          <span data-depth={-2}>
                            <img
                              decoding="async"
                              src={`${ImagePath}faq/shape-03.png`}
                              alt="shape-03"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-84ff058 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                      data-aos="zoom-in"
                      data-aos-duration={1200}
                    >
                      <div className="elementor-widget-container">
                        <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                          <span data-depth={2}>
                            <img
                              decoding="async"
                              src={`${ImagePath}faq/shape-02.png`}
                              alt="shape-02"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-3da7bc9 elementor-widget elementor-widget-image"
                      data-aos="fade-left"
                      data-aos-duration={1200}
                    >
                      <div className="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={200}
                          height={240}
                          src={`${ImagePath}faq/faq-02.jpg`}
                          className="attachment-full size-full wp-image-4922"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-c9c330e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="c9c330e"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-df17705"
                  data-id="df17705"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-38d735f elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                      data-aos="zoom-in"
                      data-aos-duration={1200}
                    >
                      <div className="elementor-widget-container">
                        <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                          <span data-depth={2}>
                            <img
                              decoding="async"
                              src={`${ImagePath}faq/shape-04.png`}
                              alt="Hero-Shape-18"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-669d008 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                      data-aos="zoom-in"
                      data-aos-duration={1200}
                    >
                      <div className="elementor-widget-container">
                        <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                          <span data-depth={-2}>
                            <img
                              decoding="async"
                              src={`${ImagePath}faq/shape-05.png`}
                              alt="shape-05"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-1c1ccc1 elementor-widget elementor-widget-image"
                      data-aos="fade-right"
                      data-aos-duration={1200}
                    >
                      <div className="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={180}
                          height={270}
                          src={`${ImagePath}faq/faq-03.jpg`}
                          className="attachment-full size-full wp-image-4923"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1ba26a8"
                  data-id="1ba26a8"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-bdf4a78 elementor-widget elementor-widget-image"
                      data-aos="fade-left"
                      data-aos-duration={1200}
                    >
                      <div className="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={240}
                          height={290}
                          src={`${ImagePath}faq/faq-04.webp`}
                          className="attachment-full size-full wp-image-4924"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-fe330ab"
          data-id="fe330ab"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-e804715 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
              data-aos="zoom-in"
              data-aos-duration={1200}
            >
              <div className="elementor-widget-container">
                <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                  <span data-depth="1.5">
                    <img
                      decoding="async"
                      src={`${ImagePath}about/shape-02.png`}
                      alt="About-Shape-3"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-7b54010 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
              data-aos="zoom-in"
              data-aos-duration={1200}
            >
              <div className="elementor-widget-container">
                <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-color edublink-mouse-track-item">
                  <span data-depth="-2.2">
                    <span className="edublink-animation-widget-color" />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-4fe7b96 elementor-widget elementor-widget-edublink-heading"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <div className="elementor-widget-container">
                <div className="edublink-section-heading">
                  <span className="pre-heading">FAQ’S</span>
                  <h3 className="heading">
                    Over 10 Years in <mark>Distant Skill</mark> Development
                  </h3>
                  <div className="title-shape">
                    <i className="icon-19" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-7407d48 elementor-widget elementor-widget-edublink-accordion"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <div className="elementor-widget-container">
                <div className="eb-accordion header-default border-default style-default">
                  {featuedFaq?.map((item) => {
                    return (
                      <FaqCard
                        question={item?.question}
                        answer={item?.answer}
                      />
                    );
                  })}
                  {/* <FaqCard
                    question="How do I find a school where I want to study? "
                    answer="Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam."
                  />
                  <FaqCard
                    question="Where should I study abroad? "
                    answer="Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam."
                  /> */}
                  {/* <div className="eb-accordion-item default-active elementor-repeater-item-002d4af" onClick={() => handleChange(1)}>
                    <h5 className={`eb-accordion-header default-active ${activeFaqId === 1 && "active"}`}>How can I contact a school directly? </h5>
                    <div className="eb-accordion-content" style={{ display: activeFaqId === 1 ? "block" : "none" }}>
                      <div className="eb-accordion-body default-active">
                        <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.</p>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="eb-accordion-item elementor-repeater-item-bbb14fe">
                    <h5 className="eb-accordion-header">How do I find a school where I want to study? </h5>
                    <div className="eb-accordion-content">
                      <div className="eb-accordion-body">
                        <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.</p>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="eb-accordion-item elementor-repeater-item-449c49f">
                    <h5 className="eb-accordion-header">Where should I study abroad? </h5>
                    <div className="eb-accordion-content">
                      <div className="eb-accordion-body">
                        <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MouseParallax>
    </section>
  );
};

export default FaqSection;
