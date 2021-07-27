import { START_FETCH_PLANTS,
    SUCCESS_FETCH_PLANTS,   
    FAIL_FETCH_PLANTS,
    ADD_PLANT, 
    DELETE_PLANT,
    SET_VALUE_TO_ERROR_MESSAGE } from '../actions/index.js';

export const initialState = {
    plants: [{
        id: 1,
        nickname: "Spider Plant",
        species: "Chlorophytum Comosum",
        h2oFrequency: 3,
        image: ""
    },{
        id: 2,
        nickname: "Aloe Vera",
        species: "Aloe",
        h2oFrequency: 1,
        image: ""
    },{
        id: 3,
        nickname: "Peace Lily",
        species: "Spathiphyllum Wallisii",
        h2oFrequency: 5,
        image: ""
    }],
    isLoading: false,
    dataError: "",
    errorMessage: "" 
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
        return {
            ...state,
            plants: [...state.plants, action.payload]
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