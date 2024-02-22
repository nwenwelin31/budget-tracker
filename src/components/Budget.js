import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget} = useContext(AppContext);
    const edit = () => {
        console.log('edit'); 
    }
  return (
    <div className='alert alert-secondary d-flex justify-content-between align-items-center'>
        <span>Budget: ${budget}</span>
        <button className='btn btn-primary' type='button' onClick={edit}>Edit</button>
    </div>
  )
}

export default Budget
