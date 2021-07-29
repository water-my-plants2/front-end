import React from "react";
import "./styles/PlantListHeaderCss.css";
import { Link } from "react-router-dom";

const signOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("wmp-id");
};

function PlantListHeader(props) {
  return (
    <div>
      <header
        className="pl-header"
        style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
      >
        <h1> Water My Plants</h1>{" "}
        <Link to="/" style={{ marginTop: "auto", marginBottom: "auto" }}>
          <button className="btn btn-danger btn-sm" onClick={signOut}>
            Sign Out
          </button>
        </Link>
      </header>
    </div>
  );
}

export default PlantListHeader;
