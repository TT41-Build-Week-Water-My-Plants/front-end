import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import PlantNav from './../navs/PlantNav';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function PlantsList(props){
    const [plants, setPlants] = useState([])

    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
        .get('/api/plants')
        .then((res) => {
            setPlants(res)})
        .catch(err => console.log({err}));
    }, []);

    const handleAddPlant = (e) => {
        e.preventDefault();
        push('/add-plants')
    }

    return(
        <div>
            <PlantNav />
            <h3>Plant List</h3>
            {plants.map(plant => (
                <p key={plant.id}>{plant.name}</p>
            ))}
            <Link to={`/edit-plant/${plants.id}`}>Edit Plant</Link>
            <button onClick={handleAddPlant}>Add New Plant</button>
        </div>
    )

}

export default PlantsList;