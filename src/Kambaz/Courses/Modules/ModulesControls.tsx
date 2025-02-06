import ModulesControls from "./ModulesControls";
import "../../styles.css";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GrLink } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import ModuleControlButtons from "./ModuleControlButtons";
export default function Modules() {
  return (
    <div className="me-4">
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <text className="ms-5">Introduction to the course</text>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <text className="ms-5">Learn what is Web Development</text>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              READING
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <text className="ms-5">Full Stack Developer - Chapter 1 - Introduction</text>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <text className="ms-5">Full Stack Developer - Chapter 2 - Creating User Interfacest</text>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              SLIDES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrLink className="me-2 fs-3" color="green"/>
              <text className="ms-2 text-danger">Introduction to Web Development</text>
              <FiExternalLink className="ms-2 fs-4" color="red"/>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrLink className="me-2 fs-3" color="green"/>
              <text className="ms-2 text-danger">Creating an HTTP server with Node.js</text>
              <FiExternalLink className="ms-2 fs-4" color="red"/>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrLink className="me-2 fs-3" color="green"/>
              <text className="ms-2 text-danger">Creating a React Application</text>
              <FiExternalLink className="ms-2 fs-4" color="red"/>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 2
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <text className="ms-5">Learn how to create user interfaces with HTML</text>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <text className="ms-5">Deploy the assignment to Netlify</text>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              SLIDES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrLink className="me-2 fs-3" color="green"/>
              <text className="ms-2 text-danger">Introduction to HTML and the DOM</text>
              <FiExternalLink className="ms-2 fs-4" color="red"/>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrLink className="me-2 fs-3" color="green"/>
              <text className="ms-2 text-danger">Formatting web content with Headings and Lists</text>
              <FiExternalLink className="ms-2 fs-4" color="red"/>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}