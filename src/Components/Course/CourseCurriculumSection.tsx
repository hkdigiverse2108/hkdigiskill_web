import { useState } from "react";
import { Queries } from "../../Api";
import type { CourseLesson } from "../../Types";

interface CourseCurriculumSectionProps {
  lessons?: CourseLesson[];
}

const CourseLessonItem = ({ lesson }: { lesson: CourseLesson }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Fetch curriculum only when the item is expanded
  const { data: curriculumData, isLoading } = Queries.useGetCurriculumByLesson(
    lesson._id,
    { enabled: isOpen },
  );

  const curriculums = curriculumData?.data?.course_curriculum_data || [];

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li
        className={`section ${!isOpen ? "closed" : ""}`}
        id="section-basic-introduction-3"
        data-id="basic-introduction-3"
        data-section-id="3"
      >
        <div
          className="section-header"
          onClick={toggleSection}
          style={{ cursor: "pointer" }}
        >
          <div className="section-left">
            <h5 className="section-title">{lesson?.title}</h5>
            <span className="section-toggle">
              <i className={`fas fa-caret-${isOpen ? "up" : "down"}`}></i>
            </span>
          </div>
        </div>

        <ul className="section-content">
          {isLoading ? (
            <li className="course-item" style={{ padding: "10px 20px" }}>
              Loading curriculum...
            </li>
          ) : curriculums.length > 0 ? (
            curriculums.map((curriculum) => (
              <>
                {/* <li
                  key={curriculum._id}
                  className="course-item"
                  style={{
                    padding: "15px 20px",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <div className="curriculum-info">
                    <h6 style={{ marginBottom: "5px", fontSize: "15px" }}>
                      {curriculum.title}
                    </h6>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        marginBottom: "8px",
                      }}
                    >
                      {curriculum.description}
                    </p>

                    <div
                      className="course-item-meta"
                      style={{
                        display: "flex",
                        gap: "15px",
                        alignItems: "center",
                      }}
                    >
                      {curriculum.duration && (
                        <span className="item-meta duration">
                          <i
                            className="icon-61"
                            style={{ marginRight: "5px" }}
                          ></i>
                          {curriculum.duration}
                        </span>
                      )}

                      {curriculum.videoLink && (
                        <a
                          href={curriculum.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="item-meta video-link"
                          style={{ color: "#2B6BE9" }}
                        >
                          <i
                            className="icon-62"
                            style={{ marginRight: "5px" }}
                          ></i>
                          Watch Video
                        </a>
                      )}
                    </div>
                  </div>
                </li> */}

                <li
                  className={`course-item course-item-lp_lesson course-item-12783 ${curriculum.curriculumLock ? "item-locked" : "item-preview has-status"}`}
                  data-id="12783"
                >
                  <a className="section-item-link">
                    <span className="item-name"> {curriculum.title}</span>
                    <div className="course-item-meta">
                      {curriculum.curriculumLock && (
                        <>
                          <span className="item-meta duration">
                            {curriculum.duration}
                          </span>
                        </>
                      )}

                      <span
                        className={
                          curriculum.curriculumLock
                            ? "item-meta course-item-status"
                            : "item-meta course-item-preview"
                        }
                        data-preview={
                          curriculum.curriculumLock ? "Unread" : "Preview"
                        }
                      ></span>
                    </div>
                  </a>
                </li>
              </>
            ))
          ) : (
            <li className="course-item" style={{ padding: "10px 20px" }}>
              No curriculum details found for this lesson.
            </li>
          )}
        </ul>
      </li>
    </>
  );
};

const CourseCurriculumSection = ({
  lessons = [],
}: CourseCurriculumSectionProps) => {
  if (!lessons || lessons.length === 0) {
    return (
      <div
        className="course-tab-panel-curriculum course-tab-panel"
        id="tab-curriculum"
      >
        <div className="course-curriculum" id="learn-press-course-curriculum">
          <p className="no-curriculum-msg">No lessons found for this course.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="course-tab-panel-curriculum course-tab-panel"
      id="tab-curriculum"
    >
      <div className="course-curriculum" id="learn-press-course-curriculum">
        <div className="curriculum-scrollable">
          <ul className="curriculum-sections">
            {lessons.map((lesson) => (
              <CourseLessonItem key={lesson._id} lesson={lesson} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculumSection;
