import React, { useState } from 'react';
import { addPlant } from '../actions';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const AddPlant = (props) => {
    const { push } = useHistory();
    const [plant, setPlant] = useState({
        id: props.plants.length + 1,
        nickname: "",
        species: "",
        h2oFrequency: 1,
        image: ""
    });
    
    const handleChange = (e) => {
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addPlant(plant);
        push('/plantlist');
    }

    const { nickname, species, h2oFrequency, image } = plant;
    return( <div >
               <form onSubmit={handleSubmit}>
                <div>   
                    <label>Nickname</label>
                    <input value={nickname} onChange={handleChange} name="nickname" type="text" />
                </div> 
                <div>
                    <label>Species</label>
                    <input value={species} onChange={handleChange} name="species" type="text" />
                </div>
                <div >
                    <label>Frequency</label>
                    <input value={h2oFrequency} onChange={handleChange} name="h2oFrequency" type="text" />
                </div>
                <div>
                    <input type="submit" value="Add"/>
                    <Link to={`/plantlist`}>
                    <input type="button" value="Cancel"/></Link>
                </div>
                </form>
            </div>
    )}

const mapStateToProps = (state) => {
    return {
      plants: state.plants
    };
  };
  
export default connect(mapStateToProps, { addPlant })(AddPlant);
  