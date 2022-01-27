import React, { useState, useEffect } from "react";
import useContextAPI from "../../../Hooks/useContextAPI";
import Loading from "../../Shared/Loading";

const MyExperiences = () => {
  const { user, isUserLoading } = useContextAPI();
  const [experiences, setExperiences] = useState([]);
  const [expeLoading, setExpeLoading] = useState(true);
  const [isExperienceLoading, setIsExperienceLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async (uid) => {
      const url = `https://gentle-retreat-89471.herokuapp.com/api/v1/posts/${uid}`;
      console.log(url);
      const myPosts = await fetch(url).then((res) => res.json());
      setExperiences(myPosts.blogs);
      setExpeLoading(false);
    };
    if (user.uid) {
      fetchExperience(user.uid);
    }
  }, [user]);

  return (
    <div className="container">
      <h1 className="text-center my-5">My Experiences</h1>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          {expeLoading ? (
            <Loading />
          ) : (
            <tbody>
              {experiences.map((blog, index) => (
                <tr key={blog._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{blog.blogTitle}</td>
                  <td>{blog.date}</td>
                  <td>{blog.isApproved ? "Approved" : "Pending"}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default MyExperiences;
