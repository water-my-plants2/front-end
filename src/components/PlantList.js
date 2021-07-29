import Card from "./Card";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPlants } from "../actions/index";
import "../index.css";
import PlantListHeader from "./PlantListHeader";

const PlantList = (props) => {
  const user_id = localStorage.getItem("wmp-id");
  const { plants } = props;
  const history = useHistory();
  const pathname = history.location.pathname;

  useEffect(() => {
    props.dispatch(fetchPlants(user_id));
  });

  return (
    <div>
      <PlantListHeader />
      <div class="add-section">
        <Link to={pathname === "/plantlist" ? "plantlist/add" : "/plantlist"}>
          <button className="btn-primary btn-addplant">Add Plant</button>
        </Link>
      </div>
      <div class="card-section">
        {plants.map((plant) => (
          <Card key={plant.plant_id} plant={plant} id={user_id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps)(PlantList);
