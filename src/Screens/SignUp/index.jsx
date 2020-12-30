import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "../Login/style";
import { requestSignup } from "../../Redux/Signup";
import check from "../../Components/Validate/signup";
import "../../sass/layout/_signup.scss";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",

    hoTen: "",
  });
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    hoTen: "",
    maLoaiNguoiDung: "HV",
  });

  function handlChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    setError(check(user));
    let regexPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    let email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
    if (
      user.taiKhoan !== "" &&
      user.taiKhoan.length > 5 &&
      user.matKhau.length > 5 &&
      user.matKhau !== "" &&
      user.email !== "" &&
      user.soDt !== "" &&
      user.hoTen !== "" &&
      email.test(user.email) &&
      regexPhone.test(user.soDt)
    ) {
      dispatch(requestSignup(user, history));
    }
  }

  return (
    <div className="signup">
      <Container className={classes.main} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng Kí
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <Grid item item xs={12}>
              <TextField
                margin="normal"
                autoComplete="fname"
                name="taiKhoan"
                variant="outlined"
                required
                fullWidth
                id="taiKhoan"
                onChange={handlChange}
                label="Tài Khoản"
                autoFocus
                error={error.taiKhoan}
                helperText={error.taiKhoan}
              />
            </Grid>
            <Grid item item xs={12}>
              <TextField
                margin="normal"
                onChange={handlChange}
                variant="outlined"
                required
                fullWidth
                id="matKhau"
                label="Mật Khẩu"
                name="matKhau"
                type="password"
                autoComplete="lname"
                error={error.matKhau}
                helperText={error.matKhau}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                variant="outlined"
                onChange={handlChange}
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                error={error.email}
                helperText={error.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                variant="outlined"
                onChange={handlChange}
                required
                fullWidth
                name="soDt"
                label="SoDT"
                id="soDT"
                autoComplete="current-password"
                error={error.soDt}
                helperText={error.soDt}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                variant="outlined"
                onChange={handlChange}
                required
                fullWidth
                name="hoTen"
                label="Họ Tên"
                id="hoTen"
                autoComplete="current-password"
                error={error.hoTen}
                helperText={error.hoTen}
              />
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng Kí
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Trang Chủ
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  Có tài khoản,Đăng nhập
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
