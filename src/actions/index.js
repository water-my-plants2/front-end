import axiosWithAuth from "../utils/axiosWithAuth";

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
//     h2ofrequency: 3,
//     plant_image: "https://www.houseplantsexpert.com/plant_image-files/spiderplant.jpg"
// },{
//     id: 2,
//     nickname: "Aloe Vera redux",
//     species: "Aloe",
//     h2ofrequency: 1,
//     plant_image: "https://www.houseplantsexpert.com/plant_image-files/aloevera.jpg"
// },{
//     id: 3,
//     nickname: "Peace Lily redux",
//     species: "Spathiphyllum Wallisii",
//     h2ofrequency: 5,
//     plant_image: "https://www.houseplantsexpert.com/plant_image-files/peace-lily.jpg"
// }]

export const fetchPlants = (id) => {
    return (dispatch) => {
        dispatch(fetchStart());        
        axiosWithAuth()
            .get(`/api/users/${id}/plants`) 
            .then(res => {console.log("response for fetch user plants: ", res);
                dispatch(fetchSuccess(res.data));
            })
            .catch(err=>{
                dispatch(fetchFail(err));
            });
    }
};

export const addPlant = (plant) => {
    // axiosWithAuth()
    //     .post("api/plants", plant) 
    //     .then(resp => { console.log("add plant response: ", resp)
            return({type:ADD_PLANT, payload:plant});         
        // })
        // .catch(err=>{
        //     console.log(err)
        // });
    
}

export const editPlant = (plant, id) => {
    return({type:EDIT_PLANT, payload:plant, plant_id:id});
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