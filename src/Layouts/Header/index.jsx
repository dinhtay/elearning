import React from "react";
import { useSelector } from "react-redux";
import "../../App.scss";
import logo from "../../assets/logo-coral.svg";
import { Link, NavLink } from "react-router-dom";
import { Button, Menu } from "@material-ui/core";
import Swal from "sweetalert2";
import SearchHeader from "../../Components/SearchHeader";
import Cart from "../../Components/Cart";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = useSelector((state) => state.User.login);

  function handleLogout() {
    Swal.fire({
      title: "Bạn muốn đăng xuất ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK !",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("userLogin");
        window.location.replace("/");
        Swal.fire("Đã đăng xuất tài khoản");
      }
    });
  }

  return (
    <header className="header">
      <div className="img">
        <Link to="/">
          <img className="header__logo" src={logo} />
        </Link>
      </div>
      <div>
        <Link className="header__course" to="/courses">
          Khóa Học
        </Link>
      </div>
      <div className="header__search">
        <SearchHeader />
      </div>

      <Cart />

      {user ? (
        <div>
          <Button onClick={handleClick}>
            <i
              style={{
                color: "#fb4226",
                fontSize: "20px",
                marginRight: "5px",
              }}
              className="fa fa-user"
            ></i>

            <span
              style={{
                color: "#fb4226",
                fontStyle: "italic",
                fontSize: "14px",
              }}
            >
              Hi! {user.hoTen}
            </span>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link
              to="/profile"
              style={{
                display: "block",
                fontSize: "14px",
                textDecoration: "none",
                color: "#444",
                margin: "20px auto",
                padding: "5px",
              }}
              onClick={handleClose}
            >
              <i className="fa fa-address-card"></i> Thông tin tài khoản
            </Link>

            {user.maLoaiNguoiDung === "QuanTri" ? (
              <Link
                style={{
                  display: "block",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "#444",
                  margin: "20px auto",
                  padding: "5px",
                }}
                to=""
                onClick={handleClose}
              >
                <i className="fa fa-cogs"></i> Trang quản trị
              </Link>
            ) : (
              <></>
            )}
            <Link
              to="/"
              style={{
                display: "block",
                fontSize: "14px",
                textDecoration: "none",
                color: "#444",
                margin: "20px auto",
                padding: "5px",
              }}
              onClick={handleLogout}
            >
              <i className="fa fa-power-off"></i> Đăng xuất
            </Link>
          </Menu>
        </div>
      ) : (
        <div>
          <NavLink className="header__btn-signup" to="/login">
            <i className="fa fa-user-circle" style={{ marginRight: "2px" }} />
            <span>Đăng nhập</span>
          </NavLink>
          <NavLink className="header__btn-login" to="/signup">
            <span>Đăng ký</span>
          </NavLink>
        </div>
      )}
    </header>
  );
}
