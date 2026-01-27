import { useParams } from "react-router-dom";
import { BreadCrumb } from "../../Components/Common";
import { Queries } from "../../Api";
import { Rate } from "antd";
import {
  CourseOverviewSection,
  CourseCurriculumSection,
  CourseSidebarSection,
  CourseReviewSection,
  CourseFaqSection,
  CourseCard,
} from "../../Components/Course";

const CourseDetails = () => {
  const { id } = useParams();
  // console.log("Ids : ", id);

  const { data: allCourseData } = Queries.useGetAllCourses();
  const { data: Course } = Queries.useGetSingleCourse(id);
  const singleCourse = Course?.data;
  const { data: ratingSummary } = Queries.useGetTestimonialRatingSummary(singleCourse?._id || "69259b3b0eae08a2ef76d404");

  const { data: courseCurriculum } = Queries.useGetCourseCurriculum(id);

  const AllCourses = allCourseData?.data?.course_data || [];
  const AllCourseCurriculum =
    courseCurriculum?.data?.course_curriculum_data || [];
  const ratingData = ratingSummary?.data;

  // console.log("singleCourse -->", singleCourse);
  // console.log("AllCourses", AllCourses);
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
                            {/* <li className="instructor">
                              <i className="icon-58"></i>By Edward Norton
                            </li> */}

                            <li className="category">
                              <i className="icon-59"></i>
                              <a>{singleCourse?.courseCategoryId?.name}</a>
                            </li>

                            <li className="rating">
                              <div className="edublink-course-review-wrapper">
                                <Rate
                                  allowHalf
                                  defaultValue={ratingData?.averageRating || 0}
                                  disabled
                                  style={{ fontSize: '14px', color: '#FFB606' }}
                                />
                                <span>({ratingData?.totalRated || 0} Reviews)</span>
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
                      backgroundImage: `url(${singleCourse?.image})`,
                    }}
                  >
                    <div className="edublink-course-video-preview-area">
                      <a className="edublink-course-video-popup">
                        <i className="icon-18"></i>
                      </a>
                    </div>

                    {/* Rating Overlay */}
                    <div className="course-rating-overlay absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg flex items-center gap-2">
                      <Rate
                        allowHalf
                        defaultValue={ratingData?.averageRating || 0}
                        disabled
                        style={{ fontSize: '14px', color: '#FFB606' }}
                      />
                      <span className="text-sm font-medium">
                        {ratingData?.averageRating?.toFixed(1) || "0"} ({ratingData?.totalRated || 0} reviews)
                      </span>
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
                      id="tab-faq-input"
                      value="faq"
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

                      <li className="course-nav course-nav-tab-faq">
                        <label htmlFor="tab-faq-input">FAQ</label>
                      </li>

                      <li className="course-nav course-nav-tab-reviews">
                        <label htmlFor="tab-reviews-input">Reviews</label>
                      </li>
                    </ul>

                    <div className="course-tab-panels">
                      {/* ======================= Overview ========================== */}
                      <CourseOverviewSection desc={singleCourse?.description} />

                      {/* ======================= CURRICULUM ========================== */}
                      <CourseCurriculumSection />
                      {/* ======================= FAQ ========================== */}
                      <CourseFaqSection />
                      {/* ==================== REVIEWS TAB ==================== */}
                      <CourseReviewSection courseId={singleCourse?._id} />
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
                  {AllCourses?.slice(0, 3)?.map((course) => (
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
