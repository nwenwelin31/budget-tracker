import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget,dispatch} = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedBudget, setEditedBudget] = useState(budget);


    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };
    const handleInputChange = (event) => {
        setEditedBudget(event.target.value);
    };

    const handleSave = (event) => {
        // Save the edited budget
        event.preventDefault();
        const updateBudget = {
            budget: editedBudget,
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: updateBudget,
        })
        
        // Exit edit mode
        setIsEditing(false);
    };

  return (
    <div className='alert alert-secondary d-flex justify-content-between align-items-center'>
        {
            isEditing? (
                <>
                    <input type='text' className='form-control' id='budget' required 
                        value={editedBudget}
                        onChange={handleInputChange}
                    />
                     <button className='btn btn-success' onClick={handleSave}>Save</button>
                </>
            ):(
                <>
                    <span>Budget: ${budget}</span>
                    <button className='btn btn-primary' type='button' onClick={toggleEdit}>Edit</button>
                </>
            )
        }
    </div>
  )
}

export default Budget
