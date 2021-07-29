import React from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import svg from "../flower.svg";

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
        <div className="header-blend"></div>
      </div>
      <div className="homepage-content">
        <div className="homepage-imgwrap">
          <img src={svg} className="homepage-img" alt="homepage" />
        </div>
        <div className="hero-text-wrap">
          <div className="hero-text-row1 row">
            <h3 className="hero-text">What</h3>
          </div>
          <div className="hero-text-row2 row">
            <h3 className="hero-text">You</h3>
          </div>
          <div className="hero-text-row3 row">
            <h3 className="hero-text">Water</h3>
          </div>
          <div className="hero-text-row4 row">
            <h3 className="hero-text">Grows...</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
