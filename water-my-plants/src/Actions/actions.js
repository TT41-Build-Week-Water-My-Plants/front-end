import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom'


export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERR = "FETCH_ERR";
export const SET_ERR = "SET_ERR"
export const PLANT_ADD = "PLANT_ADD"



export const fetchPlants = () => {
    return (dispatch) =>{
        dispatch({ type: FETCH_START });
        axiosWithAuth()
            .get('/api/plants/')
            .then((res) => {
                console.log(res.data);
                dispatch({ type: FETCH_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_ERR, payload: err.response.data });
    });
    }
}
export const addPlant = (plant) =>{
    return (dispatch) => {
    axiosWithAuth()
        .post('/api/plants/',plant)
    .then((res) => {
        dispatch({ type: PLANT_ADD, payload: res.data })
    })
    .catch( error => { console.log( error.response.request._response ) });
    
}
} 
export const setError = () => dispatch => {
    dispatch({ type: SET_ERR });
} 