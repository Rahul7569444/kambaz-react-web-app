// import { useParams } from "react-router-dom";

export default function Piazza() {
  
    return (
      <div className="p-4">
        <h3 className="mb-4">Piazza Discussion Forum</h3>
        <p className="mb-3">
          This course uses Piazza for class discussions. Rather than emailing questions to the teaching staff, 
          please post your questions on Piazza where they can be answered by your fellow students, TAs, and instructors.
        </p>
        <div className="d-grid gap-2 col-md-6 mx-auto">
          <a 
            href="https://piazza.com/class" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Go to Piazza
          </a>
        </div>
        
        <div className="mt-4 border-top pt-3">
          <h5>Piazza Guidelines:</h5>
          <ul>
            <li>Check existing posts before creating a new one</li>
            <li>Use appropriate tags for your questions</li>
            <li>Be respectful and professional in all communications</li>
            <li>Do not post full solutions to assignments</li>
          </ul>
        </div>
      </div>
    );
  } 