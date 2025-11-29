import { Link } from "react-router-dom";
import { ImagePath } from "../../Constants";

const LatestArticlesSection = () => {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-178ad6d elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-background-overlay" />
      <div className="elementor-container elementor-column-gap-extended">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5e12c72" data-id="5e12c72" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-d03b080 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-aos="zoom-in" data-aos-duration={1200}>
              <div className="elementor-widget-container">
                <img loading="lazy" decoding="async" width={186} height={186} src={`${ImagePath}about/shape-25.png`} className="attachment-full size-full wp-image-2632" alt="" sizes="(max-width: 186px) 100vw, 186px" />
              </div>
            </div>
            <div className="elementor-element elementor-element-98e3e6f elementor-widget elementor-widget-edublink-heading" data-aos="fade-up" data-aos-duration={1200}>
              <div className="elementor-widget-container">
                <div className="edublink-section-heading">
                  <span className="pre-heading">LATEST ARTICLES</span>
                  <h3 className="heading">Get News with edublink</h3>
                  <div className="title-shape">
                    <i className="icon-19" />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-fe4ca5a elementor-widget elementor-widget-edublink-post">
              <div className="elementor-widget-container">
                <div>
                  <div className="eb-blog-post-wrapper eb-post-style-2 eb-post-grid edublink-row eb-masonry-grid-wrapper">
                    <div className="eb-post-one-single-grid edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 eb-masonry-item" data-aos="fade-up" data-aos-duration={1200}>
                      <div className="edu-blog blog-style-2">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to={""} >
                              <img decoding="async" src={`${ImagePath}blog/blog-01.jpg`} alt="course-79" />
                            </Link>
                          </div>
                          <div className="content position-top">
                            <div className="read-more-btn">
                              <Link to={""} className="btn-icon-round" >
                                <i className="icon-4" />
                              </Link>
                            </div>
                            <div className="category-wrap">
                              <Link to={""}>Science</Link>
                            </div>
                            <h5 className="title">
                              <Link to={""} >Crafting Effective Learning Guide Line</Link>
                            </h5>
                            <ul className="blog-meta">
                              <li>
                                <i className="icon-27" />
                                15 Nov, 2023
                              </li>
                              <li>
                                <i className="icon-28" /> Com 0
                              </li>
                            </ul>
                            <p>aConsectetur adipisicing elit, sed do eiusmod tempor inc...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="eb-post-one-single-grid edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 eb-masonry-item" data-aos="fade-up" data-aos-duration={1200} data-aos-delay="100">
                      <div className="edu-blog blog-style-2">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to={""} >
                              <img decoding="async" src={`${ImagePath}blog/blog-02.jpg`} alt="course-09" />
                            </Link>
                          </div>
                          <div className="content position-top">
                            <div className="read-more-btn">
                              <Link to={""} className="btn-icon-round" >
                                <i className="icon-4" />
                              </Link>
                            </div>
                            <div className="category-wrap">
                              <Link to={""} >Technology</Link>
                            </div>
                            <h5 className="title">
                              <Link to={""} >Exploring Learning Landscapes in Academic</Link>
                            </h5>
                            <ul className="blog-meta">
                              <li>
                                <i className="icon-27" />
                                14 Nov, 2023
                              </li>
                              <li>
                                <i className="icon-28" /> Com 3
                              </li>
                            </ul>
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="eb-post-one-single-grid edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 eb-masonry-item" data-aos="fade-up" data-aos-duration={1200} data-aos-delay="200">
                      <div className="edu-blog blog-style-2">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to={""} >
                              <img decoding="async" src={`${ImagePath}blog/blog-03.jpg`} alt="course-07" />
                            </Link>
                          </div>
                          <div className="content position-top">
                            <div className="read-more-btn">
                              <Link to={""} className="btn-icon-round" >
                                <i className="icon-4" />
                              </Link>
                            </div>
                            <div className="category-wrap">
                              <Link to={""} >Learning</Link>
                            </div>
                            <h5 className="title">
                              <Link to={""} >Voices from the Learning Education Hub</Link>
                            </h5>
                            <ul className="blog-meta">
                              <li>
                                <i className="icon-27" />
                                13 Nov, 2023
                              </li>
                              <li>
                                <i className="icon-28" /> Com 0
                              </li>
                            </ul>
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;
