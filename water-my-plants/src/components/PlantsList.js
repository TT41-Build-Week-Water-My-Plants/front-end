import React, { useEffect,useState } from 'react';
import { connect } from "react-redux";
import {fetchPlants} from './../Actions/actions.js';
import PlantNav from './../navs/PlantNav';
import { useHistory } from 'react-router-dom';
import EditPlants from './EditPlants.js'
import {axiosWithAuth} from '../utils/axiosWithAuth';
            
        const initialPlant = {
            nickname: "",
            species: "",
            h2o_frequency: "",
          }
const PlantsList = (props, updatePlants) => {
const { push } = useHistory();
const [editing, setEditing] = useState(false);
const [plantToEdit, setPlantToEdit] = useState(initialPlant);
const {fetchPlants} = props;
    useEffect(() => {
        fetchPlants();
    }, []);

    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }
   
    
  
    const editPlant = plant => {
      setEditing(true); 
      console.log(plant) 
     axiosWithAuth()
     .get(`/api/plants/${plant.plant_id}`)
     .then((res)=> {
       setPlantToEdit(res.data)
     })
     .catch((err) =>{
      console.log(err.response)
  }) 
  console.log(plantToEdit)
    };
    
    const saveEdit = () => {
      
      console.log(plantToEdit)
      axiosWithAuth().put(`/api/plants/${plantToEdit.plant_id}`, plantToEdit)
      .then((res)=>{
          console.log(plantToEdit)
          const newPlants = props.map((plant)=>{
              if (plant.plant_id == res.data.plant_id){
                  return res.data
              } else {
                  return plant
              }
          })
          props.plants = newPlants;
      })
      .catch((err) =>{
          console.log(err.response)
      })
    };
  

    const handleAddPlant = (e) => {
      e.preventDefault();
      push('/add-plants')
  }
  
  const deletePlant = plant => {
    console.log(props)
    axiosWithAuth().delete(`api/plants/${plant.plant_id}`)
    .then((res)=>{
        console.log(res)
        console.log(props)
        updatePlants(props.filter((plantToDelete) => plantToDelete.plant_id !== props.plant_id))
    })
    .catch((err) =>{
        console.log(err.response)
    })
  };

    
 
    return(
        <div className="listContainer">
          <PlantNav />
          <h3>Plant List</h3>
            {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
            {props.plants.map((plant) => (
                <div className='plant'>
                    <p>Nickname: {plant.nickname}</p>
                    <p>Species: {plant.species}</p>
                    <p>H20 Frequency: {plant.h2o_frequency}</p>
                    <img className='plantimg' src={plant.image} alt='' height='150' width='150' />
                    <button onClick ={e => {
                      e.stopPropagation()
                      editPlant(plant)
                      setPlantToEdit(plant)
                    }}>Edit Plant</button>
                    <button onClick={deletePlant}>Remove Plant</button>
                </div>
            ))}
                <button onClick={handleAddPlant}>Add New Plant</button>
                {editing && <EditPlants plantToEdit={plantToEdit} saveEdit={saveEdit} setPlantToEdit={setPlantToEdit} setEditing={setEditing}/> }
        </div>
    )
}   

    const mapStateToProps = (state) => {
        return {
          ...state
        };
      };

export default connect(mapStateToProps, {fetchPlants})(PlantsList);