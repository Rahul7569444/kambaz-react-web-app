import { Link } from "react-router-dom";
export default function LandingPage() {
    return (
        <div className="d-flex justify-content-center">
            <div>
            <h1>Rahul Golla</h1>
            <h3>NUID: 002322414</h3>
            <h3>CS5610 Spring 2025</h3>
            <h3>Links</h3>
            <ul className="list-group">
                <li className="list-group-item"><Link to={"/Labs"}>Labs</Link></li>
                <li className="list-group-item"><Link to={"/Kambaz"}>Kambaz</Link></li>
                <li className="list-group-item"><Link to={"https://github.com/Rahul7569444/kambaz-react-web-app"}>Github repo</Link></li>
            </ul>
            </div>
        </div>
    );
}