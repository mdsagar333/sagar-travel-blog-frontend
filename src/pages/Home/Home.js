import React, { useEffect, useState } from "react";
import useContextAPI from "../../Hooks/useContextAPI";
import BlogCard from "../Conponent/BlogCard";
import Header from "../Conponent/Header";
import HomeCarousel from "../Conponent/HomeCarousel";
import Paginate from "../Conponent/Paginate";
import TopBlogCard from "../Conponent/TopBlogCard";
import Loading from "../Shared/Loading";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [perPageBlogs, setPerPageBlogs] = useState([]);
  const [topBlogs, setTopBlogs] = useState([]);
  const [isBlogsLoading, setIsBlogLoading] = useState(true);
  const [blogsPerPage, setBlogsPerPage] = useState(10);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsBlogLoading(true);
      const data = await fetch("http://localhost:5000/api/v1/blogs").then(
        (res) => res.json()
      );
      setIsBlogLoading(false);
      setBlogs(data.blogs);
      setPerPageBlogs(data.blogs.slice(0, blogsPerPage));
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchTopSpot = async () => {
      const blogs = await fetch(
        "http://localhost:5000/api/v1/top-rated-blogs"
      ).then((res) => res.json());

      setTopBlogs(blogs.blogs);
    };

    fetchTopSpot();
  }, []);

  const handlePaginate = (num) => {
    console.log(num);
    setPerPageBlogs(blogs.slice((num - 1) * blogsPerPage, num * blogsPerPage));
  };

  console.log(perPageBlogs);
  return (
    <div className="">
      <HomeCarousel />
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-9">
            <h1 className="text-center my-5">Travel Experiences</h1>
            {isBlogsLoading ? (
              <Loading />
            ) : (
              perPageBlogs.map((blog) => <BlogCard key={blog._id} {...blog} />)
            )}
            {blogs.length > 0 && (
              <Paginate
                total={blogs.length}
                perPage={blogsPerPage}
                handlePaginate={handlePaginate}
              />
            )}
          </div>
          <div className="col-12 col-md-3">
            <h4 className="my-5">Top Rated Experiences</h4>
            {topBlogs.map((blog) => (
              <TopBlogCard key={blog._id} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
