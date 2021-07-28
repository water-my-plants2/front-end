import "../index.css";
import React from "react";

const Card = (props) => {
  const { plant_nickname, plant_species, h2ofrequency, plant_image } =
    props.plant;

  // const timer = setInterval(() => console.log(h2oFrequency), 1000);
  console.log(plant_nickname, h2ofrequency);
  const count = h2ofrequency;

  return (
    <div class="plant-card">
      <div className="plant-inner-wrap">
        <div class="box">
          <img className="plantimg" src={plant_image}></img>
        </div>
        <p>{plant_nickname}</p>
        <p>{plant_species}</p>

        <div class="progress">
          <div>{h2ofrequency} days</div>
        </div>
        <button class="edit"> Edit </button>
      </div>
    </div>
  );
};

export default Card;
