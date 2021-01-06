import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import "./style.scss";
import { Link } from "react-router-dom";
import { ADD_CART } from "../../Redux/Constants";
import doiTuong from "./model";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    marginTop: "10px",
    width: "250px",
    height: "250px",
    overflowY: "scroll",
  },
}));

export default function Cart() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const countCart = useSelector((state) => state.Cart.listCart);

  function renderCountCart() {
    return ten.reduce((tong, cart, index) => {
      return (tong = index + 1);
    }, 0);
  }
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

  function renderListCart() {
    return ten?.map((item, index) => {
      return (
        <div className="nguoiTao__cart" key={index}>
          <div className="nguoiTao__cart__content">
            <div
              className="nguoiTao__cart__content--img"
              style={{ width: "80px", height: "55px" }}
            >
              <img
                style={{ width: "80px", height: "45px", lineHeight: "50px" }}
                src={item.hinhAnh}
                alt="anh"
              />
            </div>
            <div className="nguoiTao__cart__content--hoten">
              <p style={{ marginBottom: "0" }}>{item.maKhoaHoc}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <div style={{ position: "relative", width: "100%" }}>
        <span
          style={{
            position: "absolute",
            top: "-10px",
            fontWeight: "600",
            left: "82%",
            color: "red",
          }}
        >
          {renderCountCart()}
        </span>
        <i
          onClick={handleClick}
          aria-describedby={id}
          type="button"
          className="fa cart fa-shopping-cart"
        />
      </div>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>
          {renderListCart()}
          <Link
            to="/cart"
            className="btn btn-outline-warning"
            style={{ width: "100%", marginTop: "5px" }}
          >
            Chi Tiết Giỏ Hàng <i className="text-danger fa fa-heart" />
          </Link>
        </div>
      </Popper>
    </div>
  );
}
