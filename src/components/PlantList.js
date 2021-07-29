import Card from "./Card";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPlants } from "../actions/index";
import "../index.css";
import PlantListHeader from "./PlantListHeader";
import Footer from "./Footer";

const PlantList = (props) => {
  const user_id = localStorage.getItem("wmp-id");
  const { plants } = props;

  useEffect(() => {
    props.dispatch(fetchPlants(user_id));
  }, [user_id, props]);

  return (
    <div>
      <PlantListHeader />

      <div class="card-section">
        {plants.map((plant) => (
          <Card key={plant.plant_id} plant={plant} id={user_id} />
        ))}
      </div>
      <p>
        Note: The Notification Timer has been Sped up for Demonstration Purposes
      </p>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps)(PlantList);
