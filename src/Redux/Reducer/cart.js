import { THEM_GIO_HANG } from "../Constants";
import Swal from "sweetalert2";
const initialState = {
  listCart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEM_GIO_HANG:
      const updateCart = [...state.listCart];
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

    default:
      return { ...state };
      break;
  }
};

export default cartReducer;
