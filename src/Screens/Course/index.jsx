import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import "../../sass/pages/courses.scss";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { fetchCoursesPage } from "../../Redux/Course";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchCourses from "../../Components/SearchCourses";
import Pagination from "@material-ui/lab/Pagination";
import { THEM_GIO_HANG } from "../../Redux/Constants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "270px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Courses() {
  const listCoursePages = useSelector((state) => state.Course.listCoursesPages);

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoursesPage(page));
  }, [page]);

  const renderList = () => {
    return listCoursePages.items?.map((item, index) => {
      return (
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={item.hinhAnh}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    <h6 style={{ color: "blue", fontSize: "12px" }}>
                      {item.tenKhoaHoc}
                    </h6>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() =>
                    dispatch({
                      type: THEM_GIO_HANG,
                      payload: item,
                    })
                  }
                  style={{ border: "1px solid " }}
                  size="small"
                  color="primary"
                >
                  Thêm Giỏ Hàng
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      );
    });
  };
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const renderPagination = () => {
    return (
      <Pagination
        count={listCoursePages.totalPages}
        page={page}
        color="primary"
        onChange={handleChangePage}
        onClick={() => dispatch(fetchCoursesPage(page))}
      />
    );
  };

  const classes = useStyles();
  return (
    <div className="course">
      <Header></Header>
      <div className="courses__title">
        <div className="courses__title__content">
          <h3>Danh Sách Khóa Học</h3>
          <span>Trang Chủ/Khóa Học</span>
        </div>
      </div>
      <div className="courses__app">
        <div className="courses__app__content" style={{ background: "aqua" }}>
          <h6>PHÁT TRIỂN</h6>
          <i class="fa fa-desktop"></i>
          <p>224</p>
        </div>
        <div
          className="courses__app__content"
          style={{ background: "#ffe799" }}
        >
          <h6>NHIẾP ẢNH</h6>
          <i class="fa fa-camera-retro"></i>
          <p>224</p>
        </div>
        <div className="courses__app__content" style={{ background: "aqua" }}>
          <h6>THIẾT KẾ</h6>
          <i class="fa fa-briefcase"></i>
          <p>224</p>
        </div>
        <div className="courses__app__content" style={{ background: "bisque" }}>
          <h6>GIÁO DỤC</h6>
          <i class="fa fa-book"></i>
          <p>224</p>
        </div>
        <div className="courses__app__content" style={{ background: "aqua" }}>
          <h6>VIDEO</h6>
          <i class="fa fa-play-circle"></i>
          <p>224</p>
        </div>
        <div className="courses__app__content" style={{ background: "beige" }}>
          <h6>NGÔN NGỮ</h6>
          <i class="fa fa-flag-checkered"></i>
          <p>224</p>
        </div>
      </div>
      <div className="courses__search">
        <SearchCourses />
      </div>
      <div className="courses__card">
        <Grid container spacing={3}>
          {renderList()}
        </Grid>
      </div>
      <div className="courses__pagination">{renderPagination()}</div>
      <Footer></Footer>
    </div>
  );
}
