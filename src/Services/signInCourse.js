import Axios from "axios";
class CartCourseService {
  signInCourse(item, user) {
    console.log("aaaaaaa", user.taiKhoan);
    console.log("aaaaaaabbb", user.accessToken);
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
      data: {
        maKhoaHoc: item,
        taiKhoan: user.taiKhoan,
      },
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  }
}

export default CartCourseService;
