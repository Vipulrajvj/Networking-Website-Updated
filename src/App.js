import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import {login, logout, selectUser } from "./features/counter/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase"; 
import Widgets from "./Widgets";

//use "emmet.syntaxProfiles": {
// "javascript": "jsx"} in json settings for emmet autocomplete

// step 1 delete everything in App() when starting from start header to end header
//Step 3 create JS files for header sidebars get in the flowstate
//Step 6 after creating header , render here

function App() {
  const user = useSelector(selectUser); //V ump using redux to create a slice and creating a user constnt which can be used anytwhere inside he app
  //useSelector is the function adn selectUser is the variable we exported from userSlice.js

  //Step 25 after the login page is doene
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth => {
      if (userAuth) {
        //If user is logged in 
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //If user is logged out
        dispatch(logout());
      }
    }));
  }, []);

  return (
    <div className="app">
      {/* Header of the Page */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          {/* importing the header componenet here */}

          {/* App Body */}
          {/* App body has multiple parts so use flex 0.2 and more divisions to divide the Page into different parts */}

          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
