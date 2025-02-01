import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kambaz/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kambaz/Courses/1314/Home">
              CS1312 Welcome to Java
            </Link>
            <p className="wd-dashboard-course-title">
              Object oriented programming with Java
            </p>
            <Link to="/Kambaz/Courses/1312/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kambaz/Courses/1411/Home">
              CS1411 Machine Learning
            </Link>
            <p className="wd-dashboard-course-title">
              Introduction to Machine Learning
            </p>
            <Link to="/Kambaz/Courses/1411/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kambaz/Courses/1523/Home">
              CS1523 Intro to Analytics
            </Link>
            <p className="wd-dashboard-course-title">
              Learning concepts of data analysis and related software
            </p>
            <Link to="/Kambaz/Courses/1523/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kambaz/Courses/1511/Home">
              CS1511 Big Data Computing
            </Link>
            <p className="wd-dashboard-course-title">
              Working with large amounts of data
            </p>
            <Link to="/Kambaz/Courses/1511/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kambaz/Courses/1121/Home">
              CS1121 Software Engineering
            </Link>
            <p className="wd-dashboard-course-title">
              Different software development methods and techniques
            </p>
            <Link to="/Kambaz/Courses/1121/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kambaz/Courses/1623/Home">
              CS1623 Operating Systems
            </Link>
            <p className="wd-dashboard-course-title">
              Concepts of operating systems
            </p>
            <Link to="/Kambaz/Courses/1634/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}