import { Link } from "react-router-dom";

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link id="wd-course-home-link" to="Home">Home</Link><br />
      <Link id="wd-course-modules-link" to="Modules">Modules</Link><br />
      <Link id="wd-course-piazza-link" to="Piazza">Piazza</Link><br />
      <Link id="wd-course-zoom-link" to="Zoom">Zoom</Link><br />
      <Link id="wd-course-quizzes-link" to="Assignments">Assignments</Link><br />
      <Link id="wd-course-assignments-link" to="Quizzes">Quizzes</Link><br />
      <Link id="wd-course-grades-link" to="Grades">Grades</Link><br />
      <Link id="wd-course-people-link" to="People">People</Link><br />
    </div>
  );
}