import React, { useState, useEffect } from "react";
import { editPlant } from "../actions";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import * as yup from "yup";

const EditPlant = (props) => {
  const plantSchema = yup.object().shape({
    h2oFrequency: yup
      .number()
      .required("Required")
      .min(1, "Must be at least 1"),
    // image: yup.string().notRequired(),
    plant_nickname: yup.string().required("Required"),
    plant_species: yup.string().required("Required"),
  });

  const setFormErrors = (name, value) => {
    yup
      .reach(plantSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const { push } = useHistory();
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({
    user_id: props.user_id,
    plant_nickname: "",
    plant_species: "",
    h2oFrequency: "",
    // image: "",
  });
  const [plant, setPlant] = useState({
    user_id: props.user_id,
    plant_nickname: props.plant.plant_nickname,
    plant_species: props.plant.plant_species,
    h2ofrequency: props.plant.h2oFrequency
    // image: "",
  });

  useEffect(() => {
    const isValid = plantSchema.isValid(plant);
    isValid.then((res) => {
      setIsDisabled(!res);
    });
  }, [plant]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setPlant({
      ...plant,
      [e.target.name]: e.target.value,
    });
    setFormErrors(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(plant);
    props.editPlant(plant);
    push("/plantlist");
    setIsDisabled(true);
  };

  const { plant_nickname, plant_species, h2oFrequency } = plant;
  return (
    <div className="addplant-wrap">
      <h1 className="addplant-title">Add a Plant</h1>
      <form onSubmit={handleSubmit} className="addplant-form">
        <div>
          <label>Nickname</label>
          <input
            value={plant_nickname}
            onChange={handleChange}
            name="plant_nickname"
            type="text"
            autoComplete="off"
          />
          <p className="addplant-error">{errors.nickname}</p>
        </div>
        <div>
          <label>Species</label>
          <input
            value={plant_species}
            onChange={handleChange}
            name="plant_species"
            type="text"
            autoComplete="off"
          />
          <p className="addplant-error">{errors.species}</p>
        </div>
        <div>
          <label>Watering Frequency</label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              margin: "0px",
            }}
          >
            <h2 className="addplant-waterinputtitle">Every</h2>
            <input
              value={h2oFrequency}
              onChange={handleChange}
              name="h2ofrequency"
              type="number"
              autoComplete="off"
              style={{
                width: "3rem",
              }}
            />
            <h2 className="addplant-waterinputtitle">Day(s)</h2>
          </div>
          <p className="addplant-error">{errors.h2oFrequency}</p>
        </div>
        {/* <div>
          <label>Image URL</label>
          <input
            value={image}
            onChange={handleChange}
            name="image"
            type="text"
            autoComplete="off"
            placeholder="optional"
          />
          <p className="addplant-error">{errors.image}</p>
        </div> */}
        <div>
          <div
            className="btnContainer"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "40%",
              margin: "auto",
              marginTop: "1rem",
            }}
          >
            {/* <Link to={"/plantlist"}> */}
            <button disabled={isDisabled} type="submit" className="btn-dark">
              Add
            </button>
            {/* </Link> */}
            <Link to={`/plantlist`}>
              <button className="btn-danger">Cancel</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps, { editPlant })(EditPlant);
