import React, { useContext } from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri";
import { AppContext } from './context/AppContext';


const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        })
    }
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.name}
        <div>
            <span className='btn btn-primary badge-pill mr-3'>
                ${props.cost}
            </span>
            <RiDeleteBack2Fill size={25} onClick={handleDeleteExpense}/>
        </div>
    </li>
  )
}

export default ExpenseItem
