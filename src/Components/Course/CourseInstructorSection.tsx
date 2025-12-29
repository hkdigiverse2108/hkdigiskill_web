import React from "react";

const CourseInstructorSection = () => {
  return (
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
            <a>
              <span>
                <span className="instructor-display-name">Edward Norton</span>
              </span>
            </a>
          </div>

          <div className="edublink-author-bio-designation">
            <span>Design Expert</span>
          </div>

          <div className="edublink-author-bio-details">
            <p>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt
              labore et dolore magna aliqua enim minim veniam quis nostrud
              exercitation ulla mco laboris nisi ut aliquip ex ea commodo
              consequat. duis aute irure dolor in reprehenderit in voluptate.
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
  );
};

export default CourseInstructorSection;
