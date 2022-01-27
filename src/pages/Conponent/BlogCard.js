import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
  _id,
  blogTitle,
  blogImage,
  description,
  date,
  blogAuthor,
}) => {
  return (
    <div className="card mb-5">
      <img src={blogImage} className="card-img-top" alt={blogTitle} />

      <div className="card-body p-5">
        <Link
          className="card-title h3 text-decoration-none text-dark"
          to={`blogs/${_id}`}
        >
          {blogTitle}
        </Link>
        <p className="small text-muted">
          {date} | {blogAuthor}
        </p>
        <p className="card-text">{description.substr(0, 200)}...</p>
        <Link
          className="text-decoration-none text-primary fw-bold text-uppercase"
          to={`blogs/${_id}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
