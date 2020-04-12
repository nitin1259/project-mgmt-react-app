import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import store from "../store/courseStore";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(store.getCourses());
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
