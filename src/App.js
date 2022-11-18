import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import LogIn from "./components/Login/Login";
import { Profile } from "./pages/Profile";
import Posts from "./components/Posts";
import RequireAuth from "./components/RequireAuth";
import Registration from "./components/Registration/registration";

let userIsLoggedin = true;

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar isLoggedIn={userIsLoggedin} />
        {/* <LogIn /> */}
      </div>
      <Routes>
        {/* <RequireAuth> */}
          <Route path="/" />
          <Route path="/friends" />
          <Route path="/signup" />
          <Route path="/posts" element={<RequireAuth><Posts /></RequireAuth>} />
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>}/>
          <Route path="/logout" />
        {/* </RequireAuth> */}
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
