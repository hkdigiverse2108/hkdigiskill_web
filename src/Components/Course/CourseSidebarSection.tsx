import { type FC } from "react";
import type { Course } from "../../Types";
import { ShareButtons } from "../Common";

const CourseSidebarSection: FC<{ course?: Course }> = ({ course = {} }) => {
  return (
    <div className="ed-course-sidebar edublink-col-lg-4 ">
      <div className="edublink-course-details-sidebar eb-course-single-4 sidebar-enable max-w-full!">
        <div className="edublink-course-details-sidebar-inner">
          <div className="edublink-course-details-sidebar-content">
            <h4 className="widget-title">Course Includes:</h4>

            <ul className="edublink-course-meta-informations">
              <li className="edublink-course-details-features-item course-price">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-60"></i>
                  Price:
                </span>
                <span className="edublink-course-feature-item-value">
                  <div className="course-price">
                    <span className="course-item-price">
                      <span className="origin-price">{course?.price}</span>
                      <span className="price">{course?.price}</span>
                    </span>
                  </div>
                </span>
              </li>

              <li className="edublink-course-details-features-item course-instructor">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-62"></i>Instructor:
                </span>
                <span className="edublink-course-feature-item-value">
                  Edward Norton
                </span>
              </li>

              <li className="edublink-course-details-features-item course-duration">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-61"></i>Duration:
                </span>
                <span className="edublink-course-feature-item-value">
                  {course?.duration || "15 weeks"}
                </span>
              </li>

              <li className="edublink-course-details-features-item course-lesson">
                <span className="edublink-course-feature-item-label">
                  <img
                    src="https://demo.edublink.co/wp-content/themes/edublink/assets/images/icons/books.svg"
                    className="edublink-course-sidebar-img-icon"
                    alt=""
                  />
                  Lessons:
                </span>
                <span className="edublink-course-feature-item-value">11</span>
              </li>

              <li className="edublink-course-details-features-item course-student">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-63"></i>Students:
                </span>
                <span className="edublink-course-feature-item-value">
                  {course?.enrolledLearners}
                </span>
              </li>

              <li className="edublink-course-details-features-item course-language">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-59"></i>Language:
                </span>
                <span className="edublink-course-feature-item-value">
                  {course?.language}
                </span>
              </li>

              <li className="edublink-course-details-features-item course-certificate">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-64"></i>Certifications:
                </span>
                <span className="edublink-course-feature-item-value">Yes</span>
              </li>
            </ul>

            <div className="edublink-course-details-sidebar-buttons">
              <div className="lp-course-buttons">
                <form
                  name="purchase-course"
                  className="purchase-course"
                  method="post"
                  encType="multipart/form-data"
                >
                  <input type="hidden" name="purchase-course" value="12817" />

                  <button className="lp-button button button-purchase-course">
                    Buy Now
                  </button>
                </form>
              </div>
            </div>

            <ShareButtons
              url={window.location.href}
              title={course?.name || ""}
              variant="circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebarSection;
