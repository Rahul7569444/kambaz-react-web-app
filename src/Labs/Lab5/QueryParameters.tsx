// import React from "react";
// const removeServer = "";

export default function QueryParameters() {
    return (
        <div id="wd-query-parameters">
            <h3>Query Parameters</h3>
            <input id="wd-query-parameter-a"
                className="form-control mb-2"
                defaultValue="34" type="number"
                onChange={() => {}} />
            <input id="wd-query-parameter-b"
                className="form-control mb-2"
                defaultValue="23" type="number"
                onChange={() => {}} />
            <a id="wd-query-parameter-add" className="btn btn-primary me-2"
                href={`${import.meta.env.VITE_REMOTE_SERVER}/lab5/calculator?operation=add&a=34&b=23`}>
                Add 34 + 23
            </a>
            <a id="wd-query-parameter-subtract" className="btn btn-primary me-2"
                href={`${import.meta.env.VITE_REMOTE_SERVER}/lab5/calculator?operation=subtract&a=34&b=23`}>
                Subtract 34 - 23
            </a>
            <a id="wd-query-parameter-multiply" className="btn btn-primary me-2"
                href={`${import.meta.env.VITE_REMOTE_SERVER}/lab5/calculator?operation=multiply&a=34&b=23`}>
                Multiply 34 x 23
            </a>
            <a id="wd-query-parameter-divide" className="btn btn-primary me-2"
                href={`${import.meta.env.VITE_REMOTE_SERVER}/lab5/calculator?operation=divide&a=34&b=23`}>
                Divide 34 / 23
            </a>
            <hr />
        </div>
    );
}