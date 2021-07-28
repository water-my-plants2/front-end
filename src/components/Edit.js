import React, { useState, useEffect } from "react";
import { fetchPlants } from "../actions/index";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router";
import "../App.css";
import * as yup from "yup";


const Edit = (props) => {
  
  const{ id }= useParams();
  console.log("useparam >>>>>", id);

  
  const plantSchema = yup.object().shape({
    h2oFrequency: yup
      .number()
      .required("Required")
      .min(1, "Must be at least 1"),
    image: yup.string().notRequired(),
    nickname: yup.string().required("Required"),
    species: yup.string().required("Required"),
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
    id: props.plants.length + 1,
    nickname: "",
    species: "",
    h2oFrequency: "",
    image: "",
  });
  const [plant, setPlant] = useState({
    id: props.plants.length + 1,
    nickname: "",
    species: "",
    h2oFrequency: 1,
    image: "",
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
    props.addPlant(plant);
    push("/plantlist");
    setIsDisabled(true);
  };

  fetchPlants(plant);
 
  const {nickname, species, h2oFrequency, image } = plant;

  console.log("NICK >>>", nickname )
  return (
    <div className="editplant-wrap">
      <h1 className="editplant-title">Edit Plant</h1>
      <form onSubmit={handleSubmit} className="editplant-form">
        <div>
          <label>Nickname</label>
          <input
            id = {id}
            value={nickname}
            onChange={handleChange}
            name="nickname"
            type="text"
            autoComplete="off"
          />
          <p className="editplant-error">{errors.nickname}</p>
        </div>
        <div>
          <label>Species</label>
          <input
            value={species}
            onChange={handleChange}
            name="species"
            type="text"
            autoComplete="off"
          />
          <p className="editplant-error">{errors.species}</p>
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
            <h2 className="editplant-waterinputtitle">Every</h2>
            <input
              value={h2oFrequency}
              onChange={handleChange}
              name="h2oFrequency"
              type="number"
              autoComplete="off"
              style={{
                width: "3rem",
              }}
            />
            <h2 className="editplant-waterinputtitle">Day(s)</h2>
          </div>
          <p className="editplant-error">{errors.h2oFrequency}</p>
        </div>
        <div>
          <label>Image URL</label>
          <input
            value={image}
            onChange={handleChange}
            name="image"
            type="text"
            autoComplete="off"
            placeholder="optional"
          />
          <p className="editplant-error">{errors.image}</p>
        </div>
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
            <button className="btn-dark">
              Delete
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

export default connect(mapStateToProps, { Edit})(Edit);
