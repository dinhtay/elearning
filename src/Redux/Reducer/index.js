import { combineReducers } from "redux";
import cartReducer from "./cart";
import loadingReducer from "./common";
import CourseReducer from "./course";
import userReducer from "./user";
const RootReducer = combineReducers({
  Course: CourseReducer,
  User: userReducer,
  Loading: loadingReducer,
  Cart: cartReducer,
});
export default RootReducer;
