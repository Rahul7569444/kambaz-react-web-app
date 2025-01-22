import Profile from "./Profile";
import Signin from "./Signin";
import { Navigate, Route, Routes } from 'react-router-dom';
import AccountNavigation from "./Navigation";
import Signup from "./Signup";



export default function Account() {
    return (
        <div id="wd-account-screen">
          <table>
            <tr>
              <td valign="top">
                <AccountNavigation />
              </td>
              <td valign="top">
                <Routes>
                  <Route path="/"
                         element={<Navigate to="/Kambaz/Account/Signin" />} />
                  <Route path="/Signin" element={<Signin />} />
                  <Route path="/Profile" element={<Profile />} />
                  <Route path="/Signup" element={<Signup />} />
                </Routes>
              </td>
            </tr>
          </table>
        </div>
    );    
}
  