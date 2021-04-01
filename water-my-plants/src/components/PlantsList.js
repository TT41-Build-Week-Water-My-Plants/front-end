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
            setPlants(res.data)})
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
                <div className='plant'>
                    <p>Nickname: {plant.nickname}</p>
                    <p>Species: {plant.species}</p>
                    <p>H20 Frequency: {plant.h2o_frequency}</p>
                    <img className='plantimg' src={plant.image} alt='' height='150' width='150' />
                    <button>Edit Plant</button>
                    <button>Remove Plant</button>
                </div>
            ))}
            {/* <Link to={`/edit-plant/${plants.plant.id}`}>Edit Plant</Link> */}
            <button onClick={handleAddPlant}>Add New Plant</button>
        </div>
    )

}

export default PlantsList;