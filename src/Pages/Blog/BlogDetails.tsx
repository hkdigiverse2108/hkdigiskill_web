import { Link, useParams } from "react-router-dom";
import { Queries } from "../../Api";
import { BlogCard } from "../../Components/Blog";
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

  const calculate = () => {
    const temp = [];
  };

  const allCategories = Blogs?.reduce((acc: any[], blog: any) => {
    const category = blog?.category;
    if (!category) return acc;

    const existing = acc.find((item) => item.category === category);

    if (existing) {
      existing.total += 1;
    } else {
      acc.push({ category, total: 1 });
    }

    return acc;
  }, []);

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
                  <h3 className="post-main-title">{SingleBlog?.title}</h3>
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
                                  <p>{SingleBlog?.quote}</p>
                                  <p>
                                    <cite>
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
                              ></div>
                            </div>
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
                  </div>
                </div>
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

                <div
                  className="grid grid-cols-1! sm:grid-cols-2! md:grid-cols-3! gap-9!  "
                  style={{ position: "relative" }}
                >
                  {latestBlogs?.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                  ))}
                </div>
              </section>

              {/* Categories */}
              <section id="categories-2" className="widget widget_categories">
                <h2 className="widget-title">Categories</h2>
                <ul>
                  {allCategories?.map((item, index) => (
                    <li key={index} className="cat-item cat-item-72">
                      <a>{item?.category}</a> ({item?.total})
                    </li>
                  ))}
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
