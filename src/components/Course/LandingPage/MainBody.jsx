import React from "react";
import AllCourse from "./AllCourse";
import Course from "./Course";
import { useStateValue } from "../../../redux/StateProvider";

function MainBody() {
  const { state, dispatch } = useStateValue();
  const { allCourse, updatedCourse, course, courseCategory } = state;
  //console.log("inside mainbody of course", allCourse, updatedCourse);

  return (
    <div className="homepageBody">
      {allCourse ? <AllCourse /> : updatedCourse ? <Course /> : <AllCourse />}
    </div>
  );
}

export default MainBody;
