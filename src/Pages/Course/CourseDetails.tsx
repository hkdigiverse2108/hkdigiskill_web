import React from "react";
import { BreadCrumb } from "../../Components/Common";

export interface Course {
  level: string;
  title: string;
  image: string;
  link: string;
  duration: string;

  rating: number;       // e.g., 4.5
  ratingsCount: number; // e.g., 12 reviewers

  price: number;        // current price
  oldPrice?: number;    // optional old price / discount

  lessons: number;
  students: number;

  description?: string; // optional description
}

export interface CourseCardProps {
  course: Course;
}

const relatedCourses = [
  {
    id: 1,
    level: "All Levels",
    title: "Competitive Strategy Law for Management Consultants",
    link: "https://demo.edublink.co/courses/competitive-strategy-law-for-management-consultants/",
    image:
      "https://demo.edublink.co/wp-content/uploads/2023/03/course-03-590x430.jpg",
    duration: "25 hours",
    rating: 3,
    ratingsCount: 2,
    price: 75,
    lessons: 7,
    students: 362,
    description:
      "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor...",
  },

  {
    id: 2,
    level: "Beginner",
    title: "Learning How To Write As A Professional Author",
    link: "https://demo.edublink.co/courses/learning-how-to-write-as-a-professional-author/",
    image:
      "https://demo.edublink.co/wp-content/uploads/2023/03/course-01-590x430.jpg",
    duration: "15 hours",
    rating: 5,
    ratingsCount: 3,
    price: 29,
    oldPrice: 39,
    lessons: 7,
    students: 423,
    description:
      "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor...",
  },

  {
    id: 3,
    level: "All Levels",
    title: "The Complete Python Bootcamp From Zero to Hero",
    link: "https://demo.edublink.co/courses/the-complete-python-bootcamp-from-zero-to-hero/",
    image:
      "https://demo.edublink.co/wp-content/uploads/2023/11/course-83-590x430.jpg",
    duration: "30 hours",
    rating: 4,
    ratingsCount: 2,
    price: 35,
    lessons: 7,
    students: 674,
    description:
      "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor...",
  },
];

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const {
    level,
    title,
    image,
    link,
    duration,
    rating,
    ratingsCount,
    price,
    oldPrice,
    lessons,
    students,
    description,
  } = course;

  return (
    <div className="swiper-slide" style={{ width: "384.667px" }}>
      <div className="edublink-single-course course-style-1">
        <div className="inner">
          <div className="thumbnail">
            <a className="course-thumb" href={link}>
              <img className="w-100" src={image} alt={title} />
            </a>

            <div className="time-top">
              <span className="duration">
                <i className="icon-61"></i>
                {duration}
              </span>
            </div>
          </div>

          <div className="content">
            <span className="course-level">{level}</span>

            <h6 className="title">
              <a href={link}>{title}</a>
            </h6>

            {/* Rating */}
            <div className="course-rating">
              <div className="edublink-course-review-wrapper">
                <div
                  className="review-stars-rated"
                  style={{ display: "flex", position: "relative" }}
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div className="review-star" key={i}>
                      <span className="far">★</span>
                      <span
                        className="fas"
                        style={{ width: i <= rating ? "100%" : "0%" }}
                      >
                        ★
                      </span>
                    </div>
                  ))}
                </div>

                <span>
                  ({rating}.0 / {ratingsCount} Ratings)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="course-price">
              <span className="course-item-price">
                {oldPrice && <span className="origin-price">${oldPrice}</span>}
                <span className="price">${price}</span>
              </span>
            </div>

            {/* Meta */}
            <ul className="course-meta">
              <li>
                <i className="icon-24"></i>
                {lessons} Lessons
              </li>
              <li>
                <i className="icon-25"></i>
                {students} Students
              </li>
            </ul>
          </div>
        </div>

        {/* Hover */}
        <div className="course-hover-content-wrapper">
          <div className="wishlist-top-right">
            <button className="edublink-wishlist-wrapper edublink-lp-non-logged-user"></button>
          </div>
        </div>

        <div className="course-hover-content">
          <div className="content">
            <span className="course-level">{level}</span>

            <h6 className="title">
              <a href={link}>{title}</a>
            </h6>

            {/* Rating hover */}
            <div className="course-rating">
              <div className="edublink-course-review-wrapper">
                <div
                  className="review-stars-rated"
                  style={{ display: "flex", position: "relative" }}
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div className="review-star" key={i + "hover"}>
                      <span className="far">★</span>
                      <span
                        className="fas"
                        style={{ width: i <= rating ? "100%" : "0%" }}
                      >
                        ★
                      </span>
                    </div>
                  ))}
                </div>

                <span>
                  ({rating}.0 / {ratingsCount} Ratings)
                </span>
              </div>
            </div>

            <div className="course-price">
              <span className="course-item-price">
                {oldPrice && <span className="origin-price">${oldPrice}</span>}
                <span className="price">${price}</span>
              </span>
            </div>

            <p>{description}</p>

            <ul className="course-meta">
              <li>
                <i className="icon-24"></i>
                {lessons} Lessons
              </li>
              <li>
                <i className="icon-25"></i>
                {students} Students
              </li>
            </ul>

            <a className="edu-btn btn-secondary btn-small" href={link}>
              Enroll Now <i className="icon-4"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseDetails = () => {
  return (
    <div id="content" className="site-content">
      <div className="lp-archive-courses">

            <BreadCrumb title="Course Details" />

        <div className="edublink-course-details-page lp-course-single-page eb-course-single-style-4">
          <div className="edublink-container">
            <div className="edublink-row">
              <div
                id="learn-press-course"
                className="course-summary edublink-col-lg-8"
              >
                <div className="eb-course-details-page-content">
                  <div className="edublink-course-page-header edublink-course-page-header eb-course-details-header-4">
                    <div className="eb-course-header-breadcrumb-content">
                      <div className="edublink-container">
                        <div className="edublink-course-breadcrumb-inner">
                          <div className="edublink-course-title">
                            <h1 className="entry-title">
                              Starting SEO as your Home Based Business
                            </h1>
                          </div>

                          <div className="edublink-course-header-meta">
                            <ul className="eb-course-header-meta-items">
                              <li className="instructor">
                                <i className="icon-58"></i>By Edward Norton
                              </li>

                              <li className="category">
                                <i className="icon-59"></i>
                                <a href="https://demo.edublink.co/course-category/business/">
                                  Business
                                </a>
                              </li>

                              <li className="rating">
                                <div className="edublink-course-review-wrapper">
                                  <div
                                    className="review-stars-rated"
                                    title="5 out of 5 stars"
                                    style={{
                                      display: "flex",
                                      position: "relative",
                                    }}
                                  >
                                    {/* --- STAR 1 --- */}
                                    <div className="review-star">
                                      <span className="far">
                                        <svg
                                          width="17px"
                                          height="16px"
                                          viewBox="0 0 17 16"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g
                                            stroke="none"
                                            fill="none"
                                            fillRule="evenodd"
                                          >
                                            <g
                                              fill="#FFB606"
                                              fillRule="nonzero"
                                            >
                                              <path d="M8.5,0 L10.9285714,6.15384615..." />
                                            </g>
                                          </g>
                                        </svg>
                                      </span>

                                      <span
                                        className="fas"
                                        style={{ width: "100%" }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="17px"
                                          height="16px"
                                          viewBox="0 0 17 16"
                                        >
                                          <g
                                            stroke="none"
                                            fill="none"
                                            fillRule="evenodd"
                                          >
                                            <g
                                              fill="#FFB606"
                                              fillRule="nonzero"
                                            >
                                              <polygon points="8.5 12.3076923 3.0357 16 ..." />
                                            </g>
                                          </g>
                                        </svg>
                                      </span>
                                    </div>

                                    {/* Repeat same structure for other stars */}
                                  </div>

                                  <span>(3 Reviews)</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="eb-course-single-4-preview">
                    <div
                      className="edublink-course-details-card-preview"
                      style={{
                        backgroundImage:
                          "url('https://demo.edublink.co/wp-content/themes/edublink/assets/images/course-preview.jpg')",
                      }}
                    >
                      <div className="edublink-course-video-preview-area">
                        <a
                          data-fancybox=""
                          href="https://www.youtube.com/watch?v=m2m5Xx5T4No"
                          className="edublink-course-video-popup"
                        >
                          <i className="icon-18"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="course-content course-summary-content">
                    <div id="learn-press-course-tabs" className="course-tabs">
                      <input
                        type="radio"
                        name="learn-press-course-tab-radio"
                        id="tab-overview-input"
                        defaultChecked
                        value="overview"
                      />
                      <input
                        type="radio"
                        name="learn-press-course-tab-radio"
                        id="tab-curriculum-input"
                        value="curriculum"
                      />
                      <input
                        type="radio"
                        name="learn-press-course-tab-radio"
                        id="tab-instructor-input"
                        value="instructor"
                      />
                      <input
                        type="radio"
                        name="learn-press-course-tab-radio"
                        id="tab-reviews-input"
                        value="reviews"
                      />

                      <ul
                        className="learn-press-nav-tabs course-nav-tabs"
                        data-tabs="4"
                      >
                        <li className="course-nav course-nav-tab-overview active">
                          <label htmlFor="tab-overview-input">Overview</label>
                        </li>

                        <li className="course-nav course-nav-tab-curriculum">
                          <label htmlFor="tab-curriculum-input">
                            Curriculum
                          </label>
                        </li>

                        <li className="course-nav course-nav-tab-instructor">
                          <label htmlFor="tab-instructor-input">
                            Instructor
                          </label>
                        </li>

                        <li className="course-nav course-nav-tab-reviews">
                          <label htmlFor="tab-reviews-input">Reviews</label>
                        </li>
                      </ul>

                      <div className="course-tab-panels">
                        <div
                          className="course-tab-panel-overview course-tab-panel"
                          id="tab-overview"
                        >
                          <div
                            className="course-description"
                            id="learn-press-course-description"
                          >
                            <h3>Course Description</h3>
                            <p>
                              Lorem ipsum dolor sit amet consectur adipisicing
                              elit, sed do eiusmod tempor inc idid unt ut labore
                              et dolore magna aliqua enim ad minim veniam, quis
                              nostrud exerec tation ullamco laboris nis aliquip
                              commodo consequat duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum
                              dolore eu fugiat nulla pariatur enim ipsam.
                            </p>
                            <p className="mb--60">
                              Excepteur sint occaecat cupidatat non proident
                              sunt in culpa qui officia deserunt mollit anim id
                              est laborum. Sed ut perspiciatis unde omnis iste
                              natus error sit voluptatem accusantium doloremque
                              laudantium totam rem aperiam.
                            </p>
                            <h5>What You’ll Learn?</h5>

                            <ul className="edublink-ul-style-check">
                              <li>
                                Neque sodales ut etiam sit amet nisl purus non
                                tellus orci ac auctor
                              </li>
                              <li>
                                Tristique nulla aliquet enim tortor at auctor
                                urna. Sit amet aliquam id diam maer
                              </li>
                              <li>
                                Nam libero justo laoreet sit amet. Lacus sed
                                viverra tellus in hac
                              </li>
                              <li>
                                Tempus imperdiet nulla malesuada pellentesque
                                elit eget gravida cum sociis
                              </li>
                            </ul>

                            <div className="edublink-mt--40">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo viverra maecenas
                              accumsan lacus vel facilisis.
                            </div>
                          </div>
                        </div>

                        {/* ======================= CURRICULUM ========================== */}
                        <div
                          className="course-tab-panel-curriculum course-tab-panel"
                          id="tab-curriculum"
                        >
                          <div
                            className="course-curriculum"
                            id="learn-press-course-curriculum"
                          >
                            <div className="curriculum-scrollable">
                              <ul className="curriculum-sections">
                                {/* SECTION 1 */}
                                <li
                                  className="section"
                                  id="section-basic-introduction-3"
                                  data-id="basic-introduction-3"
                                  data-section-id="3"
                                >
                                  <div className="section-header">
                                    <div className="section-left">
                                      <h5 className="section-title">
                                        Basic Introduction
                                      </h5>
                                      <span className="section-toggle">
                                        <i className="fas fa-caret-down"></i>
                                        <i className="fas fa-caret-up"></i>
                                      </span>
                                    </div>
                                  </div>

                                  <ul className="section-content">
                                    <li
                                      className="course-item course-item-lp_lesson course-item-12783 item-preview has-status"
                                      data-id="12783"
                                    >
                                      <a
                                        className="section-item-link"
                                        href="https://demo.edublink.co/courses/starting-seo-as-your-home-based-business/lessons/brush-up-on-java-concepts/"
                                      >
                                        <span className="item-name">
                                          Brush up on Java concepts
                                        </span>
                                        <div className="course-item-meta">
                                          <span
                                            className="item-meta course-item-preview"
                                            data-preview="Preview"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>

                                    <li
                                      className="course-item course-item-lp_lesson course-item-12803 item-locked"
                                      data-id="12803"
                                    >
                                      <a className="section-item-link" href="">
                                        <span className="item-name">
                                          A Quick Introduction to Excel’s Pivot
                                          Tables
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta duration">
                                            7 minutes
                                          </span>
                                          <span
                                            className="item-meta course-item-status"
                                            title="Unread"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>

                                    <li
                                      className="course-item course-item-lp_lesson course-item-12664 item-locked"
                                      data-id="12664"
                                    >
                                      <a className="section-item-link" href="">
                                        <span className="item-name">
                                          Amazon RDS Hands On
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta duration">
                                            7 minutes
                                          </span>
                                          <span
                                            className="item-meta course-item-status"
                                            title="Unread"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>

                                    <li
                                      className="course-item course-item-lp_lesson course-item-12639 item-locked"
                                      data-id="12639"
                                    >
                                      <a className="section-item-link" href="">
                                        <span className="item-name">
                                          Associative Arrays
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta duration">
                                            3 minutes
                                          </span>
                                          <span
                                            className="item-meta course-item-status"
                                            title="Unread"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>

                                    <li
                                      className="course-item course-item-lp_quiz course-item-13642 item-locked"
                                      data-id="13642"
                                    >
                                      <a className="section-item-link" href="">
                                        <span className="item-name">
                                          PHP fundamental
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta count-questions">
                                            2 questions
                                          </span>
                                          <span
                                            className="item-meta course-item-status"
                                            title="Unread"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </li>

                                {/* SECTION 2 */}
                                <li
                                  className="section"
                                  id="section-fundamental-concept-of-html-4"
                                  data-id="fundamental-concept-of-html-4"
                                  data-section-id="4"
                                >
                                  <div className="section-header">
                                    <div className="section-left">
                                      <h5 className="section-title">
                                        Fundamental Concept of HTML
                                      </h5>
                                      <span className="section-toggle">
                                        <i className="fas fa-caret-down"></i>
                                        <i className="fas fa-caret-up"></i>
                                      </span>
                                    </div>
                                  </div>

                                  <ul className="section-content">
                                    <li
                                      className="course-item course-item-lp_lesson course-item-12821 item-locked"
                                      data-id="12821"
                                    >
                                      <a className="section-item-link" href="">
                                        <span className="item-name">
                                          A Note on Semantic HTML
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta duration">
                                            3 minutes
                                          </span>
                                          <span
                                            className="item-meta course-item-status"
                                            title="Unread"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>

                                    <li
                                      className="course-item course-item-lp_lesson course-item-12835 item-locked"
                                      data-id="12835"
                                    >
                                      <a className="section-item-link" href="">
                                        <span className="item-name">
                                          Centering our Page
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta duration">
                                            3 minutes
                                          </span>
                                          <span
                                            className="item-meta course-item-status"
                                            title="Unread"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>

                                    <li
                                      className="course-item course-item-lp_lesson course-item-12832 item-locked"
                                      data-id="12832"
                                    >
                                      <a className="section-item-link" href="">
                                        <span className="item-name">
                                          Class and ID Selectors
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta duration">
                                            3 minutes
                                          </span>
                                          <span
                                            className="item-meta course-item-status"
                                            title="Unread"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>

                                    <li
                                      className="course-item course-item-lp_lesson course-item-12788 item-locked"
                                      data-id="12788"
                                    >
                                      <a className="section-item-link" href="">
                                        <span className="item-name">
                                          Code download
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta duration">
                                            3 minutes
                                          </span>
                                          <span
                                            className="item-meta course-item-status"
                                            title="Unread"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </li>

                                {/* SECTION 3 */}
                                <li
                                  className="section"
                                  id="section-programming-core-concept-5"
                                  data-id="programming-core-concept-5"
                                  data-section-id="5"
                                >
                                  <div className="section-header">
                                    <div className="section-left">
                                      <h5 className="section-title">
                                        Programming Core Concept
                                      </h5>
                                      <span className="section-toggle">
                                        <i className="fas fa-caret-down"></i>
                                        <i className="fas fa-caret-up"></i>
                                      </span>
                                    </div>
                                  </div>

                                  <ul className="section-content">
                                    <li
                                      className="course-item course-item-lp_lesson course-item-12822 item-locked"
                                      data-id="12822"
                                    >
                                      <a className="section-item-link" href="">
                                        <span className="item-name">
                                          Combining Selectors
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta duration">
                                            5 minutes
                                          </span>
                                          <span
                                            className="item-meta course-item-status"
                                            title="Unread"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>

                                    <li
                                      className="course-item course-item-lp_lesson course-item-12640 item-locked"
                                      data-id="12640"
                                    >
                                      <a className="section-item-link" href="">
                                        <span className="item-name">
                                          Comparison and Logical Operators
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta duration">
                                            7 minutes
                                          </span>
                                          <span
                                            className="item-meta course-item-status"
                                            title="Unread"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>

                                    <li
                                      className="course-item course-item-lp_lesson course-item-12786 item-locked"
                                      data-id="12786"
                                    >
                                      <a className="section-item-link" href="">
                                        <span className="item-name">
                                          Cookie Authentication API for Jira
                                          requests
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta duration">
                                            7 minutes
                                          </span>
                                          <span
                                            className="item-meta course-item-status"
                                            title="Unread"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>

                                    <li
                                      className="course-item course-item-lp_quiz course-item-12823 item-locked"
                                      data-id="12823"
                                    >
                                      <a className="section-item-link" href="">
                                        <span className="item-name">
                                          Clearing Floats
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta count-questions">
                                            2 questions
                                          </span>
                                          <span className="item-meta duration">
                                            5 minutes
                                          </span>
                                          <span
                                            className="item-meta course-item-status"
                                            title="Unread"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>

                                    <li
                                      className="course-item course-item-lp_quiz course-item-12824 item-locked"
                                      data-id="12824"
                                    >
                                      <a className="section-item-link" href="">
                                        <span className="item-name">
                                          Pseudo-elements
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta count-questions">
                                            2 questions
                                          </span>
                                          <span className="item-meta duration">
                                            5 minutes
                                          </span>
                                          <span
                                            className="item-meta course-item-status"
                                            title="Unread"
                                          ></span>
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="course-tab-panel-instructor course-tab-panel"
                          id="tab-instructor"
                        >
                          <div className="edublink-course-author-wrapper">
                            <div className="edublink-course-author-thumb">
                              <img
                                width="270"
                                height="320"
                                src="https://demo.edublink.co/wp-content/uploads/2023/06/team-02.webp"
                                className="avatar avatar-350 photo"
                                alt=""
                                decoding="async"
                                srcSet="
          https://demo.edublink.co/wp-content/uploads/2023/06/team-02.webp 270w,
          https://demo.edublink.co/wp-content/uploads/2023/06/team-02-253x300.webp 253w
        "
                                sizes="(max-width: 270px) 100vw, 270px"
                              />
                            </div>

                            <div className="edublink-course-author-details">
                              <div className="edublink-author-bio-name">
                                <a href="https://demo.edublink.co/instructor/uetelew57nrop/">
                                  <span>
                                    <span className="instructor-display-name">
                                      Edward Norton
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="edublink-author-bio-designation">
                                <span>Design Expert</span>
                              </div>

                              <div className="edublink-author-bio-details">
                                <p>
                                  Consectetur adipisicing elit, sed do eiusmod
                                  tempor incididunt labore et dolore magna
                                  aliqua enim minim veniam quis nostrud
                                  exercitation ulla mco laboris nisi ut aliquip
                                  ex ea commodo consequat. duis aute irure dolor
                                  in reprehenderit in voluptate.
                                </p>
                              </div>

                              <div className="edublink-author-social-info">
                                <a href="#" target="_blank">
                                  <i className="icon-facebook"></i>
                                </a>
                                <a href="#" target="_blank">
                                  <i className="icon-twitter"></i>
                                </a>
                                <a href="#" target="_blank">
                                  <i className="icon-linkedin2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ==================== REVIEWS TAB ==================== */}

                        <div
                          className="course-tab-panel-reviews course-tab-panel"
                          id="tab-reviews"
                        >
                          <div
                            className="learnpress-course-review"
                            data-id="12817"
                          >
                            <div className="lp-rating-reviews">
                              <div className="course-rate">
                                <div className="course-rate__summary">
                                  <div className="course-rate__summary-value">
                                    5
                                  </div>

                                  <div className="course-rate__summary-stars">
                                    <div
                                      className="review-stars-rated"
                                      title="5 out of 5 stars"
                                      style={{
                                        display: "flex",
                                        position: "relative",
                                      }}
                                    >
                                      {[1, 2, 3, 4, 5].map((i) => (
                                        <div className="review-star" key={i}>
                                          <span className="far">
                                            <svg
                                              width="17"
                                              height="16"
                                              viewBox="0 0 17 16"
                                            >
                                              <g
                                                fill="#FFB606"
                                                fillRule="nonzero"
                                              >
                                                <path d="M8.5 0l2.43 6.15H17l-5.46 3.69L13.96 16 8.5 12.31 3.03 16l2.43-6.15L0 6.15h6.07z" />
                                              </g>
                                            </svg>
                                          </span>

                                          <span
                                            className="fas"
                                            style={{ width: "100%" }}
                                          >
                                            <svg
                                              width="17"
                                              height="16"
                                              viewBox="0 0 17 16"
                                            >
                                              <g
                                                fill="#FFB606"
                                                fillRule="nonzero"
                                              >
                                                <polygon points="8.5 12.31 3.03 16 5.46 9.85 0 6.15 6.07 6.15 8.5 0 10.93 6.15 17 6.15 11.54 9.85 13.96 16" />
                                              </g>
                                            </svg>
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="course-rate__summary-text">
                                    <span>3</span> ratings
                                  </div>
                                </div>
                              </div>

                              {/* ================= RATING BREAKDOWN ================= */}

                              <div className="course-rate__details">
                                {[5, 4, 3, 2, 1].map((star) => (
                                  <div
                                    className="course-rate__details-row"
                                    key={star}
                                  >
                                    <span className="course-rate__details-row-star">
                                      {star}
                                      <i
                                        className="fas"
                                        style={{ color: "#ffb60a" }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
                    6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
                    0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 
                    3.356.83 4.73c.078.443-.36.79-.746.592L8 
                    13.187l-4.389 2.256z"
                                          />
                                        </svg>
                                      </i>
                                    </span>

                                    <div className="course-rate__details-row-value">
                                      <div className="rating-gray"></div>
                                      <div
                                        className="rating"
                                        style={{
                                          width: star === 5 ? "100%" : "0%",
                                        }}
                                      ></div>
                                      <span className="rating-count">
                                        {star === 5 ? 3 : 0}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* ================= REVIEWS LIST ================= */}

                            <div id="course-reviews">
                              <h3 className="course-review-head">Reviews</h3>

                              <ul className="course-reviews-list">
                                <li>
                                  <div className="review-author">
                                    <img
                                      width="96"
                                      height="96"
                                      src="https://demo.edublink.co/wp-content/uploads/2023/06/team-04-96x96.webp"
                                      className="avatar avatar-96 photo"
                                      alt=""
                                    />
                                  </div>

                                  <div className="review-author-info">
                                    <div className="review-top">
                                      <h4 className="user-name">
                                        Steve Martin
                                      </h4>

                                      <div
                                        className="review-stars-rated"
                                        title="5 out of 5 stars"
                                        style={{
                                          display: "flex",
                                          position: "relative",
                                        }}
                                      >
                                        {[1, 2, 3, 4, 5].map((i) => (
                                          <div className="review-star" key={i}>
                                            <span className="far">
                                              <svg
                                                width="17"
                                                height="16"
                                                viewBox="0 0 17 16"
                                              >
                                                <g fill="#FFB606">
                                                  <path
                                                    d="M8.5 0l2.43 6.15H17l-5.46 3.69L13.96 16 8.5 
                          12.31 3.03 16l2.43-6.15L0 6.15h6.07z"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            <span
                                              className="fas"
                                              style={{ width: "100%" }}
                                            >
                                              <svg
                                                width="17"
                                                height="16"
                                                viewBox="0 0 17 16"
                                              >
                                                <g fill="#FFB606">
                                                  <polygon
                                                    points="8.5 12.31 3.03 16 5.46 9.85 0 6.15 
                          6.07 6.15 8.5 0 10.93 6.15 17 6.15 11.54 9.85 13.96 16"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    <p className="review-title">
                                      Excellent Course
                                    </p>

                                    <div className="review-text">
                                      <div className="review-content">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR IF NEEDED */}
              <div
                id="comments"
                className="comments-area edublink-comments-area"
              ></div>

              <div className="ed-course-sidebar edublink-col-lg-4">
                <div className="edublink-course-details-sidebar eb-course-single-4 sidebar-enable">
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
                                <span className="origin-price">$35</span>
                                <span className="price">$30</span>
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
                            15 weeks
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
                          <span className="edublink-course-feature-item-value">
                            11
                          </span>
                        </li>

                        <li className="edublink-course-details-features-item course-student">
                          <span className="edublink-course-feature-item-label">
                            <i className="icon-63"></i>Students:
                          </span>
                          <span className="edublink-course-feature-item-value">
                            227
                          </span>
                        </li>

                        <li className="edublink-course-details-features-item course-language">
                          <span className="edublink-course-feature-item-label">
                            <i className="icon-59"></i>Language:
                          </span>
                          <span className="edublink-course-feature-item-value">
                            English
                          </span>
                        </li>

                        <li className="edublink-course-details-features-item course-certificate">
                          <span className="edublink-course-feature-item-label">
                            <i className="icon-64"></i>Certifications:
                          </span>
                          <span className="edublink-course-feature-item-value">
                            Yes
                          </span>
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
                            <input
                              type="hidden"
                              name="purchase-course"
                              value="12817"
                            />

                            <button className="lp-button button button-purchase-course">
                              Buy Now
                            </button>
                          </form>
                        </div>
                      </div>

                      <div className="edublink-single-event-social-share">
                        <h4 className="share-title">Share On:</h4>

                        <ul className="edublink-social-share-icons-wrapper">
                          <li className="edublink-social-share-each-icon facebook">
                            <a
                              className="edublink-social-share-link"
                              href="https://www.facebook.com/sharer.php?s=100&amp;u=https://demo.edublink.co/courses/starting-seo-as-your-home-based-business/&amp;i=https%3A%2F%2Fdemo.edublink.co%2Fwp-content%2Fuploads%2F2023%2F03%2Fcourse-04.jpg"
                              target="_blank"
                              title="Share on facebook"
                              rel="noreferrer"
                            >
                              <i className="icon-facebook"></i>
                            </a>
                          </li>

                          <li className="edublink-social-share-each-icon twitter">
                            <a
                              className="edublink-social-share-link"
                              href="https://twitter.com/intent/tweet?url=https://demo.edublink.co/courses/starting-seo-as-your-home-based-business/"
                              target="_blank"
                              title="Share on Twitter"
                              rel="noreferrer"
                            >
                              <i className="icon-twitter"></i>
                            </a>
                          </li>

                          <li className="edublink-social-share-each-icon linkedin">
                            <a
                              className="edublink-social-share-link"
                              href="https://linkedin.com/shareArticle?mini=true&amp;url=https://demo.edublink.co/courses/starting-seo-as-your-home-based-business/&amp;title=Starting SEO as your Home Based Business"
                              target="_blank"
                              title="Share on LinkedIn"
                              rel="noreferrer"
                            >
                              <i className="icon-linkedin2"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="edublink-related-course-content-wrapper edublink-container">
            <div className="section-title">
              <h3 className="title related-course-title">
                Courses You May Like
              </h3>
            </div>

            <div
              className="edublink-related-course-items eb-swiper-carousel-activator swiper swiper-container swiper-horizontal swiper-pointer-events swiper-backface-hidden"
              data-lg-items="3"
              data-md-items="3"
              data-sm-items="2"
              data-xs-items="2"
            >
              <div className="swiper-wrapper">
                {relatedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
