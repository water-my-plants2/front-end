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
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { plantReducer } from "./reducers/index";

// import Dummy from "./components/Dummy";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import PlantList from "./components/PlantList.js";
import HomePage from "./components/HomePage";
import { create } from "yup/lib/array";

const store = createStore(plantReducer);

//Main function
function App() {
  //Declare state variables

  //Return function
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/plantlist" component={PlantList} />
        </Provider>
      </Router>
    </div>
  );
}

//Export statement
export default App;
