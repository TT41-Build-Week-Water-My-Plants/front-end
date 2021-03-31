import React from 'react';
import {useHistory} from 'react-router';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const initialValues = {
    id: 0,
    nickname: "",
    species: "",
    h2oFrequency: "",
};

function AddPlantForm() {
    const {push} = useHistory();
    const [formValues, setFormValues] = React.useState(initialValues);

    const handleChanges = e => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/plants', formValues)
        .then(res => {
            push('/plants');
        })
        .catch(err => console.log({err}))
    }

    return (
        <div>
            <h3>Add New Plant</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">Id</label>
                <input
                    id='id'
                    name='id'
                    value={formValues.id}
                    onChange={handleChanges}
                />

                <label htmlFor="name">Name</label>
                <input
                    id="nickname"
                    name="nickname"
                    value={formValues.nickname}
                    onChange={handleChanges}
                />

                <label htmlFor="species">Name</label>
                <input
                    id="species"
                    name="species"
                    value={formValues.species}
                    onChange={handleChanges}
                />

                <label htmlFor="h2oFrequency">H2OFrequency</label>
                <input
                    id="h2oFrequency"
                    name="h2oFrequency"
                    value={formValues.h2oFrequency}
                    onChange={handleChanges}
                />
                <button>Add Plant</button>
            </form>
        </div>
    )
}

export default AddPlantForm;