import '../index.css'
import React from "react";

const Card = (props) => {

    const { plant_nickname, plant_species, h2oFrequency } = props.plant;

   return (
    <div class="plant-card">
        <div class ="box">
            {/* <img src={image} alt="plant"></img> */}
        </div>
        <p>{plant_nickname} -- {plant_species}</p>
        <div class="progress"> 
            <div>
                {h2oFrequency} days
            </div>
        </div>
    <button class="edit"> Edit </button>
</div>
   )
}

export default Card;