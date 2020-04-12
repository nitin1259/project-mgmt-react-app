import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
// import { Prompt } from "react-router-dom";
import { toast } from "react-toastify";
import store from "../store/courseStore";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    authorId: "",
    title: "",
    category: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug;

    if (slug) {
      setCourse(store.getCoursesbySlug(slug));
    }
  }, [props.match.params.slug]);

  // function handleChange(event) {
  //   const updatedCourse = {
  //     ...course,
  //     [event.target.name]: event.target.value,
  //   };
  //   setCourse(updatedCourse);
  // }

  // short hand of above method with de-structuring
  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValidForm()) return;
    // console.log("Befor saving:");
    // console.log(course);
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Saved Successfully");
    });
  }

  function isValidForm() {
    const _errors = {};
    if (!course.title) _errors.title = "Invalid Title";
    if (!course.authorId) _errors.authorId = "Invalid Author";
    if (!course.category) _errors.category = "Invalid Category";

    setErrors(_errors);

    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }
  // debugger;
  return (
    <>
      <h1> Manage Course Page</h1>
      {/* <Prompt
        when={true}
        message="Are you sure and want to continue ???"
      ></Prompt> */}
      <p>
        <span style={{ color: "#660" }}>{props.match.params.slug}</span>
      </p>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
};

export default ManageCoursePage;
