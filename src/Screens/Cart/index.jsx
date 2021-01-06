import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import HeaderMobile from "../../Layouts/HeaderMobile";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./style.scss";
import { Button } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
// thư viện owl carousel
import Swal from "sweetalert2";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { fetchCategoryCourser } from "../../Redux/Course";
import CourseItems from "../../Components/CourseItems";
import doiTuong from "../../Components/Cart/model";
import { signInCourse } from "../../Redux/Cart";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function DetailsCart() {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.Cart.listCart);
  const listCategoryCourser = useSelector(
    (state) => state.Course.listCategoryCourser
  );
  const dangKi = localStorage.getItem("SignInCourse");
  const user1 = localStorage.getItem("userLogin");

  const cart = localStorage.getItem("Cart");
  const ten = [];
  //const users = JSON.parse(dangKi);
  const user = JSON.parse(user1);

  mapData(JSON.parse(cart));
  function mapData(data) {
    for (var i = 0; i < data?.length; i++) {
      //Đối tượng nhân viên cũ từ local : data[i]
      // => chuyển thành đối tượng nhân viên mới : newEmpl
      const newTask = new doiTuong(
        data[i].hinhAnh,
        data[i].tenKhoaHoc,
        data[i].maKhoaHoc
      );
      ten.push(newTask);
    }
  }
  function renderCart() {
    return ten?.map((item, index) => {
      return (
        <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row">
            <img src={item.hinhAnh} style={{ width: "100px" }} alt="anh" />
          </StyledTableCell>
          <StyledTableCell align="center">{item.tenKhoaHoc}</StyledTableCell>
          <StyledTableCell
            style={{ color: "red", fontFamily: "unset" }}
            align="center"
          >
            $50
          </StyledTableCell>
          <StyledTableCell align="center">
            <Button
              variant="contained"
              color="secondary"
              style={{ marginRight: "3px" }}
              onClick={() =>
                dispatch({
                  type: "XOA_CART",
                  payload: item,
                })
              }
            >
              Xóa
            </Button>
            {user ? (
              JSON.parse(dangKi) === item.maKhoaHoc &&
              user.taiKhoan === JSON.parse(dangKi) ? (
                <Button variant="contained" color="primary">
                  Chờ Duyệt
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    dispatch(signInCourse(item.maKhoaHoc));
                  }}
                >
                  Đăng Kí
                </Button>
              )
            ) : (
              <Button
                onClick={() =>
                  Swal.fire({
                    title: "Bạn Chưa Đăng Nhập!",
                    icon: "warning",
                  })
                }
                variant="contained"
                color="primary"
              >
                Đăng Kí
              </Button>
            )}
          </StyledTableCell>
        </StyledTableRow>
      );
    });
  }

  useEffect(() => {
    dispatch(fetchCategoryCourser("BackEnd"));
  }, []);

  function renderList() {
    return listCategoryCourser.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <CourseItems item={item} />
        </SwiperSlide>
      );
    });
  }

  const classes = useStyles();
  return (
    <>
      <Header />
      <HeaderMobile />
      <div className="courses__title">
        <div className="courses__title__content">
          <h3>Giỏ Hàng</h3>
          <span>Trang Chủ/Giỏ Hàng</span>
        </div>
      </div>
      <div className="detailsCart">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Avata Khóa Học</StyledTableCell>
                <StyledTableCell align="center">Tên Khóa Học</StyledTableCell>
                <StyledTableCell align="center">Giá Khóa Học</StyledTableCell>
                <StyledTableCell align="center">Thao Tác</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/*  <StyledTableRow>
                  <StyledTableCell align="center">
                    Chưa có khóa học
                  </StyledTableCell>
                </StyledTableRow> */}

              {renderCart()}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="listCourse__content__items">
        <span
          style={{
            border: "1px solid none",
            borderRadius: " 19px",
            padding: "3px",
            color: "white",
            fontSize: "21px",
            background: "#0f7c90",
            boxShadow: "0px 1px 5px",
            marginLeft: " 40px",
          }}
        >
          Khóa Học Nổi Bậc
        </span>
        <Swiper
          spaceBetween={10}
          // slidesPerView={3}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            414: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
        >
          {renderList()}
        </Swiper>
      </div>
      <Footer />
    </>
  );
}
