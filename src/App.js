//Import statements
import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";

// import Dummy from "./components/Dummy";
import Signup from "./components/Signup.js";
import PlantList from "./components/PlantList.js";
import HomePage from "./components/HomePage";
import AddPlant from "./components/AddPlant";
import EditPlant from "./components/EditPlant";
import PrivateRoute from './components/PrivateRoute';
import axios from 'axios';


//Main function
function App() {

  //Declare state variables
  const [sessionInfo, setSessionInfo] = useState({
    authenticated: false,
    id: 0,
  });

  // take user directly to plantlist if token and id exist in local storage
  if (localStorage.getItem("token") && localStorage.getItem("wmp-id")) {
    // setSessionInfo({authenticated: true, id: localStorage.getItem("wmp-id")})
    // window.location.href = "/plantlist"
  };

  const login = (credentials) => {
    console.log("login credentials: ", credentials);
    axios.post('https://watermyplants02.herokuapp.com/api/auth/login', credentials)
      .then(res => {console.log("login response.data.user_id: ", res.data.user_id); 
        if (res.statusText === "OK") {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("wmp-id", res.data.user_id);
 
          setSessionInfo({authenticated: true, id: res.data.user_id});
          window.location.href = "/plantlist";
        } else {
          localStorage.removeItem("token");
        }
        console.log("token", localStorage.getItem("token"));
     })
      .catch(err => {
        setSessionInfo({authenticated: false, id: 0});
        localStorage.removeItem("token");
        console.log("Login error: ", err);
      })
  };
  
  const logout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    setSessionInfo({authenticated: false, id: 0});
    window.location.href = "/";
  };

  const register = (values) => {
    console.log("register values: ", values);
    axios.post('https://watermyplants02.herokuapp.com/api/auth/register', values)
      .then(res => {console.log("register response: ", res); 
        // if (res.statusText === "OK") {
        //   localStorage.setItem("token", res.data.token);
          setSessionInfo({authenticated: false, id: res.data.user_id});
        //   window.location.href = "/plantlist";
        // } else {
        //   localStorage.removeItem("token");
        // }
        // console.log("token", localStorage.getItem("token"));
     })
      .catch(err => {
        setSessionInfo({authenticated: false, id: null});
        localStorage.removeItem("token");
        localStorage.removeItem("wmp-id");
        console.log("Login error: ", err);
      })
  };



  //Return function
  return (
    <div className="App">
      <Router>
        {!sessionInfo.authenticated ? <Link to="/">Login</Link> : <Link to="/" onClick={logout}>Logout</Link>}
        <Route exact path="/" render={(props)=> {
            if (localStorage.getItem('token') && localStorage.getItem("wmp-id")) {
              return <PlantList {...props} id={localStorage.getItem("wmp-id")}/>
            } else {
                return <HomePage {...props} login={login}/>
            }
          }} />
        <Route path="/signup" render={(props)=> {
            return <Signup {...props} register={register}/>
          }} />
        <Route path="/plantlist" render={(props)=> {
          if (localStorage.getItem('token')) {
            return <PlantList {...props} id={localStorage.getItem("wmp-id")}/>
          } else {
              return <Redirect to="/"/>
          }
        }} />
        <Route path="/plantlist/add" render={(props)=> {
          if (localStorage.getItem('token')) {
            return <AddPlant {...props} id={localStorage.getItem("wmp-id")}/>
          } else {
              return <Redirect to="/"/>
          }
        }} />
        <Route path="/plantlist/edit" render={(props)=> {
          if (localStorage.getItem('token')) {
            return <EditPlant {...props} id={localStorage.getItem("wmp-id")}/>
          } else {
              return <Redirect to="/"/>
          }
        }} />
        {/* <PrivateRoute path="/plantlist" component={PlantList} id={sessionInfo.id}/> */}
        {/* <PrivateRoute path="/plantlist/add" component={AddPlant} id={sessionInfo.id}/> */}
      </Router>
    </div>
  );
}

//Export statement

export default App;