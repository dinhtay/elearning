import { courseService } from "../../Services";
import { createAction } from "../Actions";
import { starLoading, stopLoading } from "../Common";
import {
  FETCH_LIST_CATEGORY,
  FETCH_DETAIL,
  FETCH_CATEGORY_COURSES,
  FETCH_COURSES,
  FETCH_COURSES_PAGES,
} from "../Constants";

export const fetchCourse = () => {
  return (dispatch) => {
    courseService
      .fetchCourses()
      .then((res) => {
        dispatch(createAction(FETCH_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCategory = () => {
  return (dispatch) => {
    courseService
      .fetchCategory()
      .then((res) => {
        dispatch(createAction(FETCH_LIST_CATEGORY, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchDetail = (maKhoaHoc) => {
  return (dispatch) => {
    dispatch(starLoading());
    courseService
      .fetchDetail(maKhoaHoc)
      .then((res) => {
        dispatch(stopLoading());
        dispatch(createAction(FETCH_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCategoryCourser = (maDanhMuc) => {
  return (dispatch) => {
    courseService
      .fetchCourserCategory(maDanhMuc)
      .then((res) => {
        dispatch(createAction(FETCH_CATEGORY_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCoursesPage = (pages) => {
  return (dispatch) => {
    courseService
      .fetchCoursesPages(pages)
      .then((res) => {
        dispatch(createAction(FETCH_COURSES_PAGES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
