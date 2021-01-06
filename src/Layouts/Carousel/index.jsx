import React, { Component } from "react";
import "../../App.scss";
import Slider from "react-slick";

import Slide1 from "../../assets/slide1.png";
import Slide2 from "../../assets/slide2.png";
import Slide3 from "../../assets/slide3.png";

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 1000,
      autoplay: true,
      arrows: false,
      slidesToShow: 3,
    };
    return (
      <section className="carousel">
        <div className="background">
          <div className="background__content">
            <h3>Tìm Khóa Học</h3>
            <p>Anywhere, anytime. Start learning today!</p>
            <div className="background__content__search">
              <input type="text" placeholder="What do you want to learn" />
              <i className="fa fa-search" />
            </div>
          </div>
          <div style={{ width: "75%" }}>
            <Slider {...settings} className="background__slick">
              <div>
                <img
                  src={Slide1}
                  alt="anh"
                  style={{ transform: "translate(135%, -53%)" }}
                />
              </div>
              <div>
                <img
                  src={Slide2}
                  alt="anh1"
                  style={{ transform: "translate(490%, -180%)" }}
                />
              </div>
              <div>
                <img
                  src={Slide3}
                  alt="anh2"
                  style={{ transform: "translate(824%, -222%)" }}
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default Carousel;
