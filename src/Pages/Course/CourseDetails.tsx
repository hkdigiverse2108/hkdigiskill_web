import { useParams } from "react-router-dom";
import { BreadCrumb } from "../../Components/Common";
import { Queries } from "../../Api";
import {
  CourseOverviewSection,
  CourseCurriculumSection,
  CourseInstructorSection,
  CourseSidebarSection,
  CourseReviewSection,
  CourseCard,
} from "../../Components/Course";

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

const CourseDetails = () => {
  const { id } = useParams();
  console.log("Ids : ", id);

  const { data: allCourseData } = Queries.useGetAllCourses();
  const { data: Course } = Queries.useGetSingleCourse(id);

  const { data: courseCurriculum } = Queries.useGetCourseCurriculum(id);

  const singleCourse = Course?.data;
  const AllCourses = allCourseData?.data?.course_data || [];
  const AllCourseCurriculum =
    courseCurriculum?.data?.course_curriculum_data || [];

  console.log("singleCourse -->", singleCourse);
  console.log("AllCourses", AllCourses);
  console.log("AllCourseCurriculum", AllCourseCurriculum);

  return (
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
                            {/* Starting SEO as your Home Based Business */}
                            {singleCourse?.name}
                          </h1>
                        </div>

                        <div className="edublink-course-header-meta">
                          <ul className="eb-course-header-meta-items">
                            <li className="instructor">
                              <i className="icon-58"></i>By Edward Norton
                            </li>

                            <li className="category">
                              <i className="icon-59"></i>
                              <a>Business</a>
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
                                          <g fill="#FFB606" fillRule="nonzero">
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
                                          <g fill="#FFB606" fillRule="nonzero">
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
                    // style={{
                    //   backgroundImage:
                    //     "url('https://demo.edublink.co/wp-content/themes/edublink/assets/images/course-preview.jpg')",
                    // }}
                    style={{
                      backgroundImage: `url(${singleCourse?.image})`,
                    }}
                  >
                    <div className="edublink-course-video-preview-area">
                      <a className="edublink-course-video-popup">
                        <i className="icon-18"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* ========================= Tabs Section ========================= */}

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
                        <label htmlFor="tab-curriculum-input">Curriculum</label>
                      </li>

                      <li className="course-nav course-nav-tab-instructor">
                        <label htmlFor="tab-instructor-input">Instructor</label>
                      </li>

                      <li className="course-nav course-nav-tab-reviews">
                        <label htmlFor="tab-reviews-input">Reviews</label>
                      </li>
                    </ul>

                    <div className="course-tab-panels">
                      {/* ======================= Overview ========================== */}
                      <CourseOverviewSection desc={singleCourse?.description} />
                      {/* <div
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
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur enim ipsam.
                          </p>
                          <p className="mb--60">
                            Excepteur sint occaecat cupidatat non proident sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque
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
                              Tempus imperdiet nulla malesuada pellentesque elit
                              eget gravida cum sociis
                            </li>
                          </ul>

                          <div className="edublink-mt--40">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </div>
                        </div>
                      </div> */}

                      {/* ======================= CURRICULUM ========================== */}
                      <CourseCurriculumSection />
                      {/* ======================= Instructor ========================== */}
                      <CourseInstructorSection />
                      {/* ==================== REVIEWS TAB ==================== */}
                      <CourseReviewSection />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR IF NEEDED */}

            <CourseSidebarSection course={singleCourse} />
          </div>
        </div>

        <div className=" mt-22! edublink-related-course-content-wrapper edublink-container">
          <div className="section-title">
            <h3 className="title related-course-title">Courses You May Like</h3>
          </div>

          <div className="elementor-element elementor-element-6bce914 distant-learning-course elementor-widget elementor-widget-edublink-lp-courses">
            <div className="elementor-widget-container">
              <div className="edublink-course-widget-wrapper flex justify-center">
                <div className="edublink-archive-lp-courses grid! grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6! px-6! w-full edublink-course-archive edublink-lms-courses-grid active-white-bg edublink-row eb-masonry-grid-wrapper">
                  {AllCourses?.splice(0, 3)?.map((course) => (
                    <CourseCard key={course._id} course={course} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
