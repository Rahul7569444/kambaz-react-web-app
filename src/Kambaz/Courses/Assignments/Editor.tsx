export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><b>Assignment Name</b></label> <br /> <br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea
                id="wd-description"
                rows={5}
                cols={80}
                defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
Your full name and section, links to each of the lab assignments, link to the Kambaz application, links to all relevant source code repositories. The Kambaz application should include a link
to navigate back to the landing page.`}
            />
            <br /> <br />
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" type="number" value={100} />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group">
                                <option value="Assignments">ASSIGNMENTS</option>
                            </select>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-display-grade-as">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-display-grade-as">
                                <option value="Percentage">Percentage</option>
                            </select>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td>
                            <select id="wd-submission-type">
                                <option value="Online">Online</option>
                            </select>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top">
                            <label >Online Entry Options</label>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <input type="checkbox" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label><br />
                            <input type="checkbox" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label><br />
                            <input type="checkbox" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                            <input type="checkbox" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                            <input type="checkbox" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assign-to">Assign to</label>
                        </td>
                        <td>
                            <input id="wd-assign-to" value="Everyone" />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-due-date">Due</label>
                        </td>
                        <td>
                            <input id="wd-due-date" type="date" value="2024-05-13" />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right"> 
                            <label htmlFor="wd-available-from">Available from</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="wd-available-until">Until</label>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <input id="wd-available-from" type="date" value="2024-05-06" /> 
                            <input id="wd-available-until" type="date" value="2024-05-20" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <hr />
            
            <div style={{ textAlign: 'right' }}>
                <button>Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;<button>Save</button>
            </div>
        </div>
    );
}