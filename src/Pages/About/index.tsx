import { BreadCrumb } from "../../Components/Common";
import { TestimonialSection, VideoAreaSection } from "../../Components/Home";
import { ImagePath } from "../../Constants";
import { MouseParallax } from "../../CoreComponents";

const features = [
  {
    icon: "edublink icon-45",
    title: "High Quality Courses",
    description: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
    color: "#1AB69D",
  },
  {
    icon: "edublink icon-46",
    title: "Life Time Access",
    description: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
    color: "#EE4A62",
  },
  {
    icon: "edublink icon-45",
    title: "Expert Instructors",
    description: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
    color: "#4664E4",
  },
];

const stats = [
  {
    value: "45.2",
    suffix: "K",
    label: "STUDENT ENROLLED",
    color: "#1AB69D",
  },
  {
    value: "32.4",
    suffix: "K",
    label: "CLASS COMPLETED",
    color: "#F8577C",
  },
  {
    value: "354",
    suffix: "+",
    label: "TOP INSTRUCTORS",
    color: "#FFA41B",
  },
  {
    value: "99.9",
    suffix: "%",
    label: "SATISFACTION RATE",
    color: "#7C4BFF",
  },
];

const About = () => {
  return (
    <MouseParallax>
      <div id="about">
        <div>
          <BreadCrumb title="About" />
        </div>
        <main id="main" className="site-main space-y-34! my-34! ">
          <section className=" elementor-widget-wrap">
            <section>
              <div className=" shape-section  ">
                <div data-depth={2} className="shape-image left ">
                  <img decoding="async" src={`${ImagePath}about/shape-13.png`} alt="shape-03" />
                </div>
                <div data-depth={-4} className="shape-image right">
                  <img decoding="async" src={`${ImagePath}about/shape-12-1.png`} alt="shape-03" />
                </div>
              </div>
            </section>
            <section className="container !flex gap-16! items-center justify-center!  ">
              <div className="elementor-widget-wrap   ">
                <div className="elementor-element ">
                  <div className="edublink-section-heading  ">
                    <h3 className="heading text-end     ">
                      We Providing The <br />
                      Best <mark>Quality Online</mark> Courses
                    </h3>
                    <div className="title-shape text-end">
                      <i className="icon-19"></i>
                    </div>
                  </div>
                </div>
              </div>

              <span className=" border-r !boder-0.5 h-[50%] border-gray-200 "></span>
              <div className="elementor-widget-wrap ">
                <span>Lorem ipsum dolor sit amet cons etur adipisicing elit sed do eiusm aut tempor incididunt labore dolore magna aliqua quis nostrud ex ertation lamcolab oris aliquip. </span>
              </div>
            </section>
          </section>
          <section className="elementor-section  elementor-section-boxed ">
            <div className="elementor-container elementor-column-gap-extended">
              {features.map((item, index) => (
                <div className="elementor-column " key={index}>
                  <div className=" elementor-element-populated">
                    <div className="edublink-feature-5-widget">
                      <div className="edublink-feature-item">
                        <div className="icon" style={{ backgroundColor: item?.color }}>
                          <i aria-hidden="true" className={item.icon}></i>
                        </div>
                        <div className="content">
                          <h4 className="title">{item.title}</h4>
                          <p className="description">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-[290px]!  elementor-section elementor-top-section elementor-element elementor-element-178ad6d  ">
            <div className="elementor-background-overlay" />
            <VideoAreaSection />
            <section className="mt-28! elementor-section elementor-top-section elementor-element elementor-element-982fec8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="982fec8" data-element_type="section">
              <div className="elementor-background-overlay"></div>
              <div className="elementor-container elementor-column-gap-extended">
                <div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-c81f19f" data-id="c81f19f" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-64ef781 elementor-widget elementor-widget-image" data-id="64ef781" data-element_type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img decoding="async" width="120" height="120" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-01.png" className="attachment-full size-full wp-image-1211" alt="" sizes="(max-width: 120px) 100vw, 120px" />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-e6076c9" data-id="e6076c9" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-565d97a elementor-widget elementor-widget-image" data-id="565d97a" data-element_type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" decoding="async" width="120" height="120" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-02.png" className="attachment-full size-full wp-image-1212" alt="" sizes="(max-width: 120px) 100vw, 120px" />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-7828c99" data-id="7828c99" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-e4afff9 elementor-widget elementor-widget-image" data-id="e4afff9" data-element_type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" decoding="async" width="120" height="120" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-03.png" className="attachment-full size-full wp-image-1213" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-ace9c46" data-id="ace9c46" data-element_type="column" data-settings='{"background_background":"classic"}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-109192b elementor-widget elementor-widget-image" data-id="109192b" data-element_type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" decoding="async" width="120" height="120" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-04.png" className="attachment-full size-full wp-image-1214" alt="" sizes="(max-width: 120px) 100vw, 120px" />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-607171b" data-id="607171b" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-ecde593 elementor-widget elementor-widget-image" data-id="ecde593" data-element_type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" decoding="async" width="120" height="120" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-05.png" className="attachment-full size-full wp-image-1215" alt="" sizes="(max-width: 120px) 100vw, 120px" />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-70c525f" data-id="70c525f" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-2de5ab6 elementor-widget elementor-widget-image" data-id="2de5ab6" data-element_type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" decoding="async" width="120" height="120" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-06.png" className="attachment-full size-full wp-image-1216" alt="" sizes="(max-width: 120px) 100vw, 120px" />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <TestimonialSection />

          {/* <section className="elementor-section elementor-top-section elementor-element elementor-element-3646c62 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3646c62" data-element_type="section">
            <div className="elementor-container elementor-column-gap-extended">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-eb60e1d animated edublink--slide-up" data-id="eb60e1d" data-element_type="column" data-settings='{"animation":"edublink--slide-up","animation_delay":50}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-95361a9 elementor-section-boxed elementor-section-height-default elementor-section-height-default animated edublink--slide-up" data-id="95361a9" data-element_type="section" data-settings='{"animation":"edublink--slide-up","animation_delay":150}'>
                    <div className="elementor-background-overlay"></div>
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-250e8eb" data-id="250e8eb" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-81ddf41 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation animated fadeIn" data-id="81ddf41" data-element_type="widget" data-settings='{"_position":"absolute","_animation":"fadeIn","_animation_delay":200}' data-widget_type="edublink-animation.default">
                            <div className="elementor-widget-container">
                              <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                                <span data-depth="1.4">
                                  <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/shape-30.png" alt="shape-30" />
                                </span>
                              </div>{" "}
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-7d97c6a elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation animated fadeIn" data-id="7d97c6a" data-element_type="widget" data-settings='{"_position":"absolute","_animation":"fadeIn","_animation_delay":200}' data-widget_type="edublink-animation.default">
                            <div className="elementor-widget-container">
                              <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                                <span data-depth="-1.4">
                                  <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-25-1.png" alt="Hero Shape 31" />
                                </span>
                              </div>{" "}
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-a8c9483 edublink-br-m-none elementor-widget elementor-widget-edublink-heading animated edublink--slide-up" data-id="a8c9483" data-element_type="widget" data-settings='{"_animation":"edublink--slide-up","_animation_delay":150}' data-widget_type="edublink-heading.default">
                            <div className="elementor-widget-container">
                              <div className="edublink-section-heading">
                                <span className="pre-heading">TESTIMONIALS</span>
                                <h3 className="heading">
                                  What Our Students <br />
                                  Have To Say
                                </h3>
                                <div className="title-shape">
                                  <i className="icon-19"></i>
                                </div>
                                <div className="sub-heading">
                                  Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor <br />
                                  incididunt labore dolore magna aliquaenim ad minim.
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-83614cf elementor-widget elementor-widget-edublink-testimonial" data-id="83614cf" data-element_type="widget" data-widget_type="edublink-testimonial.default">
                            <div className="elementor-widget-container">
                              <div className="eb-testimonial-wrapper eb-testimonial-wrapper-style-3">
                                <div className="eb-testimonial eb-testimonial-style-3 swiper swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                  <div className="swiper-wrapper" data-autoplay="true" data-autoplayspeed="0" aria-live="polite">
                                    <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" role="group" aria-label="2 / 4" data-swiper-slide-index="1">
                                      <div className="eb-testimonial-item elementor-repeater-item-f39b7d1">
                                        <div className="eb-testimonial-slide">
                                          <div className="content">
                                            <div className="logo">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-02.png" alt="logo-02" />
                                            </div>
                                            <p className="description">Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                                            <div className="rating-icon">
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                            </div>
                                          </div>
                                          <div className="author-info">
                                            <div className="thumbnail">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-02.png" className="testimonial-author-avatar" alt="Testimonial-3" />
                                            </div>
                                            <div className="info">
                                              <h5 className="title">Bob Limones</h5>
                                              <span className="subtitle">Student</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" role="group" aria-label="3 / 4" data-swiper-slide-index="2">
                                      <div className="eb-testimonial-item elementor-repeater-item-4015e78">
                                        <div className="eb-testimonial-slide">
                                          <div className="content">
                                            <div className="logo">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-01.png" alt="logo-01" />
                                            </div>
                                            <p className="description">Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                                            <div className="rating-icon">
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                            </div>
                                          </div>
                                          <div className="author-info">
                                            <div className="thumbnail">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-04.jpg" className="testimonial-author-avatar" alt="Testimonial-2" />
                                            </div>
                                            <div className="info">
                                              <h5 className="title">Tom Hurley</h5>
                                              <span className="subtitle">Content Creator</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" role="group" aria-label="4 / 4" data-swiper-slide-index="3">
                                      <div className="eb-testimonial-item elementor-repeater-item-849f7a6">
                                        <div className="eb-testimonial-slide">
                                          <div className="content">
                                            <div className="logo">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-03.png" alt="logo-03" />
                                            </div>
                                            <p className="description">Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                                            <div className="rating-icon">
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                            </div>
                                          </div>
                                          <div className="author-info">
                                            <div className="thumbnail">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-03.png" className="testimonial-author-avatar" alt="Testimonial-4" />
                                            </div>
                                            <div className="info">
                                              <h5 className="title">Robert Lane</h5>
                                              <span className="subtitle">Developer</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide" role="group" aria-label="1 / 4" data-swiper-slide-index="0">
                                      <div className="eb-testimonial-item elementor-repeater-item-76ca1dd">
                                        <div className="eb-testimonial-slide">
                                          <div className="content">
                                            <div className="logo">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-03.png" alt="logo-03" />
                                            </div>
                                            <p className="description">Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                                            <div className="rating-icon">
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                            </div>
                                          </div>
                                          <div className="author-info">
                                            <div className="thumbnail">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-01.png" className="testimonial-author-avatar" alt="Testimonial-1" />
                                            </div>
                                            <div className="info">
                                              <h5 className="title">David Owens</h5>
                                              <span className="subtitle">Designer</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-prev" role="group" aria-label="2 / 4" data-swiper-slide-index="1">
                                      <div className="eb-testimonial-item elementor-repeater-item-f39b7d1">
                                        <div className="eb-testimonial-slide">
                                          <div className="content">
                                            <div className="logo">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-02.png" alt="logo-02" />
                                            </div>
                                            <p className="description">Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                                            <div className="rating-icon">
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                            </div>
                                          </div>
                                          <div className="author-info">
                                            <div className="thumbnail">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-02.png" className="testimonial-author-avatar" alt="Testimonial-3" />
                                            </div>
                                            <div className="info">
                                              <h5 className="title">Bob Limones</h5>
                                              <span className="subtitle">Student</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-active" role="group" aria-label="3 / 4" data-swiper-slide-index="2">
                                      <div className="eb-testimonial-item elementor-repeater-item-4015e78">
                                        <div className="eb-testimonial-slide">
                                          <div className="content">
                                            <div className="logo">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-01.png" alt="logo-01" />
                                            </div>
                                            <p className="description">Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                                            <div className="rating-icon">
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                            </div>
                                          </div>
                                          <div className="author-info">
                                            <div className="thumbnail">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-04.jpg" className="testimonial-author-avatar" alt="Testimonial-2" />
                                            </div>
                                            <div className="info">
                                              <h5 className="title">Tom Hurley</h5>
                                              <span className="subtitle">Content Creator</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-next" role="group" aria-label="4 / 4" data-swiper-slide-index="3">
                                      <div className="eb-testimonial-item elementor-repeater-item-849f7a6">
                                        <div className="eb-testimonial-slide">
                                          <div className="content">
                                            <div className="logo">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-03.png" alt="logo-03" />
                                            </div>
                                            <p className="description">Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                                            <div className="rating-icon">
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                            </div>
                                          </div>
                                          <div className="author-info">
                                            <div className="thumbnail">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-03.png" className="testimonial-author-avatar" alt="Testimonial-4" />
                                            </div>
                                            <div className="info">
                                              <h5 className="title">Robert Lane</h5>
                                              <span className="subtitle">Developer</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-duplicate" role="group" aria-label="1 / 4" data-swiper-slide-index="0">
                                      <div className="eb-testimonial-item elementor-repeater-item-76ca1dd">
                                        <div className="eb-testimonial-slide">
                                          <div className="content">
                                            <div className="logo">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-03.png" alt="logo-03" />
                                            </div>
                                            <p className="description">Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                                            <div className="rating-icon">
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                            </div>
                                          </div>
                                          <div className="author-info">
                                            <div className="thumbnail">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-01.png" className="testimonial-author-avatar" alt="Testimonial-1" />
                                            </div>
                                            <div className="info">
                                              <h5 className="title">David Owens</h5>
                                              <span className="subtitle">Designer</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" role="group" aria-label="2 / 4" data-swiper-slide-index="1">
                                      <div className="eb-testimonial-item elementor-repeater-item-f39b7d1">
                                        <div className="eb-testimonial-slide">
                                          <div className="content">
                                            <div className="logo">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-02.png" alt="logo-02" />
                                            </div>
                                            <p className="description">Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                                            <div className="rating-icon">
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                            </div>
                                          </div>
                                          <div className="author-info">
                                            <div className="thumbnail">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-02.png" className="testimonial-author-avatar" alt="Testimonial-3" />
                                            </div>
                                            <div className="info">
                                              <h5 className="title">Bob Limones</h5>
                                              <span className="subtitle">Student</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" role="group" aria-label="3 / 4" data-swiper-slide-index="2">
                                      <div className="eb-testimonial-item elementor-repeater-item-4015e78">
                                        <div className="eb-testimonial-slide">
                                          <div className="content">
                                            <div className="logo">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-01.png" alt="logo-01" />
                                            </div>
                                            <p className="description">Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.</p>
                                            <div className="rating-icon">
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                            </div>
                                          </div>
                                          <div className="author-info">
                                            <div className="thumbnail">
                                              <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-04.jpg" className="testimonial-author-avatar" alt="Testimonial-2" />
                                            </div>
                                            <div className="info">
                                              <h5 className="title">Tom Hurley</h5>
                                              <span className="subtitle">Content Creator</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                                    <span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 1"></span>
                                    <span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 2"></span>
                                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active" role="button" aria-label="Go to slide 3" aria-current="true"></span>
                                    <span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 4"></span>
                                  </div>
                                  <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section> */}
          <section className=" elementor-element-178ad6d elementor-section elementor-top-section elementor-element  ">
            <div className="elementor-container elementor-column-gap-extended">
              <div>
                {/* <div className="">
                  <div className="" >
                    <div className=""> */}
                <div className="edublink-section-heading">
                  <span className="pre-heading">FUN FACTS</span>
                  <h3 className="heading">
                    The Learge <mark>Number</mark> of Counting
                  </h3>
                  <div className="title-shape">
                    <i className="icon-19"></i>
                  </div>
                  <div className="sub-heading">Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.</div>
                </div>{" "}
                {/* </div>
                  </div>
                </div> */}
              </div>

              <div className="relative w-full bg-white rounded-md p-30! ">
                {/* top-left shapes */}
                <section className="absolute flex! left-0 right-0 w-full! h-full!  ">
                  <div className="absolute -top-52! -left-22 ">
                    <div className="absolute left-0!">
                      <div data-depth={2} className="">
                        <img decoding="async" src={`${ImagePath}counterup/shape-02.png`} alt="shape-02" />
                      </div>
                    </div>
                    <div className="">
                      <div data-depth={2} className="">
                        <img decoding="async" src={`${ImagePath}about/shape-45.png`} alt="shape-45" />
                      </div>
                    </div>
                  </div>

                  {/* bottom-right / extra shapes */}
                  <div className="absolute bottom-0 right-0">
                    <div className="absolute ">
                      <div data-depth={2} className="">
                        <img decoding="async" src={`${ImagePath}counterup/shape-04.png`} alt="shape-04" />
                      </div>
                    </div>
                    <div className="">
                      <div data-depth={2} className="">
                        <img decoding="async" src={`${ImagePath}counterup/shape-05.png`} alt="shape-05" />
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2x2 stats grid */}
                <div className="z-50! grid grid-cols-2 divide-x divide-y divide-[#ececec] ">
                  {stats.map((item, index) => (
                    <div key={item.label} className="flex flex-col items-center justify-center p-6! text-center">
                      <div className="edublink-counter-item">
                        {/* if you're using Odometer.js, it will pick this up */}
                        <span className="odometer odometer-auto-theme text-4xl md:text-5xl font-extrabold" style={{ color: item.color }}>
                          {item.value}
                        </span>
                        <span className="edublink-counter-suffix text-2xl font-extrabold" style={{ color: item.color }}>
                          {item.suffix}
                        </span>
                      </div>

                      <h6 className="mt-3 text-[11px] tracking-[0.25em] uppercase text-[#8F8F8F]">{item.label}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="elementor-section elementor-top-section elementor-element elementor-element-85bee21 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="85bee21" data-element_type="section" data-settings='{"background_background":"classic"}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-87596bc" data-id="87596bc" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-cdeb679 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="cdeb679" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a93f05c" data-id="a93f05c" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-d5799d1 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-id="d5799d1" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="698" height="659" src="https://demo.edublink.co/wp-content/uploads/2023/06/map-shape-3.png" className="attachment-full size-full wp-image-4159" alt="" sizes="(max-width: 698px) 100vw, 698px" />{" "}
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-b5797c7 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-id="b5797c7" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="698" height="659" src="https://demo.edublink.co/wp-content/uploads/2023/06/map-shape-3.png" className="attachment-full size-full wp-image-4159" alt="" sizes="(max-width: 698px) 100vw, 698px" />{" "}
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-4014cd9 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-id="4014cd9" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="698" height="659" src="https://demo.edublink.co/wp-content/uploads/2023/06/map-shape-3.png" className="attachment-full size-full wp-image-4159" alt="" sizes="(max-width: 698px) 100vw, 698px" />{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-b0a24a6 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b0a24a6" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-extended">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-99ceb68" data-id="99ceb68" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-f0750db elementor-widget elementor-widget-edublink-heading animated edublink--slide-up" data-id="f0750db" data-element_type="widget" data-settings='{"_animation":"edublink--slide-up","_animation_delay":150}' data-widget_type="edublink-heading.default">
                            <div className="elementor-widget-container">
                              <div className="edublink-section-heading">
                                <span className="pre-heading">INSTRUCTORS</span>
                                <h3 className="heading">Course Instructors</h3>
                                <div className="title-shape">
                                  <i className="icon-19"></i>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-ff4fb92 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="ff4fb92" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-extended">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-37a9587" data-id="37a9587" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-96a69af elementor-widget elementor-widget-edublink-team animated edublink--slide-up" data-id="96a69af" data-element_type="widget" data-settings='{"_animation":"edublink--slide-up","_animation_delay":250}' data-widget_type="edublink-team.default">
                            <div className="elementor-widget-container">
                              <div className="eb-team-wrapper">
                                <div className="eb-team-container eb-team-grid edublink-row">
                                  <div className="edublink-team-8-widget edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 sal-animate" data-sal="">
                                    <div className="edublink-team-item">
                                      <div className="thumbnail-wrap">
                                        <div className="thumbnail">
                                          <a>
                                            <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/07/team-05.jpg" alt="Team-17" />
                                          </a>
                                        </div>
                                        <ul className="team-share-info">
                                          <li>
                                            <a href="#" target="_blank">
                                              <i className="icon-facebook"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#" target="_blank">
                                              <i className="icon-twitter"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#" target="_blank">
                                              <i className="icon-linkedin2"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="content">
                                        <h4 className="title">
                                          <a>Jane Seymour</a>
                                        </h4>
                                        <span className="designation">UI Designer</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edublink-team-8-widget edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 sal-animate" data-sal="">
                                    <div className="edublink-team-item">
                                      <div className="thumbnail-wrap">
                                        <div className="thumbnail">
                                          <a>
                                            <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/07/team-06.webp" alt="Team-18" />
                                          </a>
                                        </div>
                                        <ul className="team-share-info">
                                          <li>
                                            <a href="#" target="_blank">
                                              <i className="icon-facebook"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#" target="_blank">
                                              <i className="icon-twitter"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#" target="_blank">
                                              <i className="icon-linkedin2"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="content">
                                        <h4 className="title">
                                          <a>Edward Norton</a>
                                        </h4>
                                        <span className="designation">UI Designer</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edublink-team-8-widget edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 sal-animate" data-sal="">
                                    <div className="edublink-team-item">
                                      <div className="thumbnail-wrap">
                                        <div className="thumbnail">
                                          <a>
                                            <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/07/team-08.webp" alt="Team-19" />
                                          </a>
                                        </div>
                                        <ul className="team-share-info">
                                          <li>
                                            <a href="#" target="_blank">
                                              <i className="icon-facebook"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#" target="_blank">
                                              <i className="icon-twitter"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#" target="_blank">
                                              <i className="icon-linkedin2"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="content">
                                        <h4 className="title">
                                          <a>Penelope Cruz</a>
                                        </h4>
                                        <span className="designation">UI Designer</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section className="elementor-section elementor-top-section elementor-element elementor-element-c34ae9f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c34ae9f" data-element_type="section" data-settings='{"background_background":"classic"}'>
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-extended">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-af421f9 animated edublink--slide-up" data-id="af421f9" data-element_type="column" data-settings='{"animation":"edublink--slide-up","animation_delay":150}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-0eec5cc elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation" data-id="0eec5cc" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="edublink-animation.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                        <span data-depth="-2.5">
                          <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-15.png" alt="Hero-Shape-3" />
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-eb9dee9 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation animated fadeIn" data-id="eb9dee9" data-element_type="widget" data-settings='{"_position":"absolute","_animation":"fadeIn"}' data-widget_type="edublink-animation.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                        <span data-depth="2.5">
                          <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-10.png" alt="shape-10" />
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-d9c5287 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation" data-id="d9c5287" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="edublink-animation.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                        <span data-depth="-2">
                          <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-02.png" alt="Hero-Shape-18" />
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-75ee128 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation" data-id="75ee128" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="edublink-animation.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                        <span data-depth="2">
                          <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-13.png" alt="Hero-Shape-1" />
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-cbd1f4c edublink-br-tl-none elementor-widget elementor-widget-heading" data-id="cbd1f4c" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Get Your Quality Skills <span className="edublink-color-primary">Certificate</span> <br />
                        Through EduBlink
                      </h2>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-56b409d elementor-widget elementor-widget-edublink-button" data-id="56b409d" data-element_type="widget" data-widget_type="edublink-button.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-button-widget-wrapper">
                        <a className="edublink-button-item edublink-button-style-two edublink-button-size-custom edublink-button-icon-position-after default-style" href="https://demo.edublink.co/contact-us/">
                          Get started now<i className="icon-4"></i>
                        </a>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </MouseParallax>
  );
};

export default About;
