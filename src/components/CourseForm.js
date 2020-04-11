import React from "react";
import TextInput from "./common/TextInput";

function CourseForm(props) {
  return (
    <form>
      <TextInput
        id="title"
        label="Title"
        name="title"
        value={props.course.title}
        onChange={props.onChange}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            className="form-control"
            value={props.course.authorId || ""}
          >
            <option value=""></option>
            <option value="1">Cory House</option>
            <option value="2">Nitin Singh</option>
          </select>
        </div>
      </div>

      <TextInput
        id="category"
        name="category"
        label="Category"
        className="form-control"
        onChange={props.onChange}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
