import React, { Component } from "react";

import "../../App.scss";
import Carousel from "../../Layouts/Carousel";
import ListCourses from "../../Components/ListCourses";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import HeaderMobile from "../../Layouts/HeaderMobile";
import Teacher from "../../Components/Teacher";
import Review from "../../Components/ReviewCourse";

class Home extends Component {
  render() {
    return (
      <section className="listCourse">
        <Header />
        <HeaderMobile></HeaderMobile>
        <Carousel />
        <ListCourses />
        <Teacher />
        <Review />
        <Footer />
      </section>
    );
  }
}

export default Home;
