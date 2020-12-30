import Axios from "axios";

export class UserService {
  requestLognin(user) {
    return Axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    });
  }
  requestSignup(user) {
    return Axios({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    });
  }
}
