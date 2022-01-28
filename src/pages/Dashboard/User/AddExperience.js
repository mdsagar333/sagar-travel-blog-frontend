import React, { useState } from "react";
import axios from "axios";
import ExperienceForm from "../Component/ExperienceForm";
import { async } from "@firebase/util";
import useContextAPI from "../../../Hooks/useContextAPI";
import Loading from "../../Shared/Loading";

const AddExperience = () => {
  const { user } = useContextAPI();
  const [notification, setNotification] = useState("");
  const [isBlogCreating, setIsBlogCreating] = useState(false);
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
    setNotification("");
    let formData = new FormData();
    for (const i in blogData) {
      formData.append(i, blogData[i]);
    }
    formData.append("uid", user.uid);
    setIsBlogCreating(true);
    const post = await axios.post(
      "https://gentle-retreat-89471.herokuapp.com/api/v1/blogs",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (post.status === 201) {
      setNotification("Your experience created successfully");
    }
    setIsBlogCreating(false);
  };
  return (
    <div>
      <h1 className="text-center my-4">Create A New Experience</h1>
      {notification.length > 0 && (
        <p className="alert alert-success">{notification}</p>
      )}
      {isBlogCreating ? (
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

export default AddExperience;
