import React, { useState, useEffect } from "react";

const PendingExperiences = () => {
  const [pendingBlogs, setPendingBlogs] = useState([]);
  const [pedingLoading, setPendingLoading] = useState(true);

  useEffect(() => {
    const fetchPending = async () => {
      const pending = await fetch(
        "https://gentle-retreat-89471.herokuapp.com/api/v1/blogs/pending"
      ).then((res) => res.json());
      setPendingBlogs(pending.blogs);
      setPendingLoading(false);
    };

    fetchPending();
  }, []);

  console.log(pendingBlogs);
  return (
    <div className="container">
      <h1 className="text-center my-4">All pending experineces</h1>
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
          {pendingBlogs.map((blog, index) => (
            <tr key={blog._id}>
              <th scope="row">{index + 1}</th>
              <td>{blog.blogTitle}</td>
              <td>{blog.date}</td>
              <td>
                <button>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingExperiences;
