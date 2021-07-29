import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Dummy from "./Dummy";
import LoginForm from "./LoginForm";

function HomePage(props) {
  return (
    <div>
      <div className="headerDiv">
        <header className="header-wrap">
          <div>
            <h1 className="login-title"> Water My Plants</h1>{" "}
          </div>

          <LoginForm login={props.login} />
          <div>
            <NavLink exact to="/Signup" className="ButtonStyle" id="signup">
              <button className="btn btn-success">Sign Up!</button>
            </NavLink>
          </div>
        </header>
        <Switch>
          <Route pathname="/Signup" component={Dummy} />
          <Route pathname="/Login" component={Dummy} />
        </Switch>
      </div>
      <body>
        <div> message goes here </div>
      </body>
    </div>
  );
}

export default HomePage;
