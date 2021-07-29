import React from "react";
import "./styles/PlantListHeaderCss.css";
import { Link, useHistory } from "react-router-dom";

const signOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("wmp-id");
};

function PlantListHeader(props) {
  const history = useHistory();
  const pathname = history.location.pathname;
  return (
    <div>
      <header
        className="pl-header"
        style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
      >
        <h1> Water My Plants</h1>
        <div className="pl-header-right">
          <div className="add-section">
            <Link
              to={pathname === "/plantlist" ? "plantlist/add" : "/plantlist"}
            >
              <button className="btn btn-primary">Add Plant</button>
            </Link>
          </div>
          <div className="pl-header-signout">
            <Link to="/" style={{ marginTop: "auto", marginBottom: "auto" }}>
              <button className="btn btn-danger" onClick={signOut}>
                Sign Out
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="header-blend"></div>
    </div>
  );
}

export default PlantListHeader;
