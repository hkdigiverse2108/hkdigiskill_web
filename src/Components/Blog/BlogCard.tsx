import React from "react";
import type { Blog } from "../../Types";

interface BlogCardProps {
  blog: Blog;
  style?: React.CSSProperties;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, style }) => {
  blog.mainImage =
    "https://demo.edublink.co/wp-content/uploads/2023/03/course-45-590x430.jpg";
  blog.coverImage =
    "https://demo.edublink.co/wp-content/uploads/2023/11/course-93-590x430.jpg";
  return (
    <div
      id={blog._id}
      className="edublink-post-one-single-grid edublink-col-lg-6 eb-masonry-item edublink-col-md-6 edublink-col-sm-12 post type-post status-publish format-standard has-post-thumbnail hentry category-nutrition category-science tag-child-education tag-elearning sal-animate"
      data-sal=""
    >
      <div className="edu-blog blog-style-6">
        <div className="inner">
          <div className="thumbnail">
            <a href="">
              <img src={blog.mainImage || blog.coverImage} alt={blog.title} />
            </a>
            <span className="date">
              {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="content position-top">
            <div className="read-more-btn">
              <a className="btn-icon-round" href="">
                <i className="icon-4" />
              </a>
            </div>

            <div className="category-wrap">
              <a href="">{blog.category}</a>
            </div>

            <h5 className="title">
              <a href="">{blog.title}</a>
            </h5>

            <p>{blog.subTitle || blog.content.slice(0, 80).concat("...")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
