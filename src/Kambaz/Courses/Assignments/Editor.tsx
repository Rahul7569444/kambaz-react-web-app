export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b><br /></label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your web application running on Netlify.
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" name="Assignment Groups">
                <option value="option1">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" name="Display grade as">
                <option value="option1">Percentage</option>
                <option value="option2">Letter</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission type</label>
            </td>
            <td>
              <select id="wd-submission-type" name="submission type">
                <option value="option1">Online</option>
                <option value="option2">In person</option>
              </select><br /><br />
  
              <label>Online Entry Options</label><br />
  
              <input type="checkbox" name="check-genre" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label><br />
  
              <input type="checkbox" name="check-genre" id="wd-website-url" />
              <label htmlFor="wd-webiste-url">Website URL</label><br />
  
              <input type="checkbox" name="check-genre" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />
  
              <input type="checkbox" name="check-genre" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />
  
              <input type="checkbox" name="check-genre" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label><br />
              <input id="wd-assign-to" value="Everyone" /><br />
              <br />
  
              <label htmlFor="wd-due-date">Due</label><br />
              <input type="date" id="wd-due-date" value="2024-09-20" /><br />
              <br />
  
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available From</label><br />
                  <input type="date" id="wd-available-from" value="2024-09-20" />
                </td>
                <td>
                  <label htmlFor="wd-available-until">Until</label><br />
                  <input type="date" id="wd-available-until" value="2024-09-20" />
                </td>
              </tr>
            </td>
          </tr>
        </table>
        <hr/>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    );
  }