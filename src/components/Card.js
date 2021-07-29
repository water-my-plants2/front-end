import "../index.css";
import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { deletePlant } from "../actions";
import Timer from "./Timer";
import { gsap } from "gsap";

const handleEditPlant = (plant) => {
    console.log("handleEditPlant", plant);
    localStorage.setItem("wmp-plant_id", plant.plant_id);
    window.location.href = "/plantlist/edit";
    // return (<EditPlant id={localStorage.getItem("wmp-id")} plant={plant} />)
}


const Card = (props) => {
  
  const { plant_id, plant_nickname, plant_species, h2ofrequency, plant_image } =
  props.plant;
  
  const handleDeletePlant = (id) => {
    console.log("handleDeletePlant", id);
    localStorage.setItem("wmp-plant_id", id);
    props.deletePlant(id);
    // return (<EditPlant id={localStorage.getItem("wmp-id")} plant={plant} />)
  }

  return (
    <div class="plant-card">
      <div className="plant-inner-wrap">
        <div class="box">
          <img className="plantimg" src={plant_image} alt="plant"></img>
        </div>
        <p>{plant_nickname}</p>
        <p>{plant_species}</p>
        <div class="progress">

          <Timer h2ofrequency={h2ofrequency} plant_nickname={plant_nickname} />
        </div>
        
        <button class="edit" onClick={()=>{handleEditPlant(props.plant)}}> Edit </button>
        <button class="edit" onClick={()=>{handleDeletePlant(plant_id)}}> Delete </button>

      </div>
    </div>
  );
};
// export default Card;
const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps, { deletePlant })(Card);
