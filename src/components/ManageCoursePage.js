import React, { useState } from "react";
import CourseForm from "./CourseForm";
// import { Prompt } from "react-router-dom";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    authorId: "",
    title: "",
    category: null,
  });

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

  // debugger;
  return (
    <>
      <h1> Manage Course Page</h1>
      {/* <Prompt
        when={true}
        message="Are you sure and want to continue ???"
      ></Prompt> */}
      <p>
        Slug is:{" "}
        <span style={{ color: "#660" }}>{props.match.params.slug}</span>
      </p>
      <CourseForm course={course} onChange={handleChange} />
    </>
  );
};

export default ManageCoursePage;
