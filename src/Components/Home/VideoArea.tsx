import { Link } from "react-router-dom";
import { ImagePath } from "../../Constants";
import { MouseParallax } from "../../CoreComponents";
import VideoModal from "../Common/VideoModal";
import { useAppDispatch } from "../../Store/Hook";
import { setModalVideoLink } from "../../Store/Slices/VideoModalSlice";

const VideoAreaSection = () => {
  const dispatch = useAppDispatch();

  const videoLink =
    "https://www.youtube.com/embed/0Trxb5WfBKc?autoplay=1&rel=0&modestbranding=1";

  const handleOpenVideo = () => dispatch(setModalVideoLink(videoLink));

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-26111f2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="26111f2"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-extended">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4deb683"
          data-id="4deb683"
          data-element_type="column"
        >
          <MouseParallax className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-2f22afa elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
              data-aos="zoom-in"
              data-aos-duration={1200}
            >
              <div className="elementor-widget-container">
                <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                  <span data-depth={2}>
                    <img
                      decoding="async"
                      src={`${ImagePath}shapes/shape-7.png`}
                      alt="About-Shape-2"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-aaaf6e9 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
              data-aos="zoom-in"
              data-aos-duration={1200}
            >
              <div className="elementor-widget-container">
                <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                  <span data-depth={-2}>
                    <img
                      decoding="async"
                      src={`${ImagePath}shapes/shape-5.png`}
                      alt="Hero-Shape-18"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-ffb7425 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
              data-aos="zoom-in"
              data-aos-duration={1200}
            >
              <div className="elementor-widget-container">
                <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                  <span data-depth={-2}>
                    <img
                      decoding="async"
                      src={`${ImagePath}faq/shape-14.png`}
                      alt="shape-14"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-3156f1d elementor-widget elementor-widget-edublink-video-popup"
              data-id="3156f1d"
              data-element_type="widget"
              data-widget_type="edublink-video-popup.default"
            >
              <div className="elementor-widget-container">
                <div
                  onClick={handleOpenVideo}
                  className="edublink-video-popup-wrapper edublink-video-popup-animation-continious edublink-video-popup-continious-type-custom-ripple-color edublink-video-popup-bg-enable"
                  style={{
                    backgroundImage:
                      "url(https://demo.edublink.co/wp-content/uploads/2023/05/video-01.webp)",
                  }}
                >
                  <div className="edublink-video-popup-content">
                    <Link to={""} className="edublink-video-popup-icon">
                      <i aria-hidden="true" className="icon-18" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </MouseParallax>
        </div>
      </div>
    </section>
  );
};

export default VideoAreaSection;
