import React, { useState, useEffect } from "react";
import "../../styles.css";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import DescControlButtons from "./DescControlButtons";
import AssignmentControls from "./AssignmentControls";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAssignment, deleteAssignment, setAssignments } from "./reducer";
import * as assignmentClient from "./client";
export default function Assignments() {
  const { cid } = useParams();
  const intialAssignment = {
    title: "New Assignment Title",
    course: cid,
    description: "New Description",
    points: "100",
    due: "2023-09-18T23:59",
    unlock: "2023-09-11T00:00"
  }
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  //const { assignment } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const fetchAllAssignments = async () => {
    const modules = await assignmentClient.fetchAssignmentsForCourse(cid as string);
    dispatch(setAssignments(modules));
  };
  useEffect(() => {
    fetchAllAssignments();
  }, []);

  const removeAssignment = async (assignmentId: string) => {
    await assignmentClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  }

  return (
    <div className="me-4">
      <AssignmentControls setAssignment={() => dispatch(setAssignment(intialAssignment))} /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentControlButtons />
            <span className="float-end border boder-dark rounded p-1">40% of Total</span>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments.map((assignment: any) => (
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="position-absolute top-50 start-0 translate-middle-y">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-2 fs-3" color="green" />
                </div>
                <div className="position-absolute top-50 start-50 translate-middle w-75">
                  <Link className="wd-assignment-link text-black link-underline link-underline-opacity-0"
                    to={`./${assignment._id}`} onClick={() => dispatch(setAssignment(assignment))}>
                    {assignment.title}
                  </Link>
                  <p><text className="text-danger">Multiple Modules</text> | <b>Not Available until</b> {assignment.unlock.split("T")[0]} at {assignment.unlock.split("T")[1]} | <b>Due</b> {assignment.due.split("T")[0]} at {assignment.due.split("T")[1]} | {assignment.points} pts</p>
                </div>
                <div className="position-absolute top-50 end-0 translate-middle-y">
                  <FaTrash className="text-danger me-2" onClick={(e) => {
                    e.preventDefault();

                    const confirmDelete = window.confirm(
                      "Are you sure you want to delete this assignment?"
                    );
                    if (confirmDelete) {
                      removeAssignment(assignment._id);
                    }
                  }} />
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