// new ra một đối tượng

import CourseService from "./course";
import CartCourseService from "./signInCourse";
import { UserService } from "./user";

export const courseService = new CourseService();
/* export const categoryService = new CourseService();
export const detailService = new CourseService();
export const courseCategoryService = new CourseService(); */
export const userService = new UserService();

export const cartCourseService = new CartCourseService();
