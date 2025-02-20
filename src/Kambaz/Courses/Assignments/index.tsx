import "../../styles.css";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import DescControlButtons from "./DescControlButtons";
import AssignmentControls from "./AssignmentControls";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link,  } from "react-router-dom";
export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div className="me-4">
      <AssignmentControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentControlButtons />
            <span className="float-end border boder-dark rounded p-1">40% of Total</span>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
              <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="position-absolute top-50 start-0 translate-middle-y">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-2 fs-3" color="green" />
              </div>
              <div className="position-absolute top-50 start-50 translate-middle w-75">
                <Link className="wd-assignment-link text-black link-underline link-underline-opacity-0"
                  to={`./${assignment._id}`}>
                  {assignment.title}
                </Link>
                <p><text className="text-danger">Multiple Modules</text> | <b>Not Available until</b> {assignment.unlock.split("T")[0]} at {assignment.unlock.split("T")[1]} | <b>Due</b> {assignment.due.split("T")[0]} at {assignment.due.split("T")[1]} | {assignment.points} pts</p>
              </div>
              <div className="position-absolute top-50 end-0 translate-middle-y">
                <DescControlButtons />
              </div>
              <br /><br /><br />
            </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}