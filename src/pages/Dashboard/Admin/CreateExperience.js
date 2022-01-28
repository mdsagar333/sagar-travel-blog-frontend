import React, { useState } from "react";
import axios from "axios";
import useContextAPI from "../../../Hooks/useContextAPI";
import ExperienceForm from "../Component/ExperienceForm";
import Loading from "../../Shared/Loading";

const CreateExperience = () => {
  const { user } = useContextAPI();
  const [isCreating, setIsCreating] = useState(false);
  const [notification, setNotification] = useState("");
  const [blogData, setBlogData] = useState({
    blogTitle: "",
    description: "",
    accommodation: "",
    ratings: 0,
    category: "",
    city: "",
    county: "",
    date: "",
    blogAuthor: "",
    blogImage: "",
    authorImg: "",
  });
  const handleImage = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.files[0] });
  };

  const handleOnchange = (e) => {
    if (e.target.name === "ratings") {
      setBlogData({ ...blogData, [e.target.name]: parseFloat(e.target.value) });
    } else {
      setBlogData({ ...blogData, [e.target.name]: e.target.value });
    }
  };

  const handleBlogPost = async (e) => {
    e.preventDefault();
    console.log("creating blog");
    let formData = new FormData();
    for (const i in blogData) {
      formData.append(i, blogData[i]);
    }
    formData.append("uid", user.uid);
    const url = "https://gentle-retreat-89471.herokuapp.com/api/v1/blogs/admin";
    // const url = "http://127.0.0.1:5000/api/v1/blogs/admin";
    setIsCreating(true);
    const post = await axios.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (post.status === 201) {
      setNotification("Your experience posted successfully.");
    }
    setIsCreating(false);
  };
  return (
    <div className="container">
      <h1 className="text-center my-4">Create Experience</h1>
      {notification.length > 0 && (
        <p className="alert alert-success">{notification}</p>
      )}
      {isCreating ? (
        <Loading />
      ) : (
        <ExperienceForm
          handleOnchange={handleOnchange}
          handleImage={handleImage}
          handleBlogPost={handleBlogPost}
        />
      )}
    </div>
  );
};

export default CreateExperience;
