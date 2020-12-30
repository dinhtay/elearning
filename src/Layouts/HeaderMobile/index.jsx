import React, { useState } from "react";
import { useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../assets/logo-coral.svg";
import { Button, Drawer, Menu } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import "../../sass/pages/mobileheader.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    background: "red",
  },
  appBar: {
    background: "cornsilk",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    textAlign: "center",
  },
  logo1: {
    width: "130px",
    [theme.breakpoints.down("xs")]: {
      width: "95px",
    },
  },
  search: {
    // display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    color: "black",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    background: "bisque",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function HeaderMobile() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  let user = useSelector((state) => state.User.login);
  const handleDrawer = () => {
    setOpen(true);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            className={classes.menuButton}
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <img className={classes.logo1} src={logo} alt="logo" />
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {user ? (
            <div>
              <Button onClick={handleDrawer}>
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
            </div>
          ) : (
            <>
              <Link to="/login">login</Link>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <header className="headerMobile">
          <div className="headerMobile__img">
            <Link href="#" to="/">
              <img alt="logo" src={logo} />
            </Link>
          </div>
          <div className="headerMobile__cart">
            <Link href="#" to="/">
              <i className="fa cart fa-shopping-cart" />
            </Link>
            <NavLink to="/signup">
              <span>Giỏ Hàng</span>
            </NavLink>
          </div>
          <div className="headerMobile__signup">
            <NavLink to="/login">
              <i className="fa fa-user-circle" style={{ marginRight: "2px" }} />
              <span>Đăng nhập</span>
            </NavLink>
          </div>
          <div className="headerMobile__login">
            <NavLink to="/signup">
              <span>Đăng ký</span>
            </NavLink>
          </div>
        </header>
      </Drawer>
    </div>
  );
}
