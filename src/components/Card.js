import "../index.css";
import React from "react";

const Card = (props) => {
  const { plant_nickname, plant_species, h2oFrequency, image } = props.plant;

  return (
    <div class="plant-card">
      <div className="plant-inner-wrap">
        <div class="box">
          <img className="plantimg" src={image}></img>
        </div>
        <p>{plant_nickname}</p>
        <p>{plant_species}</p>

        <div class="progress">
          <div>{h2oFrequency} days</div>
        </div>
        <button class="edit"> Edit </button>
      </div>
    </div>
  );
};

export default Card;
