import Card from './Card'
import React, { useEffect }  from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions/index';
import '../index.css';

const PlantList = (props) => {

    const plants = props.plants;

    useEffect(() => {
       props.dispatch(fetchPlants());
    }, []);
  

    return (
        <div class="container">
            <div class="add-section">
                <Link  to="plantlist/add"> 
                    Add Plant
                </Link>
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
    return {
      plants: state.plants
    }
}
  
export default connect(mapStateToProps)(PlantList);