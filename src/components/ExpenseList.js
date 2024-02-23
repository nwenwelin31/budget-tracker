import React, { useContext, useState } from 'react'
import ExpenseItem from '../ExpenseItem'
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    // const expenses = [
    //     {id:123456, name: 'Shopping', cost: 50},
    //     {id:123456, name: 'Holiday', cost: 50},
    //     {id:123456, name: 'Transportation', cost: 50},
    //     {id:123456, name: 'Fuel', cost: 50},
    //     {id:123456, name: 'Child Care', cost: 50},
    // ]

    const {expenses} = useContext(AppContext);
    const [searchExpense, setSearchExpense] = useState('');

     // Filter expenses based on the search query
     const filteredExpenses = expenses.filter(expense => {
        return expense.name.toLowerCase().includes(searchExpense.toLowerCase());
    });

    // Event handler to update the search query
    const handleSearchInputChange = (event) => {
      setSearchExpense(event.target.value);
  };
  return (
    <>
      <div>
        <input type='search' className='form-control p-2' id='search' placeholder='Type to Search' value={searchExpense} onChange={handleSearchInputChange}/>
      </div>
      <ul className='list-group mt-2'>
        {filteredExpenses.map((expense) => <ExpenseItem  id={expense.id} name={expense.name} cost={expense.cost}/>)}
    </ul>
    </>

  )
}

export default ExpenseList
