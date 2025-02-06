import "../../styles.css";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import DescControlButtons from "./DescControlButtons";
import AssignmentControls from "./AssignmentControls";
export default function Assignments() {
  return (
    <div>
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
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="position-absolute top-50 start-0 translate-middle-y">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-2 fs-3" color="green" />
              </div>
              <div className="position-absolute top-50 start-50 translate-middle w-75">
                <a className="wd-assignment-link text-black link-underline link-underline-opacity-0"
                  href="#/Kambaz/Courses/1234/Assignments/123">
                  A1 - ENV + HTML
                </a>
                <p><text className="text-danger">Multiple Modules</text> | <b>Not Available unitl</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</p>
              </div>
              <div className="position-absolute top-50 end-0 translate-middle-y">
                <DescControlButtons />
              </div>
              <br /><br /><br />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="position-absolute top-50 start-0 translate-middle-y">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-2 fs-3" color="green" />
              </div>
              <div className="position-absolute top-50 start-50 translate-middle w-75">
                <a className="wd-assignment-link text-black link-underline link-underline-opacity-0"
                  href="#/Kambaz/Courses/1234/Assignments/123">
                  A2 - CSS + BOOTSTRAP
                </a>
                <p><text className="text-danger">Multiple Modules</text> | <b>Not Available unitl</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</p>
              </div>
              <div className="position-absolute top-50 end-0 translate-middle-y">
                <DescControlButtons />
              </div>
              <br /><br /><br />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="position-absolute top-50 start-0 translate-middle-y">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-2 fs-3" color="green" />
              </div>
              <div className="position-absolute top-50 start-50 translate-middle w-75">
                <a className="wd-assignment-link text-black link-underline link-underline-opacity-0"
                  href="#/Kambaz/Courses/1234/Assignments/123">
                  A3 - JAVASCRIPT + REACT
                </a>
                <p><text className="text-danger">Multiple Modules</text> | <b>Not Available unitl</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts</p>
              </div>
              <div className="position-absolute top-50 end-0 translate-middle-y">
                <DescControlButtons />
              </div>
              <br /><br /><br />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}