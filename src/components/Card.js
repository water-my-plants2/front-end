import '../index.css'
import React from "react";

const Card = (props) => {

    const { nickname, species, h2oFrequency, image } = props.plant;

   return (
    <div class="plant-card">
        <div class ="box">
            <img src={image}></img>
        </div>
        <p>{nickname} -- {species}</p>
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