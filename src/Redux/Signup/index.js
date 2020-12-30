import { userService } from "../../Services";
import { createAction } from "../Actions";
import { SIGN_UP } from "../Constants";
import Swal from "sweetalert2";

export const requestSignup = (user, history) => {
  return (dispatch) => {
    userService
      .requestSignup(user)
      .then((res) => {
        dispatch(createAction(SIGN_UP, res.data));
        Swal.fire({
          icon: "success",
          title: "Đăng kí thành công",
        });

        history.push("/login");
        //Lưu vào local
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Lỗi !!",
          text: "Email hoặc tài khoản tồn tại",
        });
        console.log(err);
      });
  };
};
