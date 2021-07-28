import React from "react";
import "./styles/PlantListHeaderCss.css";
import { Link } from "react-router-dom";

const signOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("wmp-id");
}

function PlantListHeader(props) {
  return (
    <div>
      <header className="pl-header">
        <h1> Water My Plants</h1>{" "}
        <Link to="/">
          <button className="btn-danger pl-header-btn" onClick={signOut}>Sign Out</button>
        </Link>
      </header>
    </div>
  );
}

export default PlantListHeader;
