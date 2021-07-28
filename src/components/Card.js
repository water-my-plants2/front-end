import "../index.css";
import React from "react";

const handleEditPlant = (plant) => {
  console.log("handleEditPlant plant: ", plant);
}

const Card = (props) => {
  const { plant_nickname, plant_species, h2ofrequency, image } = props.plant;

  return (
    <div class="plant-card">
      <div className="plant-inner-wrap">
        <div class="box">
          <img className="plantimg" src={image}></img>
        </div>
        <p>{plant_nickname}</p>
        <p>{plant_species}</p>

        <div class="progress">
          <div>{h2ofrequency} days</div>
        </div>
        <button class="edit" onClick={()=>{handleEditPlant(props.plant)}}> Edit </button>
      </div>
    </div>
  );
};

export default Card;
