import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import giaoVien1 from "../../assets/giaovien1.jpg";
import giaoVien2 from "../../assets/giaovien2.jpg";
import giaoVien3 from "../../assets/giaovien3.jpg";
import giaoVien4 from "../../assets/giaovien4.jpg";
import giaoVien5 from "../../assets/giaovien5.jpg";
import giaoVien6 from "../../assets/giaovien6.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2, 4),
    background: "#ffe799",
  },
  start: {
    color: "#ffe799",
    marginLeft: "1px",
  },
  start1: {
    color: "#73726c",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    "&:hover": {
      boxShadow: "1px 1px 5px 3px  #73726c",
    },
  },
}));

export default function Teacher() {
  const classes = useStyles();

  return (
    <>
      <span
        style={{
          border: "1px solid none",
          borderRadius: " 19px",
          padding: "3px",
          color: "white",
          fontSize: "21px",
          background: "#0f7c90",
          boxShadow: "0px 1px 5px",
          display: "inline-block",
          marginLeft: "40px",
          marginTop: "40px",
        }}
      >
        Giảng Viên
      </span>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={6} sm={4} md={2}>
            <Paper className={classes.paper}>
              <img
                src={giaoVien1}
                alt="anh"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                  border: "1px solid red",
                }}
              />
              <h6>Dara Khosrowshahi</h6>
              <span className={classes.start}>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <span className={classes.start1}>5</span>
              </span>
            </Paper>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <Paper className={classes.paper}>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                  border: "1px solid red",
                }}
                src={giaoVien2}
                alt="anh"
              />
              <h6>Dan Schulman</h6>
              <span className={classes.start}>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-alt"></i>
                <span className={classes.start1}>4.5</span>
              </span>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Paper className={classes.paper}>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid red",
                }}
                src={giaoVien3}
                alt="anh"
              />
              <h6>David Daneshgar</h6>
              <span className={classes.start}>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <span className={classes.start1}>5</span>
              </span>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Paper className={classes.paper}>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                  border: "1px solid red",
                }}
                src={giaoVien5}
                alt="anh"
              />
              <h6>David Daneshgar</h6>
              <span className={classes.start}>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <span className={classes.start1}>5</span>
              </span>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Paper className={classes.paper}>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                  border: "1px solid red",
                }}
                src={giaoVien4}
                alt="anh"
              />
              <h6>Bill Gates</h6>
              <span className={classes.start}>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <span className={classes.start1}>5</span>
              </span>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Paper className={classes.paper}>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                  border: "1px solid red",
                }}
                src={giaoVien6}
                alt="anh"
              />
              <h6>Code Dạo</h6>
              <span className={classes.start}>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-alt"></i>
                <span className={classes.start1}>4.5</span>
              </span>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
