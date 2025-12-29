import { Link } from "react-router-dom";
import { ImagePath, ROUTES } from "../../Constants";
import type { CourseCardProps } from "../../Types";

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  let {
    _id,
    // alt,
    // href,
    // category,
    // excerpt,
    // mode,
    // rating,
    // ratingCount,
    // position,

    // totalLesson,
    // classCompleted,
    // courseCategoryId,
    // courseCurriculumIds,
    description,
    duration,
    // enrolledLearners,
    language,
    image = `${ImagePath}/course/course-01/course-01.jpg`,
    // mrpPrice,
    // price,
    name,
    // purchasedCoursesShow,
    satisfactionRate,
    // isUnlocked,
  } = course;
  image = `${ImagePath}/course/course-01/course-01.jpg`;
  // const { name, description } = courseCategoryId;

  return (
    <div className="" data-sal="">
      <div className="edublink-single-course course-style-2">
        <div className="inner">
          <div className="thumbnail">
            <a className="course-thumb">
              <img className="w-100" src={image} alt={image} />
            </a>

            <div className="time-top">
              <span className="duration">
                <i className="icon-61"></i>
                {language}
              </span>
            </div>
          </div>

          <div className="content">
            <span className="course-level">{duration}</span>

            <h6 className="title">
              <span>{name}</span>
            </h6>

            <p>{description}</p>

            {/* Rating Stars */}
            <div className="course-rating">
              <div className="edublink-course-review-wrapper">
                <div
                  className="review-stars-rated"
                  title={`${satisfactionRate} out of 5 stars`}
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

                      <span className="fas">
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
                  ({satisfactionRate}.0/ {satisfactionRate} Ratings)
                </span>
              </div>
            </div>

            <div className="read-more-btn">
              <Link
                to={`${ROUTES.COURSE.DETAILS.replace(":id", _id)}`}
                className="edu-btn btn-small btn-secondary"
              >
                Enroll Now<i className="icon-4"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

// import { Link } from "react-router-dom";
// import { ImagePath } from "../../Constants";

// const CourseCard = () => {
//   return (
//     <div
//       id="post-12782"
//       className="edublink-course-style-1 edublink-course-1-grid-item edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 eb-masonry-item post-12782 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-programming course_tag-development course"
//       data-aos="fade-up"
//       data-aos-duration={1400}
//     >
//       <div className="edublink-single-course course-style-1">
//         <div className="inner">
//           <div className="thumbnail">
//             <Link className="course-thumb" to={""}>
//               <img
//                 decoding="async"
//                 className="w-100"
//                 src={`${ImagePath}course/course-02/course-03.jpg`}
//                 alt="course-12"
//               />
//             </Link>
//             <div className="time-top">
//               <span className="duration">
//                 <i className="icon-61" />
//                 20 hours
//               </span>
//             </div>
//           </div>
//           <div className="content">
//             <span className="course-level">All Levels</span>
//             <h6 className="title">
//               <Link to={""}>
//                 The Complete Guide to Build RESTful API Application
//               </Link>
//             </h6>
//             <div className="course-rating">
//               <div className="edublink-course-review-wrapper">
//                 <div className="review-stars-rated" title="4 out of 5 stars">
//                   <div className="review-star">
//                     <span className="far">
//                       <svg
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                     <span className="fas" style={{ width: "100%" }}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                   </div>
//                   <div className="review-star">
//                     <span className="far">
//                       <svg
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                     <span className="fas" style={{ width: "100%" }}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                   </div>
//                   <div className="review-star">
//                     <span className="far">
//                       <svg
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                     <span className="fas" style={{ width: "100%" }}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                   </div>
//                   <div className="review-star">
//                     <span className="far">
//                       <svg
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                     <span className="fas" style={{ width: "100%" }}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                   </div>
//                   <div className="review-star">
//                     <span className="far">
//                       <svg
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                     <span className="fas" style={{ width: "0%" }}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//                 <span>(4.0/ 2 Ratings)</span>
//               </div>
//             </div>
//             <div className="course-price">
//               <span className="course-item-price">
//                 <span className="free">Free</span>
//               </span>
//             </div>
//             <ul className="course-meta">
//               <li>
//                 <i className="icon-24" />9 Lessons
//               </li>
//               <li>
//                 <i className="icon-25" />
//                 41 Students
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="course-hover-content-wrapper">
//           <div className="wishlist-top-right">
//             <button className="edublink-wishlist-wrapper edublink-lp-non-logged-user" />
//           </div>
//         </div>
//         <div className="course-hover-content">
//           <div className="content">
//             <span className="course-level">All Levels</span>
//             <h6 className="title">
//               <Link to={""}>
//                 The Complete Guide to Build RESTful API Application
//               </Link>
//             </h6>
//             <div className="course-rating">
//               <div className="edublink-course-review-wrapper">
//                 <div className="review-stars-rated" title="4 out of 5 stars">
//                   <div className="review-star">
//                     <span className="far">
//                       <svg
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                     <span className="fas" style={{ width: "100%" }}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                   </div>
//                   <div className="review-star">
//                     <span className="far">
//                       <svg
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                     <span className="fas" style={{ width: "100%" }}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                   </div>
//                   <div className="review-star">
//                     <span className="far">
//                       <svg
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                     <span className="fas" style={{ width: "100%" }}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                   </div>
//                   <div className="review-star">
//                     <span className="far">
//                       <svg
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                     <span className="fas" style={{ width: "100%" }}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                   </div>
//                   <div className="review-star">
//                     <span className="far">
//                       <svg
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                     <span className="fas" style={{ width: "0%" }}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="17px"
//                         height="16px"
//                         viewBox="0 0 17 16"
//                       >
//                         <g
//                           stroke="none"
//                           strokeWidth={1}
//                           fill="none"
//                           fillRule="evenodd"
//                         >
//                           <g fill="#FFB606" fillRule="nonzero">
//                             <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16" />
//                           </g>
//                         </g>
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//                 <span>(4.0/ 2 Ratings)</span>
//               </div>
//             </div>
//             <div className="course-price">
//               <span className="course-item-price">
//                 <span className="free">Free</span>
//               </span>
//             </div>
//             <p>
//               Lorem ipsum dolor sit amet consectur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...
//             </p>
//             <ul className="course-meta">
//               <li>
//                 <i className="icon-24" />9 Lessons
//               </li>
//               <li>
//                 <i className="icon-25" />
//                 41 Students
//               </li>
//             </ul>
//             <Link className="edu-btn btn-secondary btn-small" to={""}>
//               Enroll Now
//               <i className="icon-4" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
