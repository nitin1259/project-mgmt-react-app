import React from "react";

const ManageCoursePage = (props) => {
  // debugger;
  return (
    <>
      <h1> Manage Course Page</h1>
      <p>
        Slug is:{" "}
        <span style={{ color: "#660" }}>{props.match.params.slug}</span>
      </p>
    </>
  );
};

export default ManageCoursePage;
