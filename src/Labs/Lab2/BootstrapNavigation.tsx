import { Button, Card } from "react-bootstrap";

export default function BootstrapNavigation() {
    return (
        <div>
            <div id="wd-css-navigating-with-tabs">
                <h2>Tabs</h2>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>

            <div id="wd-css-navigating-with-cards">
  <h2>
    Cards
  </h2>
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="images/starship.jpg" />
    <Card.Body>
      <Card.Title>Stacking Starship</Card.Title>
      <Card.Text>
        Stacking the most powerful rocket in history. Mars or bust!
      </Card.Text>
      <Button variant="primary">Boldly Go</Button>
    </Card.Body>
  </Card>
</div>

        </div>
    );
}