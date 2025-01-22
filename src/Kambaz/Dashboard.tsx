// src/Kambaz/Dashboard.tsx
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> 
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.png" width={200} alt="React JS" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack Software Developer
            </p>
            <Link to="/Kambaz/Courses/1234/Home">Go</Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/nodejs.png" width={200} alt="Node.js" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5678/Home">
              CS5678 Node.js
            </Link>
            <p className="wd-dashboard-course-title">
              Backend Development
            </p>
            <Link to="/Kambaz/Courses/5678/Home">Go</Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/python.png" width={200} alt="Python" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/9101/Home">
              CS9101 Python
            </Link>
            <p className="wd-dashboard-course-title">
              Data Science and Machine Learning
            </p>
            <Link to="/Kambaz/Courses/9101/Home">Go</Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/jsp.png" width={200} alt="JavaScript" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/1121/Home">
              CS1121 JavaScript
            </Link>
            <p className="wd-dashboard-course-title">
              Frontend Web Development
            </p>
            <Link to="/Kambaz/Courses/1121/Home">Go</Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/java.png" width={200} alt="Java" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/3141/Home">
              CS3141 Java
            </Link>
            <p className="wd-dashboard-course-title">
              Object-Oriented Programming
            </p>
            <Link to="/Kambaz/Courses/3141/Home">Go</Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/csharp.png" width={200} alt="C#" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/1617/Home">
              CS1617 C#
            </Link>
            <p className="wd-dashboard-course-title">
              Desktop and Web Applications
            </p>
            <Link to="/Kambaz/Courses/1617/Home">Go</Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/flutter.png" width={200} alt="Flutter" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/1819/Home">
              CS1819 Flutter
            </Link>
            <p className="wd-dashboard-course-title">
              Mobile App Dev
            </p>
            <Link to="/Kambaz/Courses/1819/Home">Go</Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/rn.png" width={200} alt="React Native" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2021/Home">
              CS2021 React Native
            </Link>
            <p className="wd-dashboard-course-title">
              Native App Dev
            </p>
            <Link to="/Kambaz/Courses/2021/Home">Go</Link>
          </div>
        </div>
      </div>
    </div>
  );
}