import React, { useState, useEffect } from "react";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Loading from "../../Shared/Loading";

const AllExperiences = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogLoading, setBlogLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [actionId, setActionId] = useState();
  const [isNeededUpdate, setIsNeededUpdate] = useState(0);

  const onOpenModal = (id) => {
    setActionId(id);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const handleDelete = () => {
    const url = `https://gentle-retreat-89471.herokuapp.com/api/v1/blogs/${actionId}`;
    // const url = `http://127.0.0.1:5000/api/v1/blogs/${actionId}`;
    setBlogLoading(true);
    setOpen(false);
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .finally(() => {
        setBlogLoading(false);
        setIsNeededUpdate(isNeededUpdate + 1);
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
  }, [isNeededUpdate]);

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
                  <button onClick={() => onOpenModal(blog._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Modal open={open} onClose={onCloseModal} center>
        <div className="moadl_bg px-4 pt-4">
          <h2 className="mb-3">Are you sure?</h2>
          <button className="btn btn-outline-primary" onClick={handleDelete}>
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AllExperiences;
