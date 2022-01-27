import React from "react";

const ExperienceForm = ({ handleOnchange, handleImage, handleBlogPost }) => {
  return (
    <>
      <div className="container">
        <form onSubmit={(e) => handleBlogPost(e)}>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  name="blogTitle"
                  required
                  onChange={(e) => handleOnchange(e)}
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  name="category"
                  required
                  onChange={(e) => handleOnchange(e)}
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Ratings
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  name="ratings"
                  required
                  min="1"
                  max="5"
                  onChange={(e) => handleOnchange(e)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  name="city"
                  required
                  onChange={(e) => handleOnchange(e)}
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  name="county"
                  required
                  onChange={(e) => handleOnchange(e)}
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  name="date"
                  required
                  onChange={(e) => handleOnchange(e)}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
              required
              onChange={(e) => handleOnchange(e)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Accommodation
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="accommodation"
              required
              onChange={(e) => handleOnchange(e)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Blog Image
            </label>
            <input
              type="file"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              name="blogImage"
              onChange={(e) => handleImage(e)}
            />
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Author
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  name="blogAuthor"
                  required
                  onChange={(e) => handleOnchange(e)}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Author Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="authorImage"
                  placeholder=""
                  name="authorImg"
                  onChange={(e) => handleImage(e)}
                />
              </div>
            </div>
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ExperienceForm;
