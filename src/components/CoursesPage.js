import React, { Component } from "react";
import { getCourses } from "../api/courseApi";

class Courses extends Component {
  state = { cources: [] };

  componentDidMount() {
    getCourses().then((cources) => this.setState({ cources: cources }));
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author Id</th>
              <th>category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cources.map((course) => {
              return (
                <tr>
                  <td>{course.title}</td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Courses;
