//Import statements
import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
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
