import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/Navbar/NavBar'
import NotFound from "./components/NotFound/NotFound";
import LogIn from "./components/Login/Login";
import { Profile } from "./pages/Profile";
import Posts from "./components/Posts";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        {/* <LogIn /> */}
      </div>
      <Routes>
        {/* <RequireAuth> */}
        <Route path="/" />
        <Route path="/friends" />
        <Route path="/posts" element={<Posts />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" />
        {/* </RequireAuth> */}
        <Route path="/login" element={<LogIn />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
