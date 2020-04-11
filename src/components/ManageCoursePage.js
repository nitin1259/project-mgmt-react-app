import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = (props) => {
  // debugger;
  return (
    <>
      <h1> Manage Course Page</h1>
      <Prompt
        when={true}
        message="Are you sure and want to continue ???"
      ></Prompt>
      <p>
        Slug is:{" "}
        <span style={{ color: "#660" }}>{props.match.params.slug}</span>
      </p>
    </>
  );
};

export default ManageCoursePage;
