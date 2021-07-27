import React from "react";
import Styled from "styled-components";
import { NavLink, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Dummy from "./Dummy";
import LoginForm from "./LoginForm";

//Input styled component
const BoxStyle = Styled.input`
    width: 90%;
    padding-left: 1%;
    padding-right: 1%;
    height: 2vh;

  `;

function HomePage(props) {
  return (
    <div>
      {/* Header Div to contain login fields, login button, signup button*/}
      <div className="headerDiv">
        {/* Header */}
        <header className="header-wrap">
          {/* H1 */}
          <div>
            <h1> Water My Plants</h1>{" "}
          </div>

          <LoginForm />

          {/* Sign up button */}
          <div className="signup">
            <NavLink exact to="/Signup" className="ButtonStyle" id="signup">
              {" "}
              Sign Up!{" "}
            </NavLink>
          </div>
        </header>

        {/* Switch route */}
        <Switch>
          <Route pathname="/Signup" component={Dummy} />
          <Route pathname="/Login" component={Dummy} />
        </Switch>
      </div>

      <body>
        <div> message goes here </div>
      </body>

      <footer></footer>
    </div>
  );
}

export default HomePage;
