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
// import Dummy from "./components/Dummy";
// import HomePage from "./components/HomePage";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import PlantList from "./components/PlantList.js";

//Main function
function App() {
  //Declare state variables

  //Return function
  return (
  <div className="App">
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/plantlist" component={PlantList} />
    </Router>
  </div>
  );
}

//Export statement
export default App;
