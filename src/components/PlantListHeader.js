import React from "react";
import "./styles/PlantListHeaderCss.css";
import { Link } from "react-router-dom";

function PlantListHeader(props) {
  return (
    <div>
      <header className="pl-header">
        <h1> Water My Plants</h1>{" "}
        <Link to="/">
          <button className="btn-danger pl-header-btn">Sign Out</button>
        </Link>
      </header>
    </div>
  );
}

export default PlantListHeader;
