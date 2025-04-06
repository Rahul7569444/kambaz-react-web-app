// import { useParams } from "react-router-dom";

export default function Zoom() {
    // Removed unused cid variable
    
    // In a real application, you might fetch this data based on the course ID
    const zoomMeetings = [
      {
        id: 1,
        title: "Weekly Lecture",
        day: "Monday",
        time: "10:00 AM - 11:50 AM EST",
        link: "https://northeastern.zoom.us/j/12345678901",
        password: "123456"
      },
      {
        id: 2,
        title: "Office Hours",
        day: "Wednesday",
        time: "2:00 PM - 4:00 PM EST",
        link: "https://northeastern.zoom.us/j/98765432109",
        password: "654321"
      }
    ];
  
    return (
      <div className="p-4">
        <h3 className="mb-4">Zoom Meetings</h3>
        <p className="mb-3">
          This course uses Zoom for virtual lectures and office hours. You can join the meetings using the links below.
        </p>
        
        <div className="row">
          {zoomMeetings.map(meeting => (
            <div className="col-md-6 mb-4" key={meeting.id}>
              <div className="card h-100">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">{meeting.title}</h5>
                </div>
                <div className="card-body">
                  <p><strong>Day:</strong> {meeting.day}</p>
                  <p><strong>Time:</strong> {meeting.time}</p>
                  <p><strong>Password:</strong> {meeting.password}</p>
                  <div className="d-grid">
                    <a 
                      href={meeting.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-success"
                    >
                      Join Meeting
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 border-top pt-3">
          <h5>Zoom Guidelines:</h5>
          <ul>
            <li>Please mute your microphone when not speaking</li>
            <li>Use the "Raise Hand" feature to ask questions</li>
            <li>Keep your camera on when possible</li>
            <li>Be respectful in the chat</li>
          </ul>
        </div>
      </div>
    );
  } 