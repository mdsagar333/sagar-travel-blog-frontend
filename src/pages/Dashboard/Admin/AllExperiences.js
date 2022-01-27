import React, { useState, useEffect } from "react";

const AllExperiences = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogLoading, setBlogLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await fetch(
        "https://gentle-retreat-89471.herokuapp.com/api/v1/blogs"
      ).then((res) => res.json());
      setAllBlogs(blogs.blogs);
      setBlogLoading(false);
    };

    fetchBlogs();
  }, []);

  console.log(allBlogs);
  return (
    <div>
      <h1 className="text-center my-4">All Experiences</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {allBlogs.map((blog, index) => (
            <tr key={blog._id}>
              <th scope="row">{index + 1}</th>
              <td>{blog.blogTitle}</td>
              <td>{blog.date}</td>
              <td>
                <button>update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllExperiences;
