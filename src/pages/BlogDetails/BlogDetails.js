import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import useContextAPI from "../../Hooks/useContextAPI";
import Header from "../Conponent/Header";
import Loading from "../Shared/Loading";

const BlogDetails = () => {
  const { userLoading } = useContextAPI();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isBlogLoding, setIsBlogLoading] = useState(true);

  console.log(userLoading);

  useEffect(() => {
    const fetchBlog = async () => {
      setIsBlogLoading(true);
      const url = `https://gentle-retreat-89471.herokuapp.com/api/v1/blogs/${id}`;
      const data = await fetch(url).then((res) => res.json());
      setBlog(data.blog);
      setIsBlogLoading(false);
    };

    fetchBlog();
  }, []);

  if (isBlogLoding) {
    return <Loading />;
  }

  if (userLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-12 col-md-9">
            <img
              src={blog.blogImage}
              alt={blog.blogTitle}
              className="img-fluid mb-4"
            />
            <h2 className="mb-2">{blog.blogTitle}</h2>
            <p>
              <i class="fas fa-map-marker-alt me-2"></i>
              {blog.city}, {blog.county}
            </p>
            <div className="">
              <ReactStars
                count={5}
                value={blog.ratings}
                size={24}
                edit={false}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              ></ReactStars>
              <p className="small text-muted text-capitalize">
                {blog.date} | {blog.category}
              </p>
            </div>
            <h5 className="mb-3">Description:</h5>
            <p>{blog.description}</p>
            <h5 className="mt-4">Accommodation:</h5>
            <p>{blog.accommodation}</p>
          </div>
          <div className="col-12 col-md-3">
            <div>
              <div className=" mb-3">
                <img
                  src={blog.authorImg}
                  alt={blog.blogAuthor}
                  className="author_img"
                />
                <div className="">
                  <small className="text-muted ">Written by</small>
                  <h6 className="mb-2">{blog.blogAuthor}</h6>
                  <p className="small text-muted">Traveller & Photographer</p>
                </div>
              </div>
              <p className="">
                Meh synth Schlitz, tempor duis single-origin of coff ea next
                level ethnic fingerstach fanny high life is origin coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
