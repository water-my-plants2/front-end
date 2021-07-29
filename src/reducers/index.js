import { START_FETCH_PLANTS,
    SUCCESS_FETCH_PLANTS,
    FAIL_FETCH_PLANTS,
    ADD_PLANT, 
    EDIT_PLANT,
    DELETE_PLANT,
    SET_VALUE_TO_ERROR_MESSAGE } from '../actions/index.js';
import axiosWithAuth from '../utils/axiosWithAuth.js';

export const initialState = {
    plants: [{
    //     plant_id: 1,
    //     plant_nickname: "Spider Plant initial",
    //     plant_species: "Chlorophytum Comosum",
    //     h2ofrequency: 3,
    //     plant_image: ""
    // },{
    //     plant_id: 2,
    //     plant_nickname: "Aloe Vera initial",
    //     plant_species: "Aloe",
    //     h2ofrequency: 1,
    //     plant_image: ""
    // },{
    //     plant_id: 3,
    //     plant_nickname: "Peace Lily initial",
    //     plant_species: "Spathiphyllum Wallisii",
    //     h2ofrequency: 5,
    //     plant_image: ""
    }],
    isLoading: false,
    dataError: "",
    errorMessage: "",
}

export const plantReducer = (state = initialState, action) => {
switch(action.type) {
    case START_FETCH_PLANTS:
        return({
            ...state,
            isLoading: true
        });
    case SUCCESS_FETCH_PLANTS:
        return({
            ...state,
            isLoading: false,
            plants: action.payload
        });
    case FAIL_FETCH_PLANTS:
        return({
            ...state,
            dataError: action.type,
            isLoading: false
    });                
    case DELETE_PLANT:
        axiosWithAuth()
        .delete(`api/plants/${action.payload}`, {plant_id: action.payload}) 
        .then(resp => { console.log("delete plant response: ", resp);
            // dispatch(fetchSuccess(resp.data));
        })
        .catch(err=>{
            console.log(err);
            // dispatch(fetchFail(err));
        });
        return {
            ...state,
            plants: state.plants.filter(plant=>(action.payload !== plant.plant_id))
        }
    case ADD_PLANT:
        let newPlant = {};
        axiosWithAuth()
        .post("api/plants", action.payload) 
        .then(resp => { console.log("add plant response: ", resp);
            newPlant = resp.data;
            // dispatch(fetchSuccess(resp.data));
        })
        .catch(err=>{
            // dispatch(fetchFail(err));
        });
        return {
            ...state,
            plants: [...state.plants, newPlant]
        }    
    case EDIT_PLANT:
        console.log("edit plant action.payload: ", action.payload);
        axiosWithAuth()
        .put(`/api/plants/${action.plant_id}`, action.payload) 
        .then(resp => { //console.log("edit plant response: ", resp);
            // dispatch(fetchSuccess(resp.data));
        })
        .catch(err=>{
            console.log(err);
        });
        const noEditedPlant = state.plants.filter((plant) => plant.plant_id !== parseInt(action.plant_id, 10))
        action.payload = {...action.payload, plant_id: parseInt(action.plant_id, 10)}
        return {
            ...state,
            plants: [...noEditedPlant, action.payload] 
        }        
    case SET_VALUE_TO_ERROR_MESSAGE:
        return({
            ...state,
            errorMessage: action.payload
        });    
    default:
        return state;
        
    }
}