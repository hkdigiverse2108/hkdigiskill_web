import { ImagePath } from "../../Constants";
import { MouseParallax } from "../../CoreComponents";

const brandImages = [
  { id: "5ecff55", src: "brand/brand-01.png", wp: "wp-image-1211" },
  { id: "c0b6e3f", src: "brand/brand-02.png", wp: "wp-image-1212" },
  { id: "4ce3041", src: "brand/brand-03.png", wp: "wp-image-1213" },
  { id: "10bcc3a", src: "brand/brand-04.png", wp: "wp-image-1214" },
  { id: "70baba7", src: "brand/brand-05.png", wp: "wp-image-1215" },
  { id: "ca318a7", src: "brand/brand-06.png", wp: "wp-image-1216" },
];

const BrandLogo = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-94388e3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="94388e3"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
    >
      <MouseParallax className="elementor-container elementor-column-gap-extended">
        {/* FIRST COLUMN WITH SHAPE */}
        <div
          className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-6601e92"
          data-id="6601e92"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-f8415f2 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
              data-id="f8415f2"
              data-element_type="widget"
              data-settings='{"_position":"absolute"}'
              data-widget_type="edublink-animation.default"
            >
              <div className="elementor-widget-container">
                <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                  <span data-depth={-2}>
                    <img
                      decoding="async"
                      src={`${ImagePath}about/shape-37.png`}
                      alt="About-Shape-2"
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Brand 01 */}
            <div
              className="elementor-element elementor-element-5ecff55 elementor-widget elementor-widget-image"
              data-id="5ecff55"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  loading="lazy"
                  decoding="async"
                  width={120}
                  height={120}
                  src={`${ImagePath}${brandImages[0].src}`}
                  className={`attachment-full size-full ${brandImages[0].wp}`}
                  alt=""
                  sizes="(max-width: 120px) 100vw, 120px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BRAND 02–05 */}
        {brandImages.slice(1, 5).map((item, index) => (
          <div
            key={item.id}
            className={`elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-${
              ["6595acb", "7ee571b", "22a2b53", "f16e415"][index]
            }`}
            data-id={["6595acb", "7ee571b", "22a2b53", "f16e415"][index]}
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className={`elementor-element elementor-element-${item.id} elementor-widget elementor-widget-image`}
                data-id={item.id}
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    src={`${ImagePath}${item.src}`}
                    className={`attachment-full size-full ${item.wp}`}
                    alt=""
                    sizes="(max-width: 120px) 100vw, 120px"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* LAST COLUMN WITH SHAPE */}
        <div
          className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-f662a84"
          data-id="f662a84"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-809c500 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
              data-id="809c500"
              data-element_type="widget"
              data-settings='{"_position":"absolute"}'
            >
              <div className="elementor-widget-container">
                <div className="edublink-animation-widget edublink-mouse-track-item">
                  <span data-depth={-2}>
                    <img
                      decoding="async"
                      src={`${ImagePath}about/shape-41.png`}
                      alt="shape-41"
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Brand 06 */}
            <div
              className="elementor-element elementor-element-ca318a7 elementor-widget elementor-widget-image"
              data-id="ca318a7"
            >
              <div className="elementor-widget-container">
                <img
                  loading="lazy"
                  decoding="async"
                  width={120}
                  height={120}
                  src={`${ImagePath}${brandImages?.[5].src}`}
                  className={`attachment-full size-full ${brandImages[5].wp}`}
                  alt=""
                  sizes="(max-width: 120px) 100vw, 120px"
                />
              </div>
            </div>
          </div>
        </div>
      </MouseParallax>
    </section>
  );
};

export default BrandLogo;
