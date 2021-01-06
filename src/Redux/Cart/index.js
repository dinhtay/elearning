import { cartCourseService } from "../../Services";
import { createAction } from "../Actions";
import { SIGN_IN_COURSE } from "../Constants";
import Swal from "sweetalert2";

export const signInCourse = (items) => {
  return (dispatch) => {
    const user = localStorage.getItem("userLogin");
    const users = JSON.parse(user);
    cartCourseService
      .signInCourse(items, users)
      .then((res) => {
        Swal.fire({
          title: "Bạn Đăng Kí Thành Công ! Chờ Admin Xét Duyệt",
          icon: "success",
        });
        dispatch(createAction(SIGN_IN_COURSE, { items, users }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
