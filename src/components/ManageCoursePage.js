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

  function handleTitleChange(event) {
    const updatedCourse = { ...course, title: event.target.value };
    setCourse(updatedCourse);
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
      <CourseForm course={course} onTitleChange={handleTitleChange} />
    </>
  );
};

export default ManageCoursePage;
