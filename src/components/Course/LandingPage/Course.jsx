import React from "react";

import Row from "./Row";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStateValue } from "../../../redux/StateProvider";

function Course() {
  const { state, dispatch } = useStateValue();
  const { course, updatedCourse } = state;

  return (
    <div>
      <div className="course__categoryContainer">
        <h3>Individual course</h3>
        <button>View All</button>
      </div>
      <div className="course__rowsContainer">
        {course.map(
          (item) =>
            updatedCourse === item.category && (
              <Row
                key={item.course_id}
                img={item.thumbnail}
                time={item.timing}
                title={item.title}
                students={item.noofstudents}
                amount={item.amount}
                rating={item.rating}
                id={item.course_id}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Course;
