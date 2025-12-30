import { ImagePath } from "../../Constants";
import { MouseParallax } from "../../CoreComponents";

const GetCeritficateSection = () => {
  return (
    <MouseParallax>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Get Your Quality Skills <span>Certificate</span>
            <br /> Through edublink
          </h1>

          <div className="button-container">
            <div className="edublink-button-widget-wrapper">
              <a
                className="edublink-button-item edublink-button-style-default edublink-button-size-custom edublink-button-icon-position-after default-style"
              >
                Get started now<i className="icon-4"></i>
              </a>
            </div>{" "}
          </div>
        </div>

        {/* Decorative elements */}
        <div data-depth={2} className="shape shape-left-1">
          <span>
            <img src={`${ImagePath}shapes/shape-4.png`} alt="About Shape 5" />
          </span>
        </div>
        <div data-depth={-2} className="shape shape-left-2">
          <span className="">
            <img
              decoding="async"
              src={`${ImagePath}shapes/shape-2.png`}
              alt="shape-03"
            />
          </span>
        </div>
        <div data-depth={2} className="shape shape-right-1">
          <span>
            <img
              decoding="async"
              src={`${ImagePath}shapes/shape-1.png`}
              alt="shape-02"
            />
          </span>
        </div>
        <div data-depth={-2} className="shape shape-right-2">
          <span className="">
            <img
              decoding="async"
              src={`${ImagePath}shapes/shape-5.png`}
              alt="shape-02"
            />
          </span>
        </div>
      </div>
    </MouseParallax>
  );
};

export default GetCeritficateSection;
