//libraries
import React from "react";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useSelector } from 'react-redux';
import {selectUserToken} from '../src/store/slices/loginUser'



//components
import NavBar from "./components/Navbar/NavBar";

//pages
import NotFound from "./components/NotFound/NotFound";
import LogIn from "./pages/Login/Login";
import { Profile } from "./pages/Profile/Profile";
import { ProfileEdit } from "./pages/ProfileEdit/ProfileEdit";
import Posts from "./components/Posts";
import { FindFriends } from "./pages/FindFriends";

import RequireAuth from "./components/RequireAuth";
import Registration from "./pages/Login/Registration/registration";
import RegValidation from "./pages/Login/RegValidation/validation";
import RegSuccess from "./pages/Login/RegSucces/succes";



console.log(selectUserToken)


function App() {

  // const [token, setToken] = useState(false);

  // if(selectUserToken !== ''){
  //   setToken(true)
  // } else {
  //   setToken(false)
  // }

  let userIsLoggedin = true;

  return (
    <BrowserRouter>
      {/* { userIsLoggedin &&   */}
      <div>
        <NavBar isLoggedIn={userIsLoggedin} />
      </div>
         {/* } */}

      <Routes>
        {/* <RequireAuth> */}
        <Route path="/" />
        <Route
          path="/find-friends"
          element={
            <RequireAuth>
              <FindFriends />
            </RequireAuth>
          }
        />
        <Route path="/signup" />
        <Route
          path="/posts"
          element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile></Profile>
            </RequireAuth>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <RequireAuth>
              <ProfileEdit />
            </RequireAuth>
          }
        />
        <Route path="/logout" />
        {/* </RequireAuth> */}
        <Route path="/registration/validation" element={<RegValidation />} />
        <Route path="/registration/succes" element={<RegSuccess />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login/" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
