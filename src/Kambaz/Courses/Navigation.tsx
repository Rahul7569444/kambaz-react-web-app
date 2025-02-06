import { Link } from "react-router-dom";
import "../styles.css";

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link id="wd-course-home-link" to="/Kambaz/Courses/1234/Home"
        className="list-group-item active border border-0">Home</Link>
      <Link id="wd-course-modules-link" to="/Kambaz/Courses/1234/Modules"
        className="list-group-item text-danger border border-0">Modules</Link>
      <a id="wd-course-piazza-link" href="https://piazza.com/"
        className="list-group-item text-danger border border-0"
        target="_blank" 
        rel="noopener noreferrer">Piazza</a>
      <a id="wd-course-zoom-link" href="https://zoom.us/"
        className="list-group-item text-danger border border-0"
        target="_blank" 
        rel="noopener noreferrer">Zoom</a>
      <Link id="wd-course-quizzes-link" to="/Kambaz/Courses/1234/Assignments"
        className="list-group-item text-danger border border-0">Assignments</Link>
      <Link id="wd-course-assignments-link" to="/Kambaz/Courses/1234/Quizzes"
        className="list-group-item text-danger border border-0">Quizzes</Link>
      <Link id="wd-course-grades-link" to="/Kambaz/Courses/1234/Grades"
        className="list-group-item text-danger border border-0">Grades</Link>
      <Link id="wd-course-people-link" to="/Kambaz/Courses/1234/People"
        className="list-group-item text-danger border border-0">People</Link>
    </div>
  );
}