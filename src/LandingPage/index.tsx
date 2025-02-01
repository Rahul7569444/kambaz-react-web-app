import { Link } from "react-router-dom";
export default function LandingPage() {
    return (
        <div>
            <h1>Rahul Golla</h1>
            <h2>NUID: 002322414</h2>
            <h2>CS5610 Spring 2025</h2>
            <h2>Links</h2>
            <ul>
                <li><Link to={"/Labs"}>Labs</Link></li>
                <li><Link to={"/Kambaz"}>Kambaz</Link></li>
                <li><Link to={"https://github.com/Rahul7569444/kambaz-react-web-app"}>Github repo</Link></li>
            </ul>
        </div>
    );
}