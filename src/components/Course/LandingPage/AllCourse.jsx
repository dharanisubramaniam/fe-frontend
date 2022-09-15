import React from "react";
import { useStateValue } from "../../../redux/StateProvider";
import AllCourseRow from "./AllCourseRow";

function AllCourse() {
  const { state } = useStateValue();
  const { courseCategory } = state;
  //console.log("inside all course", courseCategory);
  return (
    <div>
      {courseCategory.map((item) => (
        <AllCourseRow key={item.id} title={item.name} id={item.id} />
      ))}
    </div>
  );
}

export default AllCourse;
