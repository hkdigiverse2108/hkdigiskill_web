import { Link, useParams } from "react-router-dom";
import { Queries } from "../../Api";
import { BlogCard, LatestBlogCard } from "../../Components/Blog";
import { BreadCrumb } from "../../Components/Common";
import { formatDateTime } from "../../Utils";
import { ROUTES } from "../../Constants";

const BlogDetails = () => {
  const { id } = useParams();

  const { data: blogApi } = Queries.useGetSingleBlog(id);
  const { data: allBlogApi } = Queries.useGetAllBlogs();

  const SingleBlog = blogApi?.data;
  const Blogs = allBlogApi?.data?.blog_data;

  const latestBlogs = Blogs?.slice(0, 3);

  const paginationBlog = Blogs?.filter((blog) => blog?._id !== id).slice(0, 2);

  console.log("SingleBlog-->", SingleBlog, Blogs, paginationBlog);

  return (
    <div>
      <div>
        <BreadCrumb title="Blog Details" />
      </div>
      <div id="content" className="site-content container my-50! w-full!  ">
        <div className="">
          <div id="primary" className="content-area  w-full!">
            <main id="main" className="site-main eb-post-details-page ">
              <article className="edublink-single-post edu-blog post-15416 post type-post status-publish format-standard has-post-thumbnail hentry category-technology tag-design tag-development">
                <div className="blog-details-top">
                  <span className="edublink-post-cat">
                    <a>{SingleBlog?.category}</a>
                  </span>
                  <h3 className="post-main-title">
                    {/* Exploring Learning Landscapes in Academic */}
                    {SingleBlog?.title}
                  </h3>
                  <ul className="blog-meta">
                    <li>
                      <i className="icon-27"></i>{" "}
                      {formatDateTime(SingleBlog?.updatedAt)}
                    </li>
                    <li>
                      <i className="icon-58"></i>
                      {SingleBlog?.author}
                    </li>
                  </ul>
                </div>

                <div className="post-thumbnail">
                  <img
                    width="1200"
                    height="800"
                    src={SingleBlog?.mainImage}
                    // src="https://demo.edublink.co/wp-content/uploads/2023/03/course-09.jpg"
                    className="attachment-full size-full wp-post-image"
                    alt=""
                  />
                </div>

                <div className="entry-content">
                  <div
                    data-elementor-type="wp-post"
                    data-elementor-id="15416"
                    className="elementor elementor-15416"
                  >
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-7c9c6c8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="7c9c6c8"
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-75a82b0"
                          data-id="75a82b0"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-9a53172 elementor-widget elementor-widget-text-editor"
                              data-id="9a53172"
                            >
                              {SingleBlog?.quote && (
                                <blockquote>
                                  <p>
                                    {/* Lorem ipsum dolor amet con sectur
                                    elitadicing elit sed do usmod tempor
                                    uincididunt enim minim veniam nostrud. */}
                                    {SingleBlog?.quote}
                                  </p>
                                  <p>
                                    <cite>
                                      {/* Simon Baker */}
                                      {SingleBlog?.author}
                                      <br />
                                    </cite>
                                  </p>
                                </blockquote>
                              )}

                              <div
                                className="elementor-widget-container"
                                dangerouslySetInnerHTML={{
                                  __html: SingleBlog?.content || "",
                                }}
                              >
                                {/* <p>
                                  Consectetur adipisicing elit, sed do eiusmod
                                  tempor inc idid unt ut labore et dolore magna
                                  aliqua enim ad minim veniam, quis nostrud
                                  exerec tation ullamco laboris nis aliquip
                                  commodo consequat. Duis aute irure dolor in
                                  reprehenderit in voluptate velit esse cillum
                                  dolore eu fugiat nulla pariatur enim ipsam
                                  voluptatem quia voluptas sit aspernatur aut
                                  odit aut fugit sed quia consequuntur magni
                                  dolores.
                                </p>
                                <p>
                                  Excepteur sint occaecat cupidatat non proident
                                  sunt in culpa qui officia deserunt mollit anim
                                  id est laborum. Sed ut perspiciatis unde omnis
                                  iste natus error sit voluptatem accusantium
                                  doloremque laudantium totam rem aperiam.
                                </p> */}
                              </div>
                            </div>

                            {/* <div
                              className="elementor-element elementor-element-5ae5956 elementor-widget elementor-widget-text-editor"
                              data-id="5ae5956"
                            >
                              <div className="elementor-widget-container">
                                <ul className="eb-list-style-2">
                                  <li>Aute irure dolor in reprehenderit.</li>
                                  <li>
                                    Occaecat cupidatat non proident sunt in
                                    culpa.
                                  </li>
                                  <li>Pariatur enim ipsam.</li>
                                </ul>

                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor amet con sectur
                                    elitadicing elit sed do usmod tempor
                                    uincididunt enim minim veniam nostrud.
                                  </p>
                                  <p>
                                    <cite>
                                      Simon Baker
                                      <br />
                                    </cite>
                                  </p>
                                </blockquote>
                              </div>
                            </div> */}

                            {/* <div
                              className="elementor-element elementor-element-ee265a5 elementor-widget elementor-widget-heading"
                              data-id="ee265a5"
                            >
                              <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">
                                  The Complete Camtasia
                                </h3>
                              </div>
                            </div>

                            <div
                              className="elementor-element elementor-element-6b3aa3b elementor-widget elementor-widget-text-editor"
                              data-id="6b3aa3b"
                            >
                              <div className="elementor-widget-container">
                                <p>
                                  Excepteur sint occaecat cupidatat non proident
                                  sunt in culpa qui officia deserunt mollit anim
                                  id est laborum. Sed ut perspiciatis unde omnis
                                  iste natus error sit voluptatem accusantium
                                  doloremque laudantium totam rem aperiam.
                                </p>
                              </div>
                            </div> */}

                            {/* Image 2 Column Section */}
                            {/* <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-ecb5ece elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="ecb5ece"
                            >
                              <div className="elementor-container elementor-column-gap-no">
                                <div
                                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-77b6dce"
                                  data-id="77b6dce"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-92eef61 elementor-widget elementor-widget-image"
                                      data-id="92eef61"
                                    >
                                      <div className="elementor-widget-container">
                                        <img
                                          width="640"
                                          height="427"
                                          src="https://demo.edublink.co/wp-content/uploads/2023/02/course-57-768x512.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3c0287b"
                                  data-id="3c0287b"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-910c947 elementor-widget elementor-widget-image"
                                      data-id="910c947"
                                    >
                                      <div className="elementor-widget-container">
                                        <img
                                          width="640"
                                          height="427"
                                          src="https://demo.edublink.co/wp-content/uploads/2023/01/course-73-768x512.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section> */}

                            {/* <div
                              className="elementor-element elementor-element-9e3ebb8 elementor-widget elementor-widget-text-editor"
                              data-id="9e3ebb8"
                            >
                              <div className="elementor-widget-container">
                                <p>
                                  Consectetur adipisicing elit, sed do eiusmod
                                  tempor inc idid unt ut labore et dolore magna
                                  aliqua enim ad minim veniam, quis nostrud
                                  exerec tation ullamco laboris nis aliquip
                                  commodo consequat. Duis aute irure dolor in
                                  reprehenderit in voluptate velit esse cillum
                                  dolore eu fugiat nulla pariatur enim ipsam
                                  voluptatem quia voluptas sit aspernatur aut
                                  odit aut fugit sed quia consequuntur magni
                                  dolores.
                                </p>
                                <p>
                                  Excepteur sint occaecat cupidatat non proident
                                  sunt in culpa qui officia deserunt mollit anim
                                  id est laborum. Sed ut perspiciatis unde omnis
                                  iste natus error sit voluptatem accusantium
                                  doloremque laudantium totam rem aperiam.
                                </p>
                              </div>
                            </div>

                            <div
                              className="elementor-element elementor-element-b1e96db elementor-widget elementor-widget-heading"
                              data-id="b1e96db"
                            >
                              <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">
                                  Intrinsic Motivation
                                </h3>
                              </div>
                            </div> */}
                            {/* 
                            <div
                              className="elementor-element elementor-element-cbad01c elementor-widget elementor-widget-text-editor"
                              data-id="cbad01c"
                            >
                              <div className="elementor-widget-container">
                                <p>
                                  <span>
                                    Excepteur sint occaecat cupidatat non
                                    proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum. Sed ut
                                    perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium doloremque laudantium
                                    totam rem aperiam.
                                  </span>
                                  <br />
                                </p>
                              </div>
                            </div> */}
                            {/* 
                            <div
                              className="elementor-element elementor-element-771ef81 elementor-widget elementor-widget-text-editor"
                              data-id="771ef81"
                            >
                              <div className="elementor-widget-container">
                                <ul className="eb-list-style-2">
                                  <li>Aute irure dolor in reprehenderit.</li>
                                  <li>
                                    Occaecat cupidatat non proident sunt in
                                    culpa.
                                  </li>
                                  <li>Pariatur enim ipsam.</li>
                                </ul>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Tags, Social Share */}
                  <div className="edublink-tag-social-share-wrapper">
                    <div className="edublink-tag-social-share edublink-row">
                      <div className="edublink-col-md-12 flex! items-start! text-start!">
                        <div className="edublink-single-post-social-share  w-fit!">
                          <span className="post-share-text">Share on: </span>
                          <ul className="edublink-social-share-icons-wrapper">
                            <li className="edublink-social-share-each-icon facebook">
                              <a className="edublink-social-share-link">
                                <i className="icon-facebook"></i>
                              </a>
                            </li>

                            <li className="edublink-social-share-each-icon twitter">
                              <a className="edublink-social-share-link">
                                <i className="icon-twitter"></i>
                              </a>
                            </li>

                            <li className="edublink-social-share-each-icon linkedin">
                              <a className="edublink-social-share-link">
                                <i className="icon-linkedin2"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Post Navigation */}
                  <div className="edublink-post-nav-prev-next edublink-row">
                    {paginationBlog?.map((blog, index) => {
                      return (
                        <Link
                          to={`${ROUTES.BLOG.DETAILS.replace(
                            ":id",
                            blog?._id
                          )}`}
                          className="edublink-col-md-6"
                        >
                          <div
                            className={`edublink-single-post-nav ${
                              index === 0
                                ? " edublink-prev-post"
                                : "edublink-next-post"
                            }`}
                          >
                            <a>
                              {index === 0 && <i className="icon-west"></i>}
                              <span className="post-title">
                                {blog?.title}
                                {/* Voices from the Learning Education Hub */}
                              </span>
                              {index === 1 && <i className="icon-east"></i>}
                            </a>
                          </div>
                        </Link>
                      );
                    })}

                    {/* <div className="edublink-col-md-6">
                      <div className="edublink-single-post-nav edublink-next-post">
                        <a>
                          <span className="post-title">
                            Crafting Effective Learning Guide Line
                          </span>
                          <i className="icon-east"></i>
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>

                <footer className="entry-footer"></footer>
              </article>
            </main>
          </div>

          <aside id="secondary" className="widget-area  ">
            <div className="widget-area-wrapper ">
              {/* Latest Posts */}
              <section
                id="edublinkcore_recent_posts_widget-3"
                className="widget widget_edublinkcore_recent_posts_widget"
              >
                <h2 className="widget-title">Latest Post</h2>

                {/* <div className="widget-posts recent-post-widget edublink-recent-post-widget">
                  {latestBlogs?.map((blog) => (
                    <LatestBlogCard key={blog?._id} blog={blog} />
                  ))}
                </div> */}
                <div
                  className="grid grid-cols-1! sm:grid-cols-2! md:grid-cols-3! gap-9!  "
                  style={{ position: "relative" }}
                >
                  {/* edublink-row edublink-blog-post-archive-style-3 eb-masonry-grid-wrapper */}
                  {latestBlogs?.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                  ))}
                </div>
              </section>

              {/* Categories */}
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
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
