import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialSettings } from "../../Data";
import { ImagePath } from "../../Constants";

const Testimonial = () => {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-e9f9bf8 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e9f9bf8" data-element_type="section">
      <div className="elementor-container elementor-column-gap-extended">
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-935311f" data-id="935311f" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-1ca404c elementor-widget elementor-widget-edublink-heading" data-aos="fade-up" data-aos-duration={1200}>
              <div className="elementor-widget-container">
                <div className="edublink-section-heading">
                  <span className="pre-heading">TESTIMONIALS</span>
                  <h3 className="heading">What Our Students Have To Say</h3>
                  <div className="title-shape">
                    <i className="icon-19" />
                  </div>
                  <div className="sub-heading">Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.</div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-93d6383 elementor-widget elementor-widget-edublink-button" data-aos="fade-up" data-aos-duration={1200}>
              <div className="elementor-widget-container">
                <div className="edublink-button-widget-wrapper">
                  <a className="edublink-button-item edublink-button-style-default edublink-button-size-large edublink-button-icon-position-after default-style" href="#">
                    View All
                    <i className="icon-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1461db3" data-id="1461db3" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-1cc9653 elementor-widget elementor-widget-edublink-testimonial" data-id="1cc9653" data-element_type="widget" data-widget_type="edublink-testimonial.default">
              <div className="elementor-widget-container">
                <div className="eb-testimonial-wrapper eb-testimonial-wrapper-style-2">
                  <Swiper {...TestimonialSettings} className="eb-testimonial eb-testimonial-style-2">
                    {/* <div className="swiper-wrapper" data-autoplay="true" data-autoplayspeed={0}> */}
                    <SwiperSlide className="swiper-slide-visible">
                      <div className="eb-testimonial-item elementor-repeater-item-76ca1dd">
                        <div className="eb-testimonial-grid">
                          <div className="thumbnail">
                            <img decoding="async" src={`${ImagePath}testimonial/testimonial-01.png`} className="testimonial-author-avatar" alt="Testimonial-1" />
                            <span className="qoute-icon">
                              <i className="icon-26" />
                            </span>
                          </div>
                          <div className="content">
                            <p className="description">Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                            <div className="rating-icon">
                              <i className="icon-23" />
                              <i className="icon-23" />
                              <i className="icon-23" />
                              <i className="icon-23" />
                              <i className="icon-23" />
                            </div>
                            <h5 className="title">David Owens</h5>
                            <span className="subtitle">Designer</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide-visible">
                      <div className="eb-testimonial-item elementor-repeater-item-f39b7d1">
                        <div className="eb-testimonial-grid">
                          <div className="thumbnail">
                            <img decoding="async" src="../wp-content/uploads/2023/06/testimonial-02.png" className="testimonial-author-avatar" alt="Testimonial-3" />
                            <span className="qoute-icon">
                              <i className="icon-26" />
                            </span>
                          </div>
                          <div className="content">
                            <p className="description">Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                            <div className="rating-icon">
                              <i className="icon-23" />
                              <i className="icon-23" />
                              <i className="icon-23" />
                              <i className="icon-23" />
                              <i className="icon-23" />
                            </div>
                            <h5 className="title">Bob Limones</h5>
                            <span className="subtitle">Student</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide-visible">
                      <div className="eb-testimonial-item elementor-repeater-item-4015e78">
                        <div className="eb-testimonial-grid">
                          <div className="thumbnail">
                            <img decoding="async" src="../wp-content/uploads/2023/06/testimonial-04.jpg" className="testimonial-author-avatar" alt="Testimonial-2" />
                            <span className="qoute-icon">
                              <i className="icon-26" />
                            </span>
                          </div>
                          <div className="content">
                            <p className="description">Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                            <div className="rating-icon">
                              <i className="icon-23" />
                              <i className="icon-23" />
                              <i className="icon-23" />
                              <i className="icon-23" />
                              <i className="icon-23" />
                            </div>
                            <h5 className="title">Tom Hurley</h5>
                            <span className="subtitle">Content Creator</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide-visible">
                      <div className="eb-testimonial-item elementor-repeater-item-849f7a6">
                        <div className="eb-testimonial-grid">
                          <div className="thumbnail">
                            <img decoding="async" src="../wp-content/uploads/2023/06/testimonial-03.png" className="testimonial-author-avatar" alt="Testimonial-4" />
                            <span className="qoute-icon">
                              <i className="icon-26" />
                            </span>
                          </div>
                          <div className="content">
                            <p className="description">Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                            <div className="rating-icon">
                              <i className="icon-23" />
                              <i className="icon-23" />
                              <i className="icon-23" />
                              <i className="icon-23" />
                              <i className="icon-23" />
                            </div>
                            <h5 className="title">Robert Lane</h5>
                            <span className="subtitle">Developer</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* </div> */}
                    <div className="swiper-pagination" />
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
