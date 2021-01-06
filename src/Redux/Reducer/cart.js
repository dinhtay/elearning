import { ADD_CART, SIGN_IN_COURSE, THEM_GIO_HANG } from "../Constants";
import Swal from "sweetalert2";
import doiTuong from "../../Components/Cart/model";
const initialState = {
  listCart: [],
  cartCourses: [],
};
const cart = localStorage.getItem("Cart");
const ten = [];
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

//initialState.listCart.concat(ten);
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEM_GIO_HANG:
      const updateCart = [...state.listCart].concat(ten);

      const index = updateCart.findIndex(
        (cart) => cart.maKhoaHoc === action.payload.maKhoaHoc
      );
      if (index === -1) {
        updateCart.push(action.payload);
        state.listCart = updateCart;
        Swal.fire("Thêm Thành Công!");
        localStorage.setItem("Cart", JSON.stringify(updateCart));
      } else {
        Swal.fire({
          title: "Bạn Đã Có Khóa Học Này!",
          icon: "warning",
        });
      }
      return { ...state };
      break;

    case "XOA_CART":
      const update = [...state.listCart].concat(ten);
      const index1 = update.findIndex(
        (cart) => cart.maKhoaHoc === action.payload.maKhoaHoc
      );
      if (index1 !== -1) {
        update.splice(index1, 1);
      }

      localStorage.setItem("Cart", JSON.stringify(update));
      window.location.replace("/cart");
      /* const update = [...state.listCart].concat(ten);
      state.listCart = update;*/
      return { ...state };
      break;
    case SIGN_IN_COURSE:
      {
        const updatDangKi = [...state.cartCourses];
        updatDangKi.push(action.payload);
        state.cartCourses = updatDangKi;
        localStorage.setItem("SignInCourse", JSON.stringify(updatDangKi));
      }
      return { ...state };
    default:
      return { ...state };
      break;
  }
};

export default cartReducer;
