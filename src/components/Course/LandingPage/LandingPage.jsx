import React, { useEffect } from "react";
import MainBody from "./MainBody";
import SideBar from "./SideBar";
import "./LandingPage.scss";
import axios from "axios";
import { baseURL } from "../../global/config";
import { useStateValue } from "../../../redux/StateProvider";

function LandingPage() {
  const { state, dispatch } = useStateValue();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseres = await axios.get(baseURL + "/api/course");
        const _course = courseres.data;
        //console.log(_course, "inside course");
        dispatch({ type: "SET_COURSE", course: _course });

        const courseCategoryres = await axios.get(
          baseURL + "/api/courseCategory"
        );

        const _course_category = courseCategoryres.data;
        //console.log(_course_category, "inside course category");
        dispatch({
          type: "SET_COURSECATEGORY",
          courseCategory: _course_category,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <div className="landingPage">
      <SideBar />
      <MainBody />
    </div>
  );
}

export default LandingPage;
