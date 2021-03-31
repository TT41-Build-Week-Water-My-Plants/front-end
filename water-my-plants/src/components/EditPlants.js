import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {axiosWithAuth }from './../utils/axiosWithAuth';
import PlantNav from './../navs/PlantNav';
import { Link } from 'react-router-dom';

const initialValues = {
    id:'',
    nickname:'',
    species:'',
    h2o_frequency:''
};

const EditPlant = (props) => {
    const { push } = useHistory();
    const { id } = useParams();
console.log(id);
    const [ plant, setPlant] = useState(initialValues);

    const handleChange = (e) => {
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        axiosWithAuth()
        .get(`/api/plants/${id}`)
        .then(res => {
            setPlant(res.data);
        })
        .catch(err => {
            console.log(err)

        })
    },[]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/api/plants/${id}`, plant)
        .then(res => {
            setPlant(res.data);
            push(`/plants`);
        })
        .catch(err => {
            console.log(err);
        })
    };

    return(
        <>
        <PlantNav />
        <form onSubmit={handleSubmit}>
            <label>Nickname:</label>
            <input 
                value={plant.nickname}
                onChange={handleChange}
                name='nickname'
                type='text'
            />
            <br />
            <label>Species:</label>
            <input 
                value={plant.species}
                onChange={handleChange}
                name='species'
                type='text'
            />
            <br />
            <label>h2o_frequency:</label>
            <input 
                value={plant.h2o_frequency}
                onChange={handleChange}
                name='h2o_frequency'
                type='text'
            />
            <br />
            {/* <label>Image</label>
            <input 
                value=''
                onChange={handleChange}
                name='image'
                type='image'

            /> */}
            <br />
           <button>Save</button>
        </form>
        </>
    )

    };

    export default EditPlant;