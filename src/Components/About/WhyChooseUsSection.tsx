import { ImagePath } from "../../Constants";
import { MouseParallax } from "../../CoreComponents";

const features = [
  {
    id: 1,
    title: "High Quality Courses",
    description: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
    icon: <i aria-hidden="true" className="edublink icon-45"></i>,
    bgColor: "#3bbca7",
  },
  {
    id: 2,
    title: "Life Time Access",
    description: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
    icon: <i aria-hidden="true" className="edublink icon-46"></i>,
    bgColor: "#ff6d6d",
  },
  {
    id: 3,
    title: "Expert Instructors",
    description: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",
    icon: <i aria-hidden="true" className="edublink icon-47"></i>,
    bgColor: "#6c7bff",
  },
];

const WhyChooseUsSection = () => {
  return (
    <MouseParallax>
      <section id="whyChooseUs" className="choose-container">
        {/* TOP DECORATIONS */}
        <div className="dot-left"></div>
        <div data-depth={2} className="shape shape-left-1">
          <span>
            <img src={`${ImagePath}about/shape-45.png`} alt="About Shape 5" />
          </span>
        </div>
        <div className="dot-right">
          <div data-depth={2} className="shape shape-right-1">
            <span>
              <img src={`${ImagePath}about/shape-40.png`} alt="About Shape 5" />
            </span>
          </div>
        </div>

        {/* TITLE AREA */}
        <div className="choose-title">
          <p className="sub-title">WHY CHOOSE EDUBLINK</p>
          <h2 className="main-title">
            The Best <span>Beneficial</span> Side <br />
            of EduBlink
          </h2>
          <div className="underline"></div>
        </div>

        {/* CARDS */}
        <div className="choose-grid">
          {features.map((item) => (
            <div className="choose-card" key={item.id}>
              <div className="choose-icon-wrapper" style={{ backgroundColor: item.bgColor + "20" }}>
                <div className="elementor-icon stat-icon" style={{ color: item.bgColor }}>
                  {item.icon}
                </div>
              </div>

              <h3 className="choose-card-title">{item.title}</h3>
              <p className="choose-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </MouseParallax>
  );
};

export default WhyChooseUsSection;
