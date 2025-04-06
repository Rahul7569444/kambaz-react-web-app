import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addEnrollment, deleteEnrollment, setEnrollments } from "./Courses/People/reducer";
import * as enrollmentClient from "./Courses/People/client";
export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }
) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();

  //const [enrollments, setEnrollments] = useState<any[]>([]);
  const fetchEnrollments = async () => {
    let enrollments = [];
    try {
      enrollments = await enrollmentClient.fetchAllEnrollments();
    } catch (error) {
      console.error(error);
    }
    dispatch(setEnrollments(enrollments));
  };
  useEffect(() => {
    fetchEnrollments();
  }, [currentUser]);

  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course) =>
      enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id &&
          enrollment.course === course._id
      )
    );

  const isEnrolled = (courseId: any) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id &&
        enrollment.course === courseId
    );
  };

  const removeEnrollment = async (enrollment: any) => {
    await enrollmentClient.deleteEnrollment(enrollment._id);
    dispatch(deleteEnrollment(enrollment));
  }

  const makeEnrollment = async (enrollment: any) => {
    await enrollmentClient.createNewEnrollment(enrollment);
    dispatch(addEnrollment(enrollment));
  }

  const getEnrollmentId = (userId: string, courseId: string): string | null => {
    const enrollment = enrollments.find(
      (enrollment: any) =>
        enrollment.user === userId &&
        enrollment.course === courseId
    );

    return enrollment ? enrollment._id : null;
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-danger">Dashboard</h1> <hr />

      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse} > Add </button>
            <button className="btn btn-warning float-end me-2"
              onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5><hr /><br />
          <input value={course.name} className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <textarea value={course.description} className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })} /><br />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({filteredCourses.length})
        {currentUser.role === "STUDENT" && (
          <button
            className="btn btn-primary float-end"
            onClick={toggleShowAllCourses}
          >
            {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
          </button>
        )}
      </h2> <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">

                <img src={`images/${course.image}`} width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    {course.name} </h5>
                  <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                    {course.description} </p>

                  {currentUser.role === "FACULTY" && isEnrolled(course._id) && (
                    <>
                      <Link to={`/Kambaz/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <button className="btn btn-primary"> Go </button>
                      </Link>
                      <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete
                      </button>

                      <button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                      </button>
                    </>
                  )}

                  {currentUser.role === "STUDENT" && isEnrolled(course._id) && (
                    <button id="wd-unenroll" className="btn btn-danger me-2 float-end"
                      onClick={() => removeEnrollment({_id: getEnrollmentId(currentUser._id, course._id), user: currentUser._id, course: course._id })}>
                      Unenroll
                    </button>
                  )}

                  {currentUser.role === "STUDENT" && !isEnrolled(course._id) && (
                    <button id="wd-enroll" className="btn btn-success me-2 float-end"
                      onClick={() => makeEnrollment({ user: currentUser._id, course: course._id })}>
                      Enroll
                    </button>
                  )}

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}