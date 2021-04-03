import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {useHistory,useParams} from 'react-router-dom';


const EditPlants = ({plantToEdit, saveEdit, setPlantToEdit, setEditing}) => {
    
    return(<form onSubmit={e =>{
      e.preventDefault()
      saveEdit(plantToEdit)
      setEditing(false)
    }}>
        <legend>edit plant</legend>
        <label htmlFor="nickname">nickname:</label>
        <input
          name="nickname"
          id="nickname"
          onChange={(e) =>
            setPlantToEdit({ 
                ...plantToEdit, 
                [e.target.name]:e.target.value 
                })
          }
          value={plantToEdit.plant}
        />
      
        <label htmlFor="species">species:</label>
        <input
          name="species"
          id="species"
          onChange={(e) =>
            setPlantToEdit({
              ...plantToEdit,
             [e.target.name]:e.target.value  
            })
          }
          value={plantToEdit.plant}
        />
        <label htmlFor="h2o_frequency">h2o_frequency:</label>
        <input
          name="h2o_frequency"
          id="h2o_frequency"
          
          onChange={(e) =>
            setPlantToEdit({
              ...plantToEdit,
              [e.target.name]:e.target.value 
            })
          }
          value={plantToEdit.plant}
        />
      
        <div className="button-row">
          <button  type="submit">save</button>
          <button onClick={() => setEditing(false)}>cancel</button>
        </div>
    </form>);
}
export default EditPlants;