import axios from 'axios';

export const ADD_PLANT = "ADD_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";
export const START_FETCH_PLANTS = "START_FETCH_PLANTS";
export const SUCCESS_FETCH_PLANTS = "SUCCESS_FETCH_PLANTS";
export const FAIL_FETCH_PLANTS = "FAIL_FETCH_PLANTS";
export const SET_VALUE_TO_ERROR_MESSAGE = "SET_VALUE_TO_ERROR_MESSAGE";

const dummyData = [{
    id: 1,
    nickname: "Spider Plant dummy",
    species: "Chlorophytum Comosum",
    h2oFrequency: 3,
    image: ""
},{
    id: 2,
    nickname: "Aloe Vera dummy",
    species: "Aloe",
    h2oFrequency: 1,
    image: ""
},{
    id: 3,
    nickname: "Peace Lily dummy",
    species: "Spathiphyllum Wallisii",
    h2oFrequency: 5,
    image: ""
}]

export const fetchPlants = () => {
    return (dispatch) => {
    //     dispatch(fetchStart());        
    //     axios.get("http://whatever/plants") 
    //     .then(resp => {
            // dispatch(fetchSuccess(resp.data));
    //     })
    //     .catch(err=>{
    //         dispatch(fetchFail(err));
    //     });
    // }
        dispatch(fetchSuccess(dummyData));
    }
}

export const addPlant = (plant) => {
    return({type:ADD_PLANT, payload:plant});
}

export const deletePlant = (id)=>{
    return({type: DELETE_PLANT, payload:id});
}

export const fetchStart = ()=> {
    return({type: START_FETCH_PLANTS});
}

export const fetchSuccess = (plants)=> {
    return({type: SUCCESS_FETCH_PLANTS, payload:plants});
}

export const fetchFail = (err)=> {
    return({type: FAIL_FETCH_PLANTS, payload:err});
}

export const setError = (err) => {
    return({type: SET_VALUE_TO_ERROR_MESSAGE, payload:err});
}