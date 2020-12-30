import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import "../../sass/layout/_login.scss";
import useStyles from "./style";
import check from "../../Components/Validate/index";
import { requestLognin } from "../../Redux/Lognin/index";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch(); // giống this.props.dispatch

  // có thể có nhiều state và setState nhưng phải khác tên
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const [error, setError] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  // bắt sự kiện trên input
  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user, // để đủ thuộc tính
      [name]: value,
    });
  }
  // chặn sự kiện load trang và dispatch lên actions và call api
  function handleSubmit(event) {
    event.preventDefault(); // chặn sự kiện load trang

    setError(check(user));

    if (user.taiKhoan !== "" && user.matKhau !== "") {
      dispatch(requestLognin(user, history));
      console.log(error);
    }
  }

  return (
    <div className="login">
      <Container component="main" className={classes.main} maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.colorRed}>
            Đăng Nhập
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="taiKhoan"
              label="Tài Khoản"
              name="taiKhoan"
              autoComplete="taiKhoan"
              autoFocus
              onChange={handleChange}
              value={user.taiKhoan}
              error={error.taiKhoan}
              helperText={error.taiKhoan}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="matKhau"
              label="Mật khẩu"
              type="password"
              id="matKhau"
              autoComplete="current-password"
              onChange={handleChange}
              value={user.matKhau}
              error={error.matKhau}
              helperText={error.matKhau}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng Nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Trang Chủ
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  Chưa có tài khoản,Đăng kí
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
