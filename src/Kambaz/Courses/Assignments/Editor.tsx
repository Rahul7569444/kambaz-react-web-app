import { useParams, useNavigate } from "react-router";
import { Link, useLocation } from "react-router-dom";
//import * as db from "../../Database";
import { addAssignment, setAssignment, setAssignments, updateAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as assignmentClient from "./client";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const { cid } = useParams();
  //const assignment = db.assignments;
  const { assignment } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSave = async () => {
    if (aid === "new") {
      await assignmentClient.createNewAssignment(assignment);
      dispatch(addAssignment({
        ...assignment
      }));
    } else {
      await assignmentClient.updateAssignment(assignment);
      dispatch(updateAssignment({
        ...assignment
      }));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };
  return (
    <div id="wd-assignments-editor" className="me-4">
      <div>
        <label htmlFor="wd-name" className="mb-2"><b>Assignment Name</b></label>
        <input id="wd-name" defaultValue={assignment.title} className="form-control mb-4" onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))} />
        <textarea id="wd-description" className="form-control mb-4" onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))} >
          {assignment.description}
        </textarea>
        <div className="row">
          <label htmlFor="wd-points" className="col"><span className="float-end me-2">Points</span></label>
          <input id="wd-points" defaultValue={assignment.points} className="form-control mb-3 col" onChange={(e) =>
            dispatch(setAssignment({ ...assignment, points: e.target.value }))
          } />
        </div>
        <div className="row">
          <label htmlFor="wd-group" className="col"><span className="float-end me-2">Assignment Group</span></label>
          <select id="wd-group" name="Assignment Groups" className="form-select mb-3 col">
            <option value="option1">ASSIGNMENTS</option>
          </select>
        </div>
        <div className="row">
          <label htmlFor="wd-display-grade-as" className="col"><span className="float-end me-2">Display Grade as</span></label>
          <select id="wd-display-grade-as" name="Display grade as" className="form-select mb-3 col">
            <option value="option1">Percentage</option>
            <option value="option2">Letter</option>
          </select>
        </div>
        <div className="row">
          <label htmlFor="wd-submission-type" className="col"><span className="float-end me-2">Submission type</span></label>
          <div className="border border-secondary rounded p-3 mb-3 col">
            <select id="wd-submission-type" name="submission type" className="form-select mb-3">
              <option value="option1">Online</option>
              <option value="option2">In person</option>
            </select>

            <label className="mb-2"><b>Online Entry Options</b></label><br />

            <input type="checkbox" name="check-genre" id="wd-text-entry" className="form-check-input me-2" />
            <label htmlFor="wd-text-entry" className="form-check-label mb-2">Text Entry</label><br />

            <input type="checkbox" name="check-genre" id="wd-website-url" className="form-check-input me-2" />
            <label htmlFor="wd-webiste-url" className="form-check-label mb-2">Website URL</label><br />

            <input type="checkbox" name="check-genre" id="wd-media-recordings" className="form-check-input me-2" />
            <label htmlFor="wd-media-recordings" className="form-check-label mb-2">Media Recordings</label><br />

            <input type="checkbox" name="check-genre" id="wd-student-annotation" className="form-check-input me-2" />
            <label htmlFor="wd-student-annotation" className="form-check-label mb-2">Student Annotation</label><br />

            <input type="checkbox" name="check-genre" id="wd-file-upload" className="form-check-input me-2" />
            <label htmlFor="wd-file-upload" className="form-check-label mb-2">File Uploads</label>
          </div>
        </div>
        <div className="row">
          <label htmlFor="wd-assign-to" className="col"><span className="float-end me-2">Assign</span></label>
          <div className="border border-secondary rounded p-3 mb-3 col">
            <label htmlFor="wd-assign-to"><b>Assign to</b></label><br />
            <input id="wd-assign-to" value="Everyone" className="form-control mb-2" />

            <label htmlFor="wd-due-date"><b>Due</b></label><br />
            <input type="datetime-local" id="wd-due-date" defaultValue={assignment.due} onChange={(e) =>
              dispatch(setAssignment({ ...assignment, due: e.target.value }))
            } className="form-control mb-2" />

            <div className="row">
              <div className="col">
                <label htmlFor="wd-available-from"><b>Available From</b></label>
                <input type="datetime-local" id="wd-available-from" defaultValue={assignment.unlock} className="form-control mb-2" onChange={(e) =>
                  dispatch(setAssignment({ ...assignment, unlock: e.target.value }))
                } />
              </div>
              <div className="col">
                <label htmlFor="wd-available-until"><b>Until</b></label>
                <input type="datetime-local" id="wd-available-until" defaultValue={assignment.due} className="form-control mb-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <button onClick={handleSave} className="btn btn-lg btn-danger me-1 float-end">Save</button>
      <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
        <button className="btn btn-lg btn-secondary me-1 float-end">Cancel</button>
      </Link>

    </div>
  );
}
