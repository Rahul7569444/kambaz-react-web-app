import { Link } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link id="wd-course-home-link"    to="/Kambaz/Courses/1234/Home">Home</Link><br/>
      <Link id="wd-course-modules-link" to="/Kambaz/Courses/1234/Modules">Modules
        </Link><br/>
      <Link id="wd-course-piazza-link"  to="/Kambaz/Courses/1234/Piazza">Piazza</Link><br/>
      <Link id="wd-course-zoom-link"    to="/Kambaz/Courses/1234/Zoom">Zoom</Link><br/>
      <Link id="wd-course-quizzes-link" to="/Kambaz/Courses/1234/Assignments">
          Assignments</Link><br/>
      <Link id="wd-course-assignments-link" to="/Kambaz/Courses/1234/Quizzes">Quizzes
        </Link><br/>
      <Link id="wd-course-grades-link"  to="/Kambaz/Courses/1234/Grades">Grades</Link><br/>
      <Link id="wd-course-people-link"  to="/Kambaz/Courses/1234/People">People</Link><br/>
    </div>
);}