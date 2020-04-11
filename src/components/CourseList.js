import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author Id</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
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
  );
}
// this is normal check for props
// CourseList.propTypes = {
//   courses: PropTypes.array.isRequired,
// };

// more specific type of validation of props
CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      authorId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
};

// this is when you want to set the default for the props
// CourseList.defaultProps = {
//   courses: [],
// };

export default CourseList;
