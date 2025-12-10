import React from "react";
import { BreadCrumb } from "../../Components/Common";

export interface Course {
  id: number;
  title: string;
  image: string;
  alt: string;
  href: string;
  category: string;
  categories?: string[]; // optional, since some items include it
  excerpt: string;
  mode: string;
  rating: number; // 0–5 stars
  ratingCount: number; // number of ratings
  position: {
    left: string;
    top: string;
  };
}

interface CourseCardProps {
  course: Course;
}

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

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const {
    id,
    title,
    image,
    alt,
    href,
    category,
    excerpt,
    mode,
    rating,
    ratingCount,
    position,
  } = course;

  return (
    <div
      id={`post-${id}`}
      className="eb-masonry-item edublink-course-style-2 edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-12 sal-animate"
      data-sal=""
      style={{ position: "absolute", ...position }}
    >
      <div className="edublink-single-course course-style-2">
        <div className="inner">
          <div className="thumbnail">
            <a className="course-thumb" href={href}>
              <img className="w-100" src={image} alt={alt} />
            </a>

            <div className="time-top">
              <span className="duration">
                <i className="icon-61"></i>
                {mode}
              </span>
            </div>
          </div>

          <div className="content">
            <span className="course-level">
              <a href="#">{category}</a>
            </span>

            <h6 className="title">
              <a href={href}>{title}</a>
            </h6>

            <p>{excerpt}</p>

            {/* Rating Stars */}
            <div className="course-rating">
              <div className="edublink-course-review-wrapper">
                <div
                  className="review-stars-rated"
                  title={`${rating} out of 5 stars`}
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div className="review-star" key={i}>
                      <span className="far">
                        {/* Empty star */}
                        <svg width="17" height="16" viewBox="0 0 17 16">
                          <g fill="#FFB606">
                            <path d="M8.5,0L10.9,6.15H17L11.53,9.84L13.96,16L8.5,12.3L3.03,16L5.46,9.84L0,6.15H6.07L8.5,0Z" />
                          </g>
                        </svg>
                      </span>

                      <span
                        className="fas"
                        style={{ width: i <= rating ? "100%" : "0%" }}
                      >
                        {/* Full star */}
                        <svg width="17" height="16" viewBox="0 0 17 16">
                          <g fill="#FFB606">
                            <polygon points="8.5 12.3 3.03 16 5.46 9.84 0 6.15 6.07 6.15 8.5 0 10.92 6.15 17 6.15 11.53 9.84 13.96 16" />
                          </g>
                        </svg>
                      </span>
                    </div>
                  ))}
                </div>

                <span>
                  ({rating}.0/ {ratingCount} Ratings)
                </span>
              </div>
            </div>

            <div className="read-more-btn">
              <a className="edu-btn btn-small btn-secondary" href={href}>
                Enroll Now<i className="icon-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Course = () => {
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

            <div
              className="edublink-lms-courses-grid edublink-row edublink-course-archive eb-masonry-grid-wrapper"
              style={{ position: "relative", height: "1748.62px" }}
            >
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
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
                    href="https://demo.edublink.co/courses/page/2/?course_preset=2&excerpt_length=12"
                  >
                    2
                  </a>
                </li>

                <li>
                  <a
                    className="page-numbers"
                    href="https://demo.edublink.co/courses/page/3/?course_preset=2&excerpt_length=12"
                  >
                    3
                  </a>
                </li>

                <li>
                  <a
                    className="page-numbers"
                    href="https://demo.edublink.co/courses/page/4/?course_preset=2&excerpt_length=12"
                  >
                    4
                  </a>
                </li>

                <li>
                  <a
                    className="page-numbers"
                    href="https://demo.edublink.co/courses/page/2/?course_preset=2&excerpt_length=12"
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
