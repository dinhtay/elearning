import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SIGN_IN } from "./Redux/Constants/";
import Home from "./Screens/Home";
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login";
import { createAction } from "./Redux/Actions";
import Details from "./Screens/Detail";
import Courses from "./Screens/Course";
import DetailsCart from "./Screens/Cart";

function App() {
  const dispatch = useDispatch();
  function getCredentialssFromLocal() {
    const user = localStorage.getItem("userLogin");
    if (user) {
      dispatch(createAction(SIGN_IN, JSON.parse(user)));
    }
  }
  useEffect(() => {
    getCredentialssFromLocal();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/details/:courseId" component={Details} />
        <Route path="/cart" component={DetailsCart} />
        <Route path="/courses" component={Courses}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
