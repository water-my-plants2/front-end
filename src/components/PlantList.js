import Card from "./Card";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPlants } from "../actions/index";
import "../index.css";
import PlantListHeader from "./PlantListHeader";

const PlantList = (props) => {
  const plants = props.plants;
  const history = useHistory();
  const pathname = history.location.pathname;

  useEffect(() => {
    props.dispatch(fetchPlants());
  }, []);

  return (
    <div>
      <PlantListHeader />
      <div class="add-section">
        <Link to={pathname == "/plantlist" ? "plantlist/add" : "/plantlist"}>
          <button className="btn-primary btn-addplant">Add Plant</button>
        </Link>
      </div>
      <div class="card-section">
        {plants.map((plant) => (
          <Card key={plant.id} plant={plant} />
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
