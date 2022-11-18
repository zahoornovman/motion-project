import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//components
import NavBar from './components/Navbar/NavBar'

//pages
import NotFound from "./components/NotFound/NotFound";
import LogIn from "./components/Login/Login";
import { Profile } from "./pages/Profile";
import Posts from "./components/Posts";
import { FindFriends } from "./pages/FindFriends";

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
        <Route path="/find-friends" element = {<FindFriends/>} />
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
