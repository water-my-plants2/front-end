import axiosWithAuth from "../utils/axiosWithAuth";
import axios from 'axios';

export const ADD_PLANT = "ADD_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";
export const START_FETCH_PLANTS = "START_FETCH_PLANTS";
export const SUCCESS_FETCH_PLANTS = "SUCCESS_LOGIN";
export const FAIL_FETCH_PLANTS = "FAIL_FETCH_PLANTS";
export const SET_VALUE_TO_ERROR_MESSAGE = "SET_VALUE_TO_ERROR_MESSAGE";

// const dummyData = [{
//     id: 1,
//     nickname: "Spider Plant redux",
//     species: "Chlorophytum Comosum",
//     h2oFrequency: 3,
//     image: "https://www.houseplantsexpert.com/image-files/spiderplant.jpg"
// },{
//     id: 2,
//     nickname: "Aloe Vera redux",
//     species: "Aloe",
//     h2oFrequency: 1,
//     image: "https://www.houseplantsexpert.com/image-files/aloevera.jpg"
// },{
//     id: 3,
//     nickname: "Peace Lily redux",
//     species: "Spathiphyllum Wallisii",
//     h2oFrequency: 5,
//     image: "https://www.houseplantsexpert.com/image-files/peace-lily.jpg"
// }]

export const fetchPlants = (id) => {
    return (dispatch) => {
        dispatch(fetchStart());        
        axiosWithAuth()
            .get(`/api/users/${id}/plants`) 
            .then(res => {console.log("ID: ", id);

                dispatch(fetchSuccess(res.data));
            })
            .catch(err=>{
                dispatch(fetchFail(err));
            });
    }
        // dispatch(fetchSuccess(dummyData));
};

export const addPlant = (plant) => {
    return({type:ADD_PLANT, payload:plant});
}

export const editPlant = (plant, id) => {
    return({type:ADD_PLANT, payload:plant, plant_id:id});
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