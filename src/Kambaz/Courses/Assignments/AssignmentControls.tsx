import { FaPlus } from "react-icons/fa6";
export default function AssignmentControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <input id="wd-search-assignment" className="form-control float-start w-50" type="search" placeholder="&#128269; Search.." />
            <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment</button>
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group</button>
        </div>
    );
}