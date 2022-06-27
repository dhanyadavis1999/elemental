import App from "./App.js";
import SignUp from "./SignUp.js";
import SignUp2 from "./SignUp2.js";
import Profile from "./Profile.js";
import Profilelist from "./Profilelist.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Navigation  () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/SignUp" element={<SignUp.js />}></Route>
        <Route path="/Registration" element={<SignUp2.js />}></Route>
        <Route path="/profile" element={<Profile.js />}></Route>
        <Route path="/profilelist" element={<Profilelist.js />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
};
export default Navigation;