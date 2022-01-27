import React, { useState } from "react";
import axios from "axios";
import ExperienceForm from "../Component/ExperienceForm";
import { async } from "@firebase/util";
import useContextAPI from "../../../Hooks/useContextAPI";

const AddExperience = () => {
  const { user } = useContextAPI();
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
    let formData = new FormData();
    for (const i in blogData) {
      formData.append(i, blogData[i]);
    }
    formData.append("uid", user.uid);
    const post = await axios.post(
      "https://gentle-retreat-89471.herokuapp.com/api/v1/blogs",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(post);
  };
  return (
    <div>
      <h1 className="text-center my-4">Create A New Experience</h1>
      <ExperienceForm
        handleOnchange={handleOnchange}
        handleImage={handleImage}
        handleBlogPost={handleBlogPost}
      />
    </div>
  );
};

export default AddExperience;
