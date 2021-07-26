//Import statements
import React from "react";
import "./App.css";
import Styled from "styled-components";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import Dummy from "./components/Dummy";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup.js";

//Main function
function App() {
  //Declare state variables

  //Return function
  return (
    <div className="app">
      <Route exact path="/" component={HomePage} />
      <Route path="/Signup" component={Signup} />
    </div>
  );
}

//Export statement
export default App;
