import React, { Component } from "react";

import apple from "../../assets/apple-logo.png";
import android from "../../assets/android-logo.png";
import zalo from "../../assets/zalo-logo.png";
import facebook from "../../assets/facebook-logo.png";

import "../../App.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={{ marginTop: "30px" }}>
        <div className="footer__contact">
          <div className=" footer__contact__client">
            <p>Chi Nhánh</p>
            <div className="footer__client--list">
              <div className="footer__client--item">484 Chi Lăng, Huế</div>
              <div className="footer__client--item">484 Chi Lăng, Huế</div>
            </div>
          </div>
          <div className="footer__contact__info">
            <div className="row footer__contact mx-0">
              <div className="text-center  col-12">
                <p>CyberFilm – SẢN PHẨM CỦA TRẦN ĐÌNH TÂY</p>
                <div className="footer__contact__address">
                  <span>
                    Địa chỉ:số 484, đường Chi Lăng, Phường Phú Hậu ,Thừa Thiên
                    Huế
                  </span>
                </div>
                <div className="footer__contact__link">
                  <p>Số Điện Thoại (Hotline): 037 924 3337</p>
                  <p style={{ color: "red" }}>
                    Email: trandinhtay161193@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" footer__contact__app">
            <p>App</p>
            <div className="footer__social">
              <a href="#">
                <img
                  style={{ marginRight: "5%" }}
                  src={apple}
                  alt="img_contact"
                />
              </a>
              <a href="#">
                <img src={android} alt="img_contact" />
              </a>
            </div>
          </div>
          <div className=" footer__contact__social">
            <p>Social</p>
            <div className="footer__social">
              <a href="#">
                <img
                  style={{ marginRight: "5%" }}
                  src={facebook}
                  alt="img_contact"
                />
              </a>
              <a href="#">
                <img src={zalo} alt="img_contact" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
