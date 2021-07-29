//Import statements
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

import Signup from "./components/Signup.js";
import PlantList from "./components/PlantList.js";
import HomePage from "./components/HomePage";
import AddPlant from "./components/AddPlant";
import EditPlant from "./components/EditPlant";

import axios from "axios";

//Main function
function App() {
  //Declare state variables

  const login = (credentials) => {
    axios
      .post("https://watermyplants02.herokuapp.com/api/auth/login", credentials)
      .then((res) => {
        console.log("login response.data.user_id: ", res.data.user_id);
        if (res.statusText === "OK") {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("wmp-id", res.data.user_id);

          window.location.href = "/plantlist";
        } else {
          localStorage.removeItem("token");
        }
      })
      .catch((err) => {
        localStorage.removeItem("token");
        console.log("Login error: ", err);
      });
  };

  const register = (values) => {
    console.log("register values: ", values);
    axios
      .post("https://watermyplants02.herokuapp.com/api/auth/register", values)
      .then((res) => {
        console.log("register response: ", res);
      })
      .catch((err) => {
        localStorage.removeItem("token");
        localStorage.removeItem("wmp-id");
        console.log("Login error: ", err);
      });
  };

  //Return function
  return (
    <div className="App">
      <Router>

        <Route
          exact
          path="/"
          render={(props) => {
            if (
              localStorage.getItem("token") &&
              localStorage.getItem("wmp-id")
            ) {
              return (
                <PlantList {...props} id={localStorage.getItem("wmp-id")} />
              );
            } else {
              return <HomePage {...props} login={login} />;
            }
          }}
        />
        <Route
          path="/signup"
          render={(props) => {
            return <Signup {...props} register={register} />;
          }}
        />
        <Route
          path="/plantlist"
          render={(props) => {
            if (localStorage.getItem("token")) {
              return (
                <PlantList {...props} id={localStorage.getItem("wmp-id")} />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          path="/plantlist/add"
          render={(props) => {
            if (localStorage.getItem("token")) {
              return (
                <AddPlant {...props} id={localStorage.getItem("wmp-id")} />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          path="/plantlist/edit"
          render={(props) => {
            if (
              localStorage.getItem("token") &&
              localStorage.getItem("wmp-plant_id")
            ) {
              return (
                <EditPlant {...props} id={localStorage.getItem("wmp-id")} />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
     </Router>
    </div>
  );
}

//Export statement

export default App;
