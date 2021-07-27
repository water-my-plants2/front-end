//Import statements
import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

// import Dummy from "./components/Dummy";
import Signup from "./components/Signup.js";
import PlantList from "./components/PlantList.js";
import HomePage from "./components/HomePage";
import AddPlant from "./components/AddPlant";
import PrivateRoute from './components/PrivateRoute';
import axios from 'axios';


//Main function
function App() {

  //Declare state variables
  //temp!
  // localStorage.removeItem("token");
  console.log("App remove token - how many times?")

  const [sessionInfo, setSessionInfo] = useState({
    authenticated: false,
  });

  
  const login = (credentials) => {
    console.log("login credentials: ", credentials);
    axios.post('https://watermyplants02.herokuapp.com/api/auth/login', credentials)
      .then(res => {console.log("login response: ", res); 
        if (res.statusText === "OK") {
          localStorage.setItem("token", res.data.token);
          setSessionInfo({authenticated: true})
          window.location.href = "/plantlist";
        } else {
          localStorage.removeItem("token");
        }
        console.log("token", localStorage.getItem("token"));
     })
      .catch(err => {
        setSessionInfo({authenticated: false});
        localStorage.removeItem("token");
        console.log("Login error: ", err);
      })

  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    setSessionInfo({authenticated: false})
    window.location.href = "/";
  };


  //Return function
  return (
    <div className="App">
      <Router>
        {/* <Route exact path="/" component={HomePage} /> */}
        {console.log("about to test sessionInfo.authenticated", sessionInfo.authenticated)}
        {!sessionInfo.authenticated ? <Link to="/">Login</Link> : <Link to="/" onClick={logout}>Logout</Link>}
        <Route exact path="/" render={(props)=> {
            return <HomePage {...props} login={login}/>
          }} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/plantlist" component={PlantList} />
        <PrivateRoute path="/plantlist/add" component={AddPlant} />
      </Router>
    </div>
  );
}

//Export statement
export default App;
