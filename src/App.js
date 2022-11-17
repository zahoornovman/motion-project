import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import NavBar from './components/Navbar/NavBar'
import NotFound from "./components/NotFound/NotFound";
import LogIn from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <NavBar /> */}
        <LogIn />
      </div>
      <Routes>
        {/* <RequireAuth> */}
        <Route path="/" />
        <Route path="/friends" />
        <Route path="/posts" />
        <Route path="/profile" />
        <Route path="/logout" />
        {/* </RequireAuth> */}
        <Route path="/login" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
