import { Link } from "react-router-dom";
import { CourseCard2 } from "../Course";
import { Queries } from "../../Api";
import { ROUTES } from "../../Constants";

const CourseSection = () => {
  // const relatedCourses = [
  //   {
  //     id: 1,
  //     level: "All Levels",
  //     title: "Competitive Strategy Law for Management Consultants",
  //     link: "https://demo.edublink.co/courses/competitive-strategy-law-for-management-consultants/",
  //     image:
  //       "https://demo.edublink.co/wp-content/uploads/2023/03/course-03-590x430.jpg",
  //     duration: "25 hours",
  //     rating: 3,
  //     ratingsCount: 2,
  //     price: 75,
  //     lessons: 7,
  //     students: 362,
  //     description:
  //       "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor...",
  //   },

  //   {
  //     id: 2,
  //     level: "Beginner",
  //     title: "Learning How To Write As A Professional Author",
  //     link: "https://demo.edublink.co/courses/learning-how-to-write-as-a-professional-author/",
  //     image:
  //       "https://demo.edublink.co/wp-content/uploads/2023/03/course-01-590x430.jpg",
  //     duration: "15 hours",
  //     rating: 5,
  //     ratingsCount: 3,
  //     price: 29,
  //     oldPrice: 39,
  //     lessons: 7,
  //     students: 423,
  //     description:
  //       "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor...",
  //   },

  //   {
  //     id: 3,
  //     level: "All Levels",
  //     title: "The Complete Python Bootcamp From Zero to Hero",
  //     link: "https://demo.edublink.co/courses/the-complete-python-bootcamp-from-zero-to-hero/",
  //     image:
  //       "https://demo.edublink.co/wp-content/uploads/2023/11/course-83-590x430.jpg",
  //     duration: "30 hours",
  //     rating: 4,
  //     ratingsCount: 2,
  //     price: 35,
  //     lessons: 7,
  //     students: 674,
  //     description:
  //       "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor...",
  //   },
  // ];

  const { data } = Queries.useGetAllCourses();
  const Courses = data?.data?.course_data || [];

  console.log("Courses", Courses);

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-e0cd102 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-background-overlay" />
      <div className="elementor-container elementor-column-gap-extended">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cd4cbd1"
          data-id="cd4cbd1"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-b2d71ca elementor-widget elementor-widget-edublink-heading"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <div className="elementor-widget-container">
                <div className="edublink-section-heading">
                  <span className="pre-heading">POPULAR COURSES</span>
                  <h3 className="heading">Pick A Course To Get Started</h3>
                  <div className="title-shape">
                    <i className="icon-19" />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-6bce914 distant-learning-course elementor-widget elementor-widget-edublink-lp-courses">
              <div className="elementor-widget-container">
                <div className="edublink-course-widget-wrapper flex justify-center">
                  <div className="edublink-archive-lp-courses grid! grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6! px-6! w-full edublink-course-archive edublink-lms-courses-grid active-white-bg edublink-row eb-masonry-grid-wrapper">
                    {Courses?.splice(0, 3)?.map((course) => (
                      <CourseCard2 key={course._id} course={course} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-555c286 elementor-widget elementor-widget-edublink-button"
              data-id="555c286"
              data-element_type="widget"
              data-widget_type="edublink-button.default"
            >
              <div className="elementor-widget-container">
                <div className="edublink-button-widget-wrapper">
                  <Link
                    className="edublink-button-item edublink-button-style-default edublink-button-size-custom edublink-button-icon-position-after default-style"
                    to={ROUTES.COURSE.BASE}
                  >
                    Browse more courses
                    <i className="icon-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
