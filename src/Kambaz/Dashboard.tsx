
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-danger">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/course.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1234 React JS
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a href="#/Kambaz/Courses/1234/Home">
                  <button className="btn btn-primary">Go</button>
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/course.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1312 Welcome to Java
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Object oriented programming with Java
                </p>
                <a href="#/Kambaz/Courses/1234/Home">
                  <button className="btn btn-primary">Go</button>
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/course.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1411 Machine Learning
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Introduction to Machine Learning
                </p>
                <a href="#/Kambaz/Courses/1234/Home">
                  <button className="btn btn-primary">Go</button>
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/course.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1523 Intro to Analytics
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Learning concepts of data analysis and related software
                </p>
                <a href="#/Kambaz/Courses/1234/Home">
                  <button className="btn btn-primary">Go</button>
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/course.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1511 Big Data Computing
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Working with large amounts of data
                </p>
                <a href="#/Kambaz/Courses/1234/Home">
                  <button className="btn btn-primary">Go</button>
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/course.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1121 Software Engineering
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Different software development methods and techniques
                </p>
                <a href="#/Kambaz/Courses/1234/Home">
                  <button className="btn btn-primary">Go</button>
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/course.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1623 Operating Systems
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Concepts of operating systems
                </p>
                <a href="#/Kambaz/Courses/1234/Home">
                  <button className="btn btn-primary">Go</button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}