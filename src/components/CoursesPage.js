import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => {
      setCourses(_courses);
    });
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <CourseList courses={courses} />
    </div>
  );
}

export default Courses;
