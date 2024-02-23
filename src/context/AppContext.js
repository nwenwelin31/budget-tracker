import React, { createContext, useReducer } from 'react'

const AppReducer = (state, action) => {
    switch(action.type){
        case 'SET_BUDGET': return {
            ...state,
            budget: action.payload.budget,
        };
        case 'ADD_EXPENSE': return {
            ...state,
            expenses: [...state.expenses, action.payload],
        };
        case 'DELETE_EXPENSE': return {
            ...state,
            expenses: state.expenses.filter((expense) => expense.id !== action.payload)
        }
        default: return state;
    }
}

const initialState = {
    budget:200,
    expenses: [
        {id: 12, name: 'Food', cost: 40},
        {id: 13, name: 'Car service', cost: 40},
    ],
};

export const AppContext = createContext();
export const AppProvider = (props) => {
const [state, dispatch] = useReducer(AppReducer, initialState);
 return (<AppContext.Provider value={{ 
    budget: state.budget,
    expenses: state.expenses,
    dispatch: dispatch,
  }}>
  {props.children}
 </AppContext.Provider>)
};
// const AppContext = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }
