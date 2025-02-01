import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

export default function Labs() {
    return (
        <div id="wd-labs">
            <h1>Rahul Golla</h1>
            <h1>Labs</h1>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
                <Route path="Lab3" element={<Lab3 />} />
            </Routes>
            <h4>Anchor tag</h4>
            Please
            <a id="wd-lipsum" href="https://www.lipsum.com"> click here </a>
            to get dummy text<br />
            Get the github repository
            <a id="wd-github" href="https://github.com/Rahul7569444/kambaz-react-web-app"> here </a>
        </div>
    );
}