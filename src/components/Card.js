import '../index.css'
import React, { useEffect, useState } from "react";
import {Link, useHistory} from "react-router-dom";


//Card function
const Card = (props) => 
{
    //Assign history
    const history = useHistory();
    
    //Define props
    const { id, nickname, species, h2oFrequency, image } = props.plant;

    //HandleClick
    const handleClick = (event) =>
    {
        //Dynamically assign id to url
        history.push(`/plantlist/edit/${id}`);

    }

    console.log("NICK >> ", nickname)
    //Return function
   return (
    <div className="plant-card">
        <div className ="box">
            <img src={image}></img>
        </div>
        <p>{nickname} -- {species}</p>
        <div className ="progress"> 
            <div>
                {h2oFrequency} days
            </div>
            <div >  {id}    </div>
        </div>

        {/* Edit button with click to open Edit Card*/}
        <button onClick = {handleClick} className="edit" id = {id} nickname = {nickname}> Edit </button>
    
    </div>
   )
}

//Export statement
export default Card;