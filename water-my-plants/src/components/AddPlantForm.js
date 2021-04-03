import React, { useState } from 'react';
import {useHistory} from 'react-router';
import { connect } from "react-redux";
import {setError, addPlant} from './../Actions/actions';


    
    const AddPlantForm = (props) => {
        
        const [state,setState] = useState({
            nickname: "",
            species: "",
            h2o_frequency: "",
}) 
        
        const handleChange = e => {
            setState({
                ...state,
                [e.target.name]:e.target.value
            });
        }
        const { push } = useHistory();
        const handleSubmit = e => {
            e.preventDefault();
                props.addPlant(state);
                push(`/plants`)
        }

    return (
        <div>
            <h3>Add New Plant</h3>
            <form>

                <label htmlFor="name">Name</label>
                <input
                    id="nickname"
                    name="nickname"
                    value={state.nickname}
                    onChange={handleChange}
                />

                <label htmlFor="species">Name</label>
                <input
                    id="species"
                    name="species"
                    value={state.species}
                    onChange={handleChange}
                />

                <label htmlFor="h2o_frequency">H2OFrequency</label>
                <input
                    id="h2o_frequency"
                    name="h2o_frequency"
                    value={state.h2o_frequency}
                    onChange={handleChange}
                />
                <button onClick = {handleSubmit}>Add Plant</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return({
        errorMessage: state.error
    })
}

export default  connect(mapStateToProps, {setError, addPlant})(AddPlantForm);