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
        plant_id: 1,
        plant_nickname: "Spider Plant initial",
        plant_species: "Chlorophytum Comosum",
        h2ofrequency: 3,
        image: ""
    },{
        plant_id: 2,
        plant_nickname: "Aloe Vera initial",
        plant_species: "Aloe",
        h2ofrequency: 1,
        image: ""
    },{
        plant_id: 3,
        plant_nickname: "Peace Lily initial",
        plant_species: "Spathiphyllum Wallisii",
        h2ofrequency: 5,
        image: ""
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
        return {
            plants: state.plants.filter(item=>(action.payload !== item.id))
        }
    case ADD_PLANT:
        console.log("add plant action.payload: ", action.payload);
        axiosWithAuth()
        .post("api/plants", action.payload) 
        .then(resp => {console.log("add plant response: ", resp);
            // dispatch(fetchSuccess(resp.data));
        })
        .catch(err=>{
            // dispatch(fetchFail(err));
        });
        return {
            ...state,
            plants: [...state.plants, action.payload]
        }    
    case EDIT_PLANT:
        console.log("edit plant action.payload: ", action.payload);
        axiosWithAuth()
        .put(`/api/plants/${action.plant_id}`, action.payload) 
        .then(resp => {console.log("edit plant response: ", resp);
            // dispatch(fetchSuccess(resp.data));
        })
        .catch(err=>{
            // dispatch(fetchFail(err));
        });
        return {
            ...state,
            plants: [...state.plants, action.payload] //this will add a new plant record; not what we want
            //probably need to delete old record (where plant_id = plant_id coming from response,) then add new
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