import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import CourseHome from "./components/CourseHome";
// import Register from "./components/Register";
// import Login from "./components/Login";
import axios from "axios";
import LandingPage from "./LandingPage";
import CoursePage from "../CourseDesciption/CoursePage";
// import Video from "./components/Video";
// import {useStateValue} from "./redux/StateProvider";
// import Profile from "./components/Profile";

function App() {
  //   const [{course,category},dispatch] = useStateValue();
  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const response = await axios.get("/api/course");
  //         const _course = response.data.results
  //         dispatch({type:"SET_COURSE",course:_course})
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     fetchData();
  //   }, []);
  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const response = await axios.get("/api/category");
  //         const _category = response.data.results
  //         dispatch({type:"SET_CATEGORY",category:_category})
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     fetchData();
  //   }, []);
  // console.log("appcourse",course);
  // console.log("appcategory",category);

  return (
    <Router basename="/courses">
      <div className="app">
        <Switch>
          {/* <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/course">
            <CoursePage />
          </Route>
          {/* <Route path="/video">
            <Header />
            <Video />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route> */}
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
