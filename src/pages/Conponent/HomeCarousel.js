import React from "react";
import imgOne from "./../../assets/images/1.jpg";
import imgTwo from "./../../assets/images/2.jpg";
import imgThree from "./../../assets/images/3.jpg";

const HomeCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ maxHeight: "80vh" }}>
          <div className="carousel-item active position-relative h-100">
            <img src={imgThree} className="d-block w-100" alt="..." />
            <div className="corousel-item_text">
              <div className="h-100">
                <div className="item_text_wrapper  p-3 ">
                  <h4 className="text-light">
                    “A journey of a thousand miles begins with a single step” –
                    Lao Tzu
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item position-relative h-100">
            <img src={imgTwo} className="d-block w-100" alt="..." />
            <div className="corousel-item_text">
              <div className="h-100">
                <div className="item_text_wrapper p-3">
                  <h4 className="text-light">
                    “Do not follow where the path may lead. Go instead where
                    there is no path and leave a trail” – Ralph Waldo Emerson
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item position-relative h-100">
            <img src={imgOne} className="d-block w-100" alt="..." />
            <div className="corousel-item_text">
              <div className="h-100">
                <div className="item_text_wrapper p-3">
                  <h4 className="text-light">
                    “I am not the same, having seen the moon shine on the other
                    side of the world” – Mary Anne Radmacher
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
