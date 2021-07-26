import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PlantList from "./components/PlantList";

function App() {
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

export default App;
