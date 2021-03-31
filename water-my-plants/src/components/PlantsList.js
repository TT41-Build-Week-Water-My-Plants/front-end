import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

function PlantsList(props){
    const [plants, setPlants] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/api/plants')
        .then((res) => {
            setPlants(res)})
        .catch(err => console.log({err}));
    }, []);

    return(
        <div>
            <h3>Plant List</h3>
            {plants.map(plant => (
                <p key={plant.id}>{plant.name}</p>
            ))}
        </div>
    )

}

export default PlantsList;