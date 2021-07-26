import { START_FETCH_PLANTS,
    SUCCESS_FETCH_PLANTS,   
    FAIL_FETCH_PLANTS,
    ADD_PLANT, 
    DELETE_PLANT,
    SET_VALUE_TO_ERROR_MESSAGE } from '../actions/index.js';

export const initialState = {
    plants: [],
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