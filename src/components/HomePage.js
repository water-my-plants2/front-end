
//Import statements
import React from "react";
import Styled from "styled-components";
import { NavLink, Switch, Route } from "react-router-dom";
import Dummy from "./Dummy";

//Input styled component
const BoxStyle = Styled.input
`
  width: 90%;
  // padding-left: 1%;
  // padding-right: %;
  height: 4vh;
  border: solid black 1px;
`;

//Main function, passing in props
function HomePage(props) 
{
  return (
    <div>
      {/* Header Div to contain login fields, login button, signup button*/}
      <div className="headerDiv">

        {/* Header */}
        <header>

          {/* H1 */}
          <div>
          <h2> Water My Plants</h2>
          </div>

          <div className = "labelDiv">
            
            {/* Login button */}
            <button exact to = "/Login" className = "ButtonStyle1" id = "login">  Log In </button>

            {/* Username label/input */}
            <label htmlFor = "username">
              <BoxStyle type = "text" id = "username" placeholder = "username" value = ""/>
            </label>

            {/* Password label/input */}
            <label htmlFor = "password">
              <BoxStyle type = "text" id = "password" placeholder = "password" value = "" />
            </label>

            {/* Sign up button */}
            <button to = "/Signup" className="ButtonStyle" id="signup"> Sign Up!</button>
          </div>

        </header>

      </div>

      <body>
        <div> message goes here </div>
      </body>

      <footer></footer>
    </div>
  );
}

export default HomePage;
