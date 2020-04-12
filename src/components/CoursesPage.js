import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import store from "../store/courseStore";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function Courses() {
  const [courses, setCourses] = useState(store.getCourses());

  useEffect(() => {
    store.addChangeListener(onChange);
    if (courses.length === 0) {
      loadCourses();
    }

    //clean up on unmount
    return () => {
      store.removeChangeListener(onChange);
    };
  }, [courses.length]);

  function onChange() {
    setCourses(store.getCourses);
  }
  return (
    <div>
      <h1>Courses</h1>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </div>
  );
}

export default Courses;
