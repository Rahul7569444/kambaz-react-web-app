import Labs from './Labs';
import Kambaz from './Kambaz';
import LandingPage from './LandingPage';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import store from "./Kambaz/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="LandingPage"/>}/>
            <Route path='/Labs/*' element={<Labs/>} />
            <Route path="/Kambaz/*" element={<Kambaz />} />
            <Route path='/LandingPage' element={<LandingPage/>} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;