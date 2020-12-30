import React, { Component } from "react";
import "../../App.scss";
import giaovien1 from "../../assets/giaovien1.jpg";
import sach from "../../assets/sach.jpg";
import { connect } from "react-redux";

import { fetchDetail } from "../../Redux/Course/index";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import HeaderMobile from "../../Layouts/HeaderMobile";

class Details extends Component {
  renderDetails = () => {
    const { loading } = this.props;
    if (loading) {
      return (
        <div>
          <div className="loader">Loading...</div>
        </div>
      );
    } else {
      return (
        <div className="banner">
          <div className="banner__content">
            <div className="banner__content__down">
              <div className="banner__content__down--info">
                <h2>{this.props.detailCourse.tenKhoaHoc}</h2>

                <div className="nguoiTao">
                  <div className="nguoiTao__left">
                    <div className="nguoiTao__left__img">
                      <img src={giaovien1} alt="giaovien" />
                    </div>
                    <div className="nguoiTao__left__hoTen">
                      <p>Giáo Viên</p>
                      <span>{this.props.detailCourse.nguoiTao.hoTen}</span>
                    </div>
                  </div>

                  <div className="nguoiTao__midle">
                    <div className="nguoiTao__midle__img">
                      <i class="fa fa-address-book"></i>
                    </div>
                    <div className="nguoiTao__midle__hoTen">
                      <p>Khóa Học</p>
                      <span>
                        {
                          this.props.detailCourse.danhMucKhoaHoc
                            .maDanhMucKhoahoc
                        }
                      </span>
                    </div>
                  </div>
                  <div className="nguoiTao__right">
                    <p style={{ marginBottom: "0", marginTop: "7px" }}>
                      đánh giá
                    </p>
                    <span className="nguoiTao__right__start">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </span>
                  </div>
                </div>
                <div>
                  mô tả:{" "}
                  <i class="fa fa-arrow-right" style={{ color: "red" }}></i>
                  {this.props.detailCourse.moTa}
                </div>

                <div className="camNhan">
                  <p>
                    <i class="fa fa-arrow-right" style={{ color: "red" }}></i>{" "}
                    Học được gì sau khóa học ?
                  </p>

                  <div className="camNhan__content">
                    <div className="camNhan__content__left">
                      <p>
                        <i class="fa fa-check"></i> nắm bắt được yêu cầu của nhà
                        tuyển dụng
                      </p>
                      <p>
                        <i class="fa fa-check"></i> nắm bắt được yêu cầu của nhà
                        tuyển dụng
                      </p>
                    </div>
                    <div className="camNhan__content__right">
                      <p>
                        <i class="fa fa-check"></i> nắm bắt được yêu cầu của nhà
                        tuyển dụng
                      </p>
                      <p>
                        <i class="fa fa-check"></i> nắm bắt được yêu cầu của nhà
                        tuyển dụng
                      </p>
                    </div>
                  </div>
                </div>
                <div className="post">
                  <button className="btn btn-outline-warning">
                    Like <i className="fa fa-thumbs-up" />
                  </button>
                  <button className="btn btn-outline-success">
                    share
                    <i className="pl-1 fa fa-share" />
                  </button>
                </div>
              </div>
            </div>
            <div className="banner__content__up">
              <div className="banner__content__up--item">
                <div className="baner__content__up--link">
                  <iframe
                    style={{ width: "100%" }}
                    src="https://www.youtube.com/embed/oeGIm_oqUdA"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="banner__content__up--sign">
                  <p>Học phí:5.000.000 VND</p>
                  <p>Thời gian:18 Tuần</p>
                  <button className="btn btn-outline-warning">
                    Add to card <i className="text-danger fa fa-heart" />
                  </button>
                  <button
                    style={{ marginTop: "5px" }}
                    className="btn btn-outline-success"
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <>
        <Header />
        <HeaderMobile />
        <div className="courses__title">
          <div className="courses__title__content">
            <h3>Thông Tin Môn Học</h3>
            <span>Trang Chủ/Khóa Học</span>
          </div>
        </div>
        {this.renderDetails()}
        <Footer />
      </>
    );
  }

  componentDidMount() {
    // lấy id khóa học theo hàm thì thẻ link kèm theo được gởi từ CourseItem
    // sau đó đưa lên lấy api với lưu redux 1 lần thông qua redux-thunk
    this.props.dispatch(fetchDetail(this.props.match.params.courseId));
  }
}
// lấy chi tiết từ redux về render ra màng hình
const mapStateToProps = (state) => ({
  loading: state.Loading.isLoading,
  detailCourse: state.Course.detailCourse || {
    maKhoaHoc: "",
    hinhAnh: "",
    tenKhoaHoc: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
    danhMucKhoaHoc: {
      maDanhMucKhoaHoc: "",
    },
  },
});

export default connect(mapStateToProps, null)(Details);
