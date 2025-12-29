import React from "react";
import type { BlogCardProps } from "../../Types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Constants";

const LatestBlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  blog.mainImage =
    "https://demo.edublink.co/wp-content/uploads/2023/03/course-45-590x430.jpg";
  blog.coverImage =
    "https://demo.edublink.co/wp-content/uploads/2023/11/course-93-590x430.jpg";

  return (
    <div
      className="eb-post-one-single-grid edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 eb-masonry-blog"
      data-aos="fade-up"
      data-aos-duration={1200}
      //   data-aos-delay={blog.aosDelay}
    >
      <div className="edu-blog blog-style-2">
        <div className="inner">
          <div className="thumbnail">
            <Link to={""}>
              <img
                decoding="async"
                src={blog.mainImage || blog.coverImage}
                alt={blog.title}
              />
            </Link>
          </div>
          <div className="content position-top">
            <div className="read-more-btn">
              <Link
                to={`${ROUTES.BLOG.DETAILS.replace(":id", blog?._id)}`}
                className="btn-icon-round"
              >
                <i className="icon-4" />
              </Link>
            </div>
            <div className="category-wrap">
              <Link to={""}>{blog.category}</Link>
            </div>
            <h5 className="title">
              <Link to={""}>{blog.title}</Link>
            </h5>
            <ul className="blog-meta">
              <li>
                <i className="icon-27" />
                {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </li>
              {/* <li>
                <i className="icon-28" /> {blog.comments}
              </li> */}
            </ul>
            <p>{blog.subTitle || blog.content?.slice(0, 80).concat("...")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogCard;
