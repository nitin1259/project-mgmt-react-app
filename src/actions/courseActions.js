import * as courseApi from "../api/courseApi";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

// this is action creator
export function saveCourse(course) {
  // returning promise for inporgress calls
  return courseApi.saveCourse(course).then((savedCourse) => {
    //hey dispatcher, go tell all the store that a course was just created
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}
