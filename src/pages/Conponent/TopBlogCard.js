import React from "react";
import { Link } from "react-router-dom";

const TopBlogCard = ({ blogTitle, blogImage, _id }) => {
  return (
    <div className="d-flex mb-4">
      <img src={blogImage} alt={blogTitle} style={{ width: "80px" }} />
      <Link className="ms-2" style={{ fontSize: "14px" }} to={`/blogs/${_id}`}>
        {blogTitle}
      </Link>
    </div>
  );
};

export default TopBlogCard;
