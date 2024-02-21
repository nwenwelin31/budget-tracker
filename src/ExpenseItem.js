import React from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri";


const ExpenseItem = (props) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.name}
        <div>
            <span className='btn btn-primary badge-pill mr-3'>
                ${props.cost}
            </span>
            <RiDeleteBack2Fill size={25} />
        </div>
    </li>
  )
}

export default ExpenseItem
