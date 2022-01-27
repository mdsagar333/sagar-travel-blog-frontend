import React, { useState, useEffect } from "react";
import Loading from "../../Shared/Loading";

const AllExperiences = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogLoading, setBlogLoading] = useState(true);

  const handleDelete = (id) => {
    console.log(id);
    const url = `https://gentle-retreat-89471.herokuapp.com/api/v1/blogs/${id}`;
    // const url = `http://127.0.0.1:5000/api/v1/blogs/${id}`;
    setBlogLoading(true);
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogLoading(false);
      });
  };

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

  return (
    <div>
      <h1 className="text-center my-4">All Experiences</h1>
      {blogLoading ? (
        <Loading />
      ) : (
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
                  <button onClick={() => handleDelete(blog._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllExperiences;
