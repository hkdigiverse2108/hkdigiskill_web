import { BreadCrumb } from "../../Components/Common";
import { Queries } from "../../Api";
import { CourseCard } from "../../Components/Course";
import { useState } from "react";

const Course = () => {
  const LIMIT = 3;

  const [page, setPage] = useState(1);

  const { data } = Queries.useGetAllCourses(
    { page, limit: LIMIT }
    // { keepPreviousData: true }
  );

  console.log("page", page);

  const Courses = data?.data?.course_data || [];
  const totalData = data?.data?.totalData || 0;
  const totalPages = Math.ceil(totalData / LIMIT);

  const start = (page - 1) * LIMIT + 1;
  const end = Math.min(page * LIMIT, totalData);

  return (
    <div>
      <section>
        <BreadCrumb title="Course" />
      </section>
      <div id="content" className="site-content my-50! container-p">
        <div className="site-content-inner edublink-container">
          <div className="edublink-main-content-inner">
            <div className="edublink-course-archive-top-bar-wrapper">
              <div className="edublink-course-archive-top-bar edublink-row">
                <div className="edublink-col-md-6">
                  <span className="edublink-course-archive-index-count">
                    Showing{" "}
                    <span>
                      {start}-{end}
                    </span>{" "}
                    Of <span>{totalData}</span> Results
                  </span>
                </div>
              </div>
            </div>

            {/* COURSES GRID */}

            <div className="grid grid-cols-1! sm:grid-cols-2! md:grid-cols-3! gap-9! ">
              {Courses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>

            <nav className="edublink-pagination-wrapper">
              <ul className="page-number">
                <li className={page === 1 ? "opacity-30" : ""}>
                  <a
                    className="page-numbers"
                    onClick={() => page !== 1 && setPage((p) => p - 1)}
                  >
                    {/* ‹ */}
                    <span className="edublink-pagination-icon icon-west "></span>
                  </a>
                </li>

                {/* PAGE NUMBERS */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (p) => (
                    <li key={p} className={p === page ? "active" : ""}>
                      <a
                        className={`page-numbers ${
                          p === page ? "current" : ""
                        }`}
                        onClick={() => setPage(p)}
                      >
                        {p}
                      </a>
                    </li>
                  )
                )}

                <li className={page === totalPages ? "opacity-30!" : ""}>
                  <a
                    className="page-numbers"
                    title="next"
                    onClick={() => page !== totalPages && setPage((p) => p + 1)}
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
