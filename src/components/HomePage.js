import React from "react";
import Styled from "styled-components";
import { NavLink, Switch, Route } from "react-router-dom";
import Dummy from "./Dummy";

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
        <header>
          {/* H1 */}
          <div>
            <h1> Water My Plants</h1>{" "}
          </div>

          {/* Login Button */}
          <div className="login">
            <NavLink exact to="/Login" className="ButtonStyle" id="login"style={{ textDecoration: 'none', color:"white"}}>
              {" "}
              {" "}
              Log In
            </NavLink>
          </div>

          <div className="labelDiv">
            {/* Username label/input */}
            <label htmlFor="username">
              <BoxStyle
                type="text"
                id="username"
                placeholder="username"
                value=""
              />
            </label>

            {/* Password label/input */}
            <label htmlFor="password">
              <BoxStyle
                type="text"
                id="password"
                placeholder="password"
                value=""
              />
            </label>
          </div>

          {/* Sign up button */}
          <div className="signup">
            <NavLink exact to="/Signup" className="ButtonStyle" id="signup"style={{ textDecoration: 'none', color:"white"}}>
              {" "}
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
