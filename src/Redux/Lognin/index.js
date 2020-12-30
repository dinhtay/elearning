import { userService } from "../../Services";
import { createAction } from "../Actions";
import { SIGN_IN } from "../Constants";
import Swal from "sweetalert2";

export const requestLognin = (user, history) => {
  return (dispatch) => {
    userService
      .requestLognin(user)
      .then((res) => {
        dispatch(createAction(SIGN_IN, res.data));
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công",
        });
        history.push("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Lỗi !!",
          text: "Tài khoản hoặc Mật khẩu không đúng ",
        });
        console.log(err);
      });
  };
};
