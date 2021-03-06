import React, { useState, useEffect } from "react";
import { editPlant } from "../actions";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import * as yup from "yup";

const EditPlant = (props) => {
  const wmp_plant_id = localStorage.getItem("wmp-plant_id");
  const myPlant = props.plants.filter(
    (plant) => plant.plant_id === parseInt(wmp_plant_id, 10)
  );
  console.log("EditPlant props: ", props);
  console.log("EditPlant wmp_plant_id: ", props);
  console.log("EditPlant myPlant: ", myPlant);

  const plantSchema = yup.object().shape({
    h2ofrequency: yup
      .number()
      .typeError("Must be a Number")
      .required("Required")
      .test("GreaterThanZero", "Must be Greater Than 0", function (value) {
        return value > 0;
      })
      .test("isInteger", "Must be an Integer", function (value) {
        return Number.isInteger(value);
      }),
    plant_image: yup.string().notRequired(),
    plant_nickname: yup.string().required("Required"),
    plant_species: yup.string().required("Required"),
  });

  console.log("EditPlant props: ", props);
  console.log("EditPlant wmp_plant_id: ", wmp_plant_id);
  console.log("EditPlant myPlant: ", myPlant);

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
    user_id: props.id,
    plant_nickname: "",
    plant_species: "",
    h2ofrequency: "",
    plant_image: "",
  });
  const [plant, setPlant] = useState({
    user_id: props.id,
    plant_nickname: myPlant[0].plant_nickname,
    plant_species: myPlant[0].plant_species,
    h2ofrequency: myPlant[0].h2ofrequency,
    plant_image: myPlant[0].plant_image,
  });

  useEffect(() => {
    const isValid = plantSchema.isValid(plant);
    isValid.then((res) => {
      setIsDisabled(!res);
    });
  }, [plant, plantSchema]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setPlant({
      ...plant,
      [e.target.name]: e.target.value,
    });
    setFormErrors(name, value);
  };

  const prepForPayload = (plant) => {
    return setPlant({
      user_id: props.user_id,
      plant_nickname: plant.plant_nickname,
      plant_species: plant.plant_species,
      h2ofrequency: parseInt(plant.h2ofrequency, 10),
      plant_image: plant.plant_image,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    prepForPayload(plant);
    props.editPlant(plant, wmp_plant_id);
    push("/plantlist");
    setIsDisabled(true);
    localStorage.removeItem("wmp-plant_id");
  };

  const { plant_nickname, plant_species, h2ofrequency, plant_image } = plant;
  return (
    <div className="addplant-wrap">
      <h1 className="addplant-title">Edit Plant</h1>
      <form onSubmit={handleSubmit} className="addplant-form">
        <div>
          <label style={{ textAlign: "left" }}>Nickname</label>
          <input
            value={plant_nickname}
            onChange={handleChange}
            name="plant_nickname"
            type="text"
            autoComplete="off"
          />
          <p className="addplant-error">{errors.plant_nickname}</p>
        </div>
        <div>
          <label style={{ textAlign: "left" }}>Species</label>
          <input
            value={plant_species}
            onChange={handleChange}
            name="plant_species"
            type="text"
            autoComplete="off"
          />
          <p className="addplant-error">{errors.plant_species}</p>
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
              value={h2ofrequency}
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
          <p className="addplant-error">{errors.h2ofrequency}</p>
        </div>
        <div>
          <label style={{ textAlign: "left" }}>Image URL</label>
          <input
            value={plant_image}
            onChange={handleChange}
            name="plant_image"
            type="text"
            autoComplete="off"
            placeholder="optional"
          />
          <p className="addplant-error">{errors.plant_image}</p>
        </div>
        <div>
          <div
            className="btnContainer"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "50%",
              margin: "auto",
              marginTop: "1rem",
            }}
          >
            {/* <Link to={"/plantlist"}> */}
            <button
              disabled={isDisabled}
              type="submit"
              className="btn btn-success"
            >
              Save
            </button>
            {/* </Link> */}
            <Link to={`/plantlist`}>
              <button className="btn btn-danger">Cancel</button>
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
