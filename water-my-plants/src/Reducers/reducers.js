import { FETCH_START, FETCH_SUCCESS, FETCH_ERR, SET_ERR, PLANT_ADD } from '../Actions/actions.js';



export const initialState = {
    plants: [],
    isLoading: false,
    error:''
}
const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                plants: action.payload,
                error: ''
            }
        case FETCH_ERR:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }   
        case(PLANT_ADD):
            return({
                ...state,
                plants:[...state.plants,action.payload],
                isLoading:true
            })  
        case(SET_ERR):
        return({
            ...state,
            error: ' species and h20Frequency required'
        }) 
        default:
            return state;      
    }
}

export default reducer;