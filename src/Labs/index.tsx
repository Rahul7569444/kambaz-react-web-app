import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";

export default function Labs () {
    return (
        <div id="wd-labs">
            <h1>Rahul Golla</h1>
            <p>Section - 1</p>
            <p>Github: <a href="https://github.com/Rahul7569444/kambaz-react-web-app">Link</a></p>
            <h1>Labs</h1>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="/Labs" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
                <Route path="Lab3" element={<Lab3 />} />
            </Routes>
        </div>
    );
}