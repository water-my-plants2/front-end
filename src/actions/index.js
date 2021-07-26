import axios from 'axios';

export const ADD_PLANT = "ADD_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";
export const START_FETCH_PLANTS = "START_FETCH_PLANTS";
export const SUCCESS_FETCH_PLANTS = "SUCCESS_FETCH_PLANTS";
export const FAIL_FETCH_PLANTS = "FAIL_FETCH_PLANTS";
export const SET_VALUE_TO_ERROR_MESSAGE = "SET_VALUE_TO_ERROR_MESSAGE";

export const fetchPlants = () => {
    return (dispatch) => {
        dispatch(fetchStart());        
        axios.get("http://whatever/plants") 
        .then(resp => {
            dispatch(fetchSuccess(resp.data));
        })
        .catch(err=>{
            dispatch(fetchFail(err));
        });
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