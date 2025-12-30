import { ImagePath, ROUTES } from "../../Constants";
import { Queries } from "../../Api";
import LatestBlogCard from "../Blog/LatestBlogCard";
import type { Blog } from "../../Types";
import { BlogCard } from "../Blog";
import { Link } from "react-router-dom";

// const articles = [
//   {
//     image: "blog/blog-01.jpg",
//     category: "Science",
//     title: "Crafting Effective Learning Guide Line",
//     date: "15 Nov, 2023",
//     comments: "Com 0",
//     description: "aConsectetur adipisicing elit, sed do eiusmod tempor inc...",
//     aosDelay: 0,
//   },
//   {
//     image: "blog/blog-02.jpg",
//     category: "Technology",
//     title: "Exploring Learning Landscapes in Academic",
//     date: "14 Nov, 2023",
//     comments: "Com 3",
//     description:
//       "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad...",
//     aosDelay: 100,
//   },
//   {
//     image: "blog/blog-03.jpg",
//     category: "Learning",
//     title: "Voices from the Learning Education Hub",
//     date: "13 Nov, 2023",
//     comments: "Com 0",
//     description:
//       "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore...",
//     aosDelay: 200,
//   },
// ];

const LatestBlogsSection = () => {
  const { data } = Queries.useGetAllBlogs();

  const Blogs = data?.data?.blog_data;

  const featuredBlog = Blogs?.filter((item) => item?.isFeatured == true);

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-178ad6d elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-background-overlay" />
      <div className="elementor-container elementor-column-gap-extended">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5e12c72"
          data-id="5e12c72"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-d03b080 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image"
              data-aos="zoom-in"
              data-aos-duration={1200}
            >
              <div className="elementor-widget-container">
                <img
                  loading="lazy"
                  decoding="async"
                  width={186}
                  height={186}
                  src={`${ImagePath}shapes/shape-4.png`}
                  className="attachment-full size-full wp-image-2632"
                  alt=""
                  sizes="(max-width: 186px) 100vw, 186px"
                />
              </div>
            </div>

            <div
              className="elementor-element elementor-element-98e3e6f elementor-widget elementor-widget-edublink-heading"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <div className="elementor-widget-container">
                <div className="edublink-section-heading">
                  <span className="pre-heading">LATEST Blogs</span>
                  <h3 className="heading">Read New Blogs At HK-DigiSkill</h3>
                  <div className="title-shape">
                    <i className="icon-19" />
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-fe4ca5a elementor-widget elementor-widget-edublink-post">
              <div className="elementor-widget-container">
                <div>
                  <div className="grid grid-cols-1! sm:grid-cols-2! md:grid-cols-3! gap-9! ">
                    {/* eb-blog-post-wrapper  eb-post-grid edublink-row eb-masonry-grid-wrapper */}
                    {featuredBlog?.slice(0, 3)?.map((blog: Blog) => (
                      <BlogCard key={blog._id} blog={blog} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-555c286 elementor-widget elementor-widget-edublink-button"
              data-id="555c286"
              data-element_type="widget"
              data-widget_type="edublink-button.default"
            >
              <div className="elementor-widget-container">
                <div className="edublink-button-widget-wrapper">
                  <Link
                    className="edublink-button-item edublink-button-style-default edublink-button-size-custom edublink-button-icon-position-after default-style"
                    to={ROUTES.BLOG.BASE}
                  >
                    Browse more Blogs
                    <i className="icon-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogsSection;
