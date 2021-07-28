import "../index.css";
import React, { useState, useRef, useEffect } from "react";
import Timer from "./Timer";
import { gsap } from "gsap";

const handleEditPlant = (plant) => {
  console.log("handleEditPlant plant: ", plant);
}

const Card = (props) => {

  const { plant_nickname, plant_species, h2ofrequency, plant_plant_image } =
    props.plant;



  return (
    <div class="plant-card">
      <div className="plant-inner-wrap">
        <div class="box">
          <img className="plantimg" src={plant_plant_image}></img>
        </div>
        <p>{plant_nickname}</p>
        <p>{plant_species}</p>
        <div class="progress">

          <Timer h2ofrequency={h2ofrequency} plant_nickname={plant_nickname} />
        </div>
        

          
        <button class="edit" onClick={()=>{handleEditPlant(props.plant)}}> Edit </button>

      </div>
    </div>
  );
};

export default Card;
