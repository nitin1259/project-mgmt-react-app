import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

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
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </div>
  );
}

export default Courses;
