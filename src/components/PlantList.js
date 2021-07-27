import Card from './Card'
import React from "react";
import { connect } from 'react-redux';
import '../index.css';

const PlantList = (props) => {

    const plants = props.plants;

    return (
        <div class="container">
            <div class="add-section">
                <button> 
                    Add Plant
                </button>
            </div>
            <div class="card-section">
                {
                plants.map(plant=><Card key={plant.id} plant={plant} />)
                }
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      plants: state.plants
    }
}
  
export default connect(mapStateToProps)(PlantList);