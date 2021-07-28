import "../index.css";
import React, { useState, useRef, useEffect } from "react";
import Timer from "./Timer";
import { gsap } from "gsap";

const Card = (props) => {
  const { plant_nickname, plant_species, h2ofrequency, plant_image } =
    props.plant;

  // let logoItem = useRef(null);

  // useEffect(() => {
  //   const duration = h2ofrequency * 24;
  //   gsap
  //     .timeline({ repeat: -1, repeatDelay: 2 })
  //     .to(logoItem, { width: "1%", duration: duration, ease: "none" });
  // }, []);

  return (
    <div class="plant-card">
      <div className="plant-inner-wrap">
        <div class="box">
          <img className="plantimg" src={plant_image}></img>
        </div>
        <p>{plant_nickname}</p>
        <p>{plant_species}</p>
        <div class="progress">
          <Timer h2ofrequency={h2ofrequency} plant_nickname={plant_nickname} />
          {/* <div
            className="dynamic-progress-bar"
            ref={(el) => {
              logoItem = el;
            }}
          >
            <p style={{ opacity: "0" }}>test</p>
          </div> */}
        </div>

        <button class="edit"> Edit </button>
      </div>
    </div>
  );
};

export default Card;
