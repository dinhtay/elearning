import {
  FETCH_CATEGORY_COURSES,
  FETCH_COURSES,
  FETCH_LIST_CATEGORY,
  FETCH_COURSES_PAGES,
} from "../Constants";
let initialState = {
  course: [],
  categoryCourse: [],
  detailCourse: null,
  listCategoryCourser: [],
  listCoursesPages: [],
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      {
        state.course = action.payload;

        return { ...state };
      }
      break;
    case FETCH_LIST_CATEGORY: {
      state.categoryCourse = action.payload;
      return { ...state };
    }
    case "FETCH_DETAIL": {
      state.detailCourse = action.payload;
      return { ...state };
    }
    case FETCH_CATEGORY_COURSES: {
      state.listCategoryCourser = action.payload;
      return { ...state };
    }
    case FETCH_COURSES_PAGES: {
      state.listCoursesPages = action.payload;
      return { ...state };
    }

    default:
      return state;
  }
};
export default CourseReducer;
