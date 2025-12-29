import React from "react";

const CourseReviewSection = () => {
  return (
    <div className="course-tab-panel-reviews course-tab-panel" id="tab-reviews">
      <div className="learnpress-course-review" data-id="12817">
        <div className="lp-rating-reviews">
          <div className="course-rate">
            <div className="course-rate__summary">
              <div className="course-rate__summary-value">5</div>

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
                        <svg width="17" height="16" viewBox="0 0 17 16">
                          <g fill="#FFB606" fillRule="nonzero">
                            <path d="M8.5 0l2.43 6.15H17l-5.46 3.69L13.96 16 8.5 12.31 3.03 16l2.43-6.15L0 6.15h6.07z" />
                          </g>
                        </svg>
                      </span>

                      <span className="fas" style={{ width: "100%" }}>
                        <svg width="17" height="16" viewBox="0 0 17 16">
                          <g fill="#FFB606" fillRule="nonzero">
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
              <div className="course-rate__details-row" key={star}>
                <span className="course-rate__details-row-star">
                  {star}
                  <i className="fas" style={{ color: "#ffb60a" }}>
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
                  <span className="rating-count">{star === 5 ? 3 : 0}</span>
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
                  <h4 className="user-name">Steve Martin</h4>

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
                          <svg width="17" height="16" viewBox="0 0 17 16">
                            <g fill="#FFB606">
                              <path
                                d="M8.5 0l2.43 6.15H17l-5.46 3.69L13.96 16 8.5 
                          12.31 3.03 16l2.43-6.15L0 6.15h6.07z"
                              />
                            </g>
                          </svg>
                        </span>
                        <span className="fas" style={{ width: "100%" }}>
                          <svg width="17" height="16" viewBox="0 0 17 16">
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

                <p className="review-title">Excellent Course</p>

                <div className="review-text">
                  <div className="review-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseReviewSection;
