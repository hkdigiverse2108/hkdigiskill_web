import { BreadCrumb } from "../../Components/Common";
import { Queries } from "../../Api";
import { BlogCard } from "../../Components/Blog";

//  const posts = [
//   {
//     id: "post-15429",
//     url: "",
//     image:
//       "https://demo.edublink.co/wp-content/uploads/2023/03/course-45-590x430.jpg",
//     alt: "course-45",
//     date: "08 Nov, 2023",
//     category: {
//       name: "Learning",
//       url: "",
//     },
//     title: "Connecting the Dots in Education with Learning Nexus",
//     excerpt:
//       "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt...",
//     style: { left: "0px", top: "0px" },
//   },

//   {
//     id: "post-19306",
//     url: "",
//     image:
//       "https://demo.edublink.co/wp-content/uploads/2023/03/course-18-590x430.jpg",
//     alt: "course-18",
//     date: "07 Nov, 2023",
//     category: {
//       name: "Nutrition",
//       url: "",
//     },
//     title: "Essential Kitchen Skills for Aspiring Chefs",
//     excerpt:
//       "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt...",
//     style: { left: "400px", top: "0px" },
//   },

//   {
//     id: "post-19305",
//     url: "",
//     image:
//       "https://demo.edublink.co/wp-content/uploads/2023/03/course-19-590x430.jpg",
//     alt: "course-19",
//     date: "07 Nov, 2023",
//     category: {
//       name: "Nutrition",
//       url: "",
//     },
//     title: "Your Passport to Home Cooking Mastery",
//     excerpt:
//       "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt...",
//     style: { left: "0px", top: "509.7px" },
//   },

//   {
//     id: "post-19304",
//     url: "",
//     image:
//       "https://demo.edublink.co/wp-content/uploads/2023/03/course-17-590x430.jpg",
//     alt: "course-17",
//     date: "07 Nov, 2023",
//     category: {
//       name: "Nutrition",
//       url: "",
//     },
//     title: "A Kitchen Training Blog for Home Cooks",
//     excerpt:
//       "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt...",
//     style: { left: "400px", top: "509.7px" },
//   },

//   {
//     id: "post-15583",
//     url: "",
//     image:
//       "https://demo.edublink.co/wp-content/uploads/2023/11/course-91-590x430.jpg",
//     alt: "course-91",
//     date: "07 Nov, 2023",
//     category: {
//       name: "Nutrition",
//       url: "",
//     },
//     title: "Discover the Power of Nutrient-Rich Foods",
//     excerpt:
//       "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt...",
//     style: { left: "0px", top: "1019.4px" },
//   },

//   {
//     id: "post-15577",
//     url: "x",
//     image:
//       "https://demo.edublink.co/wp-content/uploads/2023/11/course-93-590x430.jpg",
//     alt: "course-93",
//     date: "07 Nov, 2023",
//     category: {
//       name: "Nutrition",
//       url: "",
//     },
//     title: "Boost Your Well-being Through Smart Food Choices",
//     excerpt:
//       "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt...",
//     style: { left: "400px", top: "1019.4px" },
//   },
// ];

const Blog = () => {
  const { data } = Queries.useGetAllBlogs();

  const Blogs = data?.data?.blog_data;

  const latestBlogs = Blogs?.slice(0, 3);

  return (
    <div>
      <section>
        <BreadCrumb title="Blog" />
      </section>

      <section className="my-50!">
        <div className="site-content-inner edublink-container">
          <div className="edublink-main-content-inner edublink-row">
            <div id="primary" className="content-area edublink-col-lg-8">
              <main id="main" className="site-main">
                <header>
                  <h1 className="page-title screen-reader-text">Blog</h1>
                </header>
                <div
                  className="edublink-row edublink-blog-post-archive-style-3 eb-masonry-grid-wrapper"
                  style={{ position: "relative" }}
                >
                  {Blogs?.map((blog) => (
                    <BlogCard
                      key={blog._id}
                      blog={blog}
                      // style={{
                      //   left: index % 2 === 0 ? "0px" : "400px",
                      //   top: `${Math.floor(index / 2) * 510}px`,
                      // }}
                    />
                  ))}
                </div>

                {/* === PAGINATION === */}
                <nav className="edublink-pagination-wrapper">
                  <ul className="page-number">
                    <li>
                      <a className="page-numbers" title="previous">
                        <span className="edublink-pagination-icon icon-west" />
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers">1</a>
                    </li>
                    <li className="active">
                      <span className="page-numbers current">2</span>
                    </li>
                    <li>
                      <a className="page-numbers">3</a>
                    </li>
                    <li>
                      <a className="page-numbers">4</a>
                    </li>
                    <li>
                      <a className="page-numbers" title="next">
                        <span className="edublink-pagination-icon icon-east" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </main>
            </div>

            {/* === SIDEBAR === */}
            <aside
              id="secondary"
              className="widget-area eb-sidebar-widget edublink-col-lg-4"
            >
              <div className="widget-area-wrapper">
                {/* SEARCH */}
                <section id="search-2" className="widget widget_search">
                  <h2 className="widget-title">Search</h2>
                  <div className="edublink-search-box">
                    <form
                      className="search-form"
                      action="https://demo.edublink.co/"
                      method="get"
                    >
                      <input
                        type="search"
                        name="s"
                        placeholder="Search"
                        defaultValue=""
                        required
                      />
                      <button type="submit" className="search-button">
                        <i className="icon-2" />
                      </button>
                    </form>
                  </div>
                </section>

                {/* LATEST POSTS */}
                {/* <section
                  id="edublinkcore_recent_posts_widget-3"
                  className="widget widget_edublinkcore_recent_posts_widget"
                >
                  <h2 className="widget-title">Latest Post</h2>

                  <div className="widget-posts recent-post-widget edublink-recent-post-widget">
                    <div className="edublink-recent-post-each-item">
                      <div className="edublink-post-widget-thumb">
                        <a >
                          <img
                            src="https://demo.edublink.co/wp-content/uploads/2023/11/course-79-300x200.jpg"
                            alt="Thumb"
                          />
                        </a>
                      </div>

                      <div className="media-body">
                        <h5 className="entry-title">
                          <a>
                            Crafting Effective Learning Guide Line
                          </a>
                        </h5>
                        <div className="post-meta">
                          <span className="post-icon">
                            <i className="icon-27" />
                          </span>
                          <span className="post-meta-date">15 Nov, 2023</span>
                        </div>
                      </div>
                    </div>

                    <div className="edublink-recent-post-each-item">
                      <div className="edublink-post-widget-thumb">
                        <a >
                          <img
                            src="https://demo.edublink.co/wp-content/uploads/2023/03/course-09-300x200.jpg"
                            alt="Thumb"
                          />
                        </a>
                      </div>

                      <div className="media-body">
                        <h5 className="entry-title">
                          <a >
                            Exploring Learning Landscapes in Academic
                          </a>
                        </h5>
                        <div className="post-meta">
                          <span className="post-icon">
                            <i className="icon-27" />
                          </span>
                          <span className="post-meta-date">14 Nov, 2023</span>
                        </div>
                      </div>
                    </div>

                    <div className="edublink-recent-post-each-item">
                      <div className="edublink-post-widget-thumb">
                        <a >
                          <img
                            src="https://demo.edublink.co/wp-content/uploads/2023/03/course-07-300x200.jpg"
                            alt="Thumb"
                          />
                        </a>
                      </div>

                      <div className="media-body">
                        <h5 className="entry-title">
                          <a >
                            Voices from the Learning Education Hub
                          </a>
                        </h5>
                        <div className="post-meta">
                          <span className="post-icon">
                            <i className="icon-27" />
                          </span>
                          <span className="post-meta-date">13 Nov, 2023</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section> */}
                <section
                  id="edublinkcore_recent_posts_widget-3"
                  className="widget widget_edublinkcore_recent_posts_widget"
                >
                  <h2 className="widget-title">Latest Post</h2>

                  <div className="widget-posts recent-post-widget edublink-recent-post-widget">
                    {latestBlogs?.map((blog) => (
                      <div
                        key={blog._id}
                        className="edublink-recent-post-each-item"
                      >
                        <div className="edublink-post-widget-thumb">
                          <a>
                            <img
                              src={
                                "https://demo.edublink.co/wp-content/uploads/2023/03/course-45-590x430.jpg"
                              }
                              alt={blog.title}
                            />
                          </a>
                        </div>

                        <div className="media-body">
                          <h5 className="entry-title">
                            <a>{blog.title}</a>
                          </h5>

                          <div className="post-meta">
                            <span className="post-icon">
                              <i className="icon-27" />
                            </span>
                            <span className="post-meta-date">
                              {new Date(blog.createdAt).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* CATEGORIES */}
                <section id="categories-2" className="widget widget_categories">
                  <h2 className="widget-title">Categories</h2>

                  <ul>
                    <li className="cat-item cat-item-72">
                      <a>Child Development</a> (2)
                    </li>
                    <li className="cat-item cat-item-77">
                      <a>Computer Engineering</a> (3)
                    </li>
                    <li className="cat-item cat-item-70">
                      <a>Learning</a> (11)
                    </li>
                    <li className="cat-item cat-item-80">
                      <a>Nutrition</a> (11)
                    </li>
                    <li className="cat-item cat-item-66">
                      <a>Science</a> (15)
                    </li>
                    <li className="cat-item cat-item-67">
                      <a>Technology</a> (6)
                    </li>
                    <li className="cat-item cat-item-76">
                      <a>Web Development</a> (4)
                    </li>
                  </ul>
                </section>

                {/* AD IMAGE */}
                <section
                  id="media_image-4"
                  className="widget widget_media_image"
                >
                  <img
                    width="290"
                    height="370"
                    src="https://demo.edublink.co/wp-content/uploads/2023/11/sidebar-ad.png"
                    className="image wp-image-17506 attachment-full size-full"
                    alt=""
                    style={{ maxWidth: "100%", height: "auto" }}
                    decoding="async"
                    srcSet="
                  https://demo.edublink.co/wp-content/uploads/2023/11/sidebar-ad.png 290w,
                  https://demo.edublink.co/wp-content/uploads/2023/11/sidebar-ad-235x300.png 235w
                "
                    sizes="(max-width: 290px) 100vw, 290px"
                  />
                </section>

                {/* TAG CLOUD */}
                <section id="tag_cloud-2" className="widget widget_tag_cloud">
                  <h2 className="widget-title">Tags</h2>

                  <div className="tagcloud">
                    <a
                      className="tag-cloud-link tag-link-74 tag-link-position-1"
                      style={{ fontSize: "17.333333333333pt" }}
                      aria-label="Child Education (9 items)"
                    >
                      Child Education
                    </a>

                    <a
                      className="tag-cloud-link tag-link-75 tag-link-position-2"
                      style={{ fontSize: "8pt" }}
                      aria-label="Classroom (3 items)"
                    >
                      Classroom
                    </a>

                    <a
                      className="tag-cloud-link tag-link-68 tag-link-position-3"
                      style={{ fontSize: "18.266666666667pt" }}
                      aria-label="Design (10 items)"
                    >
                      Design
                    </a>

                    <a
                      className="tag-cloud-link tag-link-69 tag-link-position-4"
                      style={{ fontSize: "17.333333333333pt" }}
                      aria-label="Development (9 items)"
                    >
                      Development
                    </a>

                    <a
                      className="tag-cloud-link tag-link-78 tag-link-position-5"
                      style={{ fontSize: "22pt" }}
                      aria-label="eLearning (15 items)"
                    >
                      eLearning
                    </a>

                    <a
                      className="tag-cloud-link tag-link-73 tag-link-position-6"
                      style={{ fontSize: "13.833333333333pt" }}
                      aria-label="Future (6 items)"
                    >
                      Future
                    </a>

                    <a
                      className="tag-cloud-link tag-link-71 tag-link-position-7"
                      style={{ fontSize: "15pt" }}
                      aria-label="Higher Study (7 items)"
                    >
                      Higher Study
                    </a>

                    <a
                      className="tag-cloud-link tag-link-79 tag-link-position-8"
                      style={{ fontSize: "12.2pt" }}
                      aria-label="Software (5 items)"
                    >
                      Software
                    </a>
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
