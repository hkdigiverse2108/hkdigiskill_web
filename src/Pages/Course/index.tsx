import { BreadCrumb } from "../../Components/Common";
import { Queries } from "../../Api";
import { CourseCard } from "../../Components/Course";

const courses = [
  {
    id: 12817,
    category: "Business",
    categories: ["business", "digital-marketing"],
    title: "Starting SEO as your Home Based Business",
    excerpt:
      "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor...",
    href: "https://demo.edublink.co/courses/starting-seo-as-your-home-based-business/",
    image:
      "https://demo.edublink.co/wp-content/uploads/2023/03/course-04-590x430.jpg",
    alt: "course-04",
    mode: "Online Only",
    rating: 5,
    ratingCount: 3,
    position: { left: "0px", top: "0px" },
  },
  {
    id: 12798,
    category: "Motivation",
    categories: ["motivation", "programming"],
    title: "Grow Personal Financial Security Thinking & Principles",
    excerpt:
      "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor...",
    href: "https://demo.edublink.co/courses/grow-personal-financial-security-thinking-principles/",
    image:
      "https://demo.edublink.co/wp-content/uploads/2023/03/course-08-590x430.jpg",
    alt: "course-08",
    mode: "Online + Onsite",
    rating: 5,
    ratingCount: 2,
    position: { left: "384.8px", top: "0px" },
  },
  {
    id: 12782,
    category: "Programming",
    categories: ["programming"],
    title: "The Complete Guide to Build RESTful API Application",
    excerpt:
      "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor...",
    href: "https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/",
    image:
      "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
    alt: "course-12",
    mode: "Online + Onsite",
    rating: 4,
    ratingCount: 2,
    position: { left: "769.6px", top: "0px" },
  },
  {
    id: 12768,
    category: "Business",
    categories: ["business"],
    title: "Competitive Strategy Law for Management Consultants",
    excerpt:
      "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor...",
    href: "https://demo.edublink.co/courses/competitive-strategy-law-for-management-consultants/",
    image:
      "https://demo.edublink.co/wp-content/uploads/2023/03/course-03-590x430.jpg",
    alt: "course-03",
    mode: "Onsite Only",
    rating: 3,
    ratingCount: 2,
    position: { left: "384.8px", top: "581.875px" },
  },
  {
    id: 12709,
    category: "Programming",
    categories: ["programming"],
    title: "Web Development Masterclass & Certifications",
    excerpt:
      "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor...",
    href: "https://demo.edublink.co/courses/web-development-masterclass-certifications/",
    image:
      "https://demo.edublink.co/wp-content/uploads/2023/03/course-07-590x430.jpg",
    alt: "course-07",
    mode: "Online + Onsite",
    rating: 4,
    ratingCount: 2,
    position: { left: "0px", top: "1165.75px" },
  },
  {
    id: 12688,
    category: "Business",
    categories: ["business", "programming"],
    title: "The Complete Python Bootcamp From Zero to Hero",
    excerpt:
      "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor...",
    href: "https://demo.edublink.co/courses/the-complete-python-bootcamp-from-zero-to-hero/",
    image:
      "https://demo.edublink.co/wp-content/uploads/2023/11/course-83-590x430.jpg",
    alt: "course-83",
    mode: "Online + Onsite",
    rating: 4,
    ratingCount: 2,
    position: { left: "769.6px", top: "1165.75px" },
  },
];

const Course = () => {
  const { data } = Queries.useGetAllCourses();
  const Courses = data?.data?.course_data || [];
  console.log("Courses", Courses);

  return (
    <div>
      <section>
        <BreadCrumb title="Course" />
      </section>
      <div id="content" className="site-content my-50!">
        <div className="site-content-inner edublink-container">
          <div className="edublink-main-content-inner">
            <div className="edublink-course-archive-top-bar-wrapper">
              <div className="edublink-course-archive-top-bar edublink-row">
                <div className="edublink-col-md-6">
                  <span className="edublink-course-archive-index-count">
                    Showing <span>1-9</span> Of <span>62</span> Results
                  </span>
                </div>

                <div className="edublink-col-md-6">
                  <div className="edublink-course-archive-search">
                    <div className="edu-search-box">
                      <form
                        className="edublink-archive-course-search-form"
                        method="get"
                        action="https://demo.edublink.co/courses/"
                      >
                        <input
                          type="text"
                          name="search_query"
                          placeholder="Search Courses..."
                          className="input-search"
                          autoComplete="off"
                        />
                        <input
                          type="hidden"
                          value="lp_course_search"
                          name="eb_lp_course_filter"
                        />
                        <button className="search-button">
                          <i className="icon-2"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COURSES GRID */}

            <div className="grid grid-cols-3 gap-12 ">
              {Courses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>

            <nav className="edublink-pagination-wrapper">
              <ul className="page-number">
                <li className="active">
                  <span className="page-numbers current">1</span>
                </li>

                <li>
                  <a
                    className="page-numbers"
                  >
                    2
                  </a>
                </li>

                <li>
                  <a
                    className="page-numbers"
                  >
                    3
                  </a>
                </li>

                <li>
                  <a
                    className="page-numbers"
                  >
                    4
                  </a>
                </li>

                <li>
                  <a
                    className="page-numbers"
                    title="next"
                  >
                    <span className="edublink-pagination-icon icon-east"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
