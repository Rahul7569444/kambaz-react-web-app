import { createSlice } from "@reduxjs/toolkit";
//import { assignments } from "../../Database";

const initialState = {
    assignments: [],
    assignment: {
        title: "",
        course: "",
        description: "",
        unlock: "",
        due: "",
        points: 0
    }
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
            const newAssignment: any = [
                ...state.assignments,
                {
                    ...action.payload,
                    _id: new Date().getTime().toString(),
                }]
            state.assignments = newAssignment;
            state.assignment = {
                title: "",
                course: "",
                description: "",
                unlock: "",
                due: "",
                points: 0
            }
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== action.payload
            );
        },
        updateAssignment: (state, {payload: assignment}) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        }
    },
});

export const { addAssignment, deleteAssignment, setAssignment, setAssignments, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;