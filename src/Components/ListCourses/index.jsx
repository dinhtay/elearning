import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.scss";
// thư viện owl carousel
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
// thư viện owl carousel
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { fetchCategory, fetchCategoryCourser } from "../../Redux/Course/index";
import CourseItems from "../CourseItems";
SwiperCore.use([Navigation, Pagination]);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "40px",
  },
  paper: {
    color: theme.palette.text.secondary,
  },

  tabs: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  tab: {
    [theme.breakpoints.down("sm")]: {
      minWidth: "17%",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "15%",
      fontSize: "6.5px",
    },
  },
}));
export default function ListCourses() {
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    maDanhMuc: "",
  });
  const listCategoryCourser = useSelector(
    (state) => state.Course.listCategoryCourser
  );
  const loading = useSelector((state) => state.Loading.isLoading);
  //const courseList = useSelector((state) => state.Course.course);
  const categoryList = useSelector((state) => state.Course.categoryCourse);
  useEffect(() => {
    // lấy danh mục khóa học
    dispatch(fetchCategory());

    // đầu tiên lấy backend
    dispatch(fetchCategoryCourser("BackEnd"));
  }, []);

  useEffect(() => {
    dispatch(fetchCategoryCourser(state.maDanhMuc));
  }, [state.maDanhMuc]);

  function renderList() {
    return listCategoryCourser.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <CourseItems item={item} />
        </SwiperSlide>
      );
    });
  }
  // end

  // render cetagory
  const renderCategory = () => {
    return (
      categoryList.length &&
      categoryList.map((category, index) => {
        return (
          <Tab
            className={classes.tab}
            key={index}
            label={category.maDanhMuc}
            onClick={() => {
              setstate({
                maDanhMuc: category.maDanhMuc,
              });
            }}
          />
        );
      })
    );
  };

  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /*  if (loading) {
    return (
      <div>
        <div className="loader">Loading...</div>
      </div>
    );
  } */

  return (
    <>
      <Paper className={classes.root}>
        <span
          style={{
            border: "1px solid none",
            borderRadius: " 19px",
            padding: "3px",
            color: "white",
            fontSize: "21px",
            background: "#0f7c90",
            boxShadow: "0px 1px 5px",
            marginLeft: " 40px",
          }}
        >
          Khóa Học
        </span>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {renderCategory()}
        </Tabs>
      </Paper>

      <div className="listCourse__content__items">
        <Swiper
          spaceBetween={10}
          // slidesPerView={3}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            414: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {renderList()}
        </Swiper>
      </div>
    </>
  );
}
