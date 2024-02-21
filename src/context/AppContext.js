import React, { createContext } from 'react'

const initialState = {
    budget:200,
    expenses: [
        {id: 12, name: 'Food', cost: 40},
        {id: 12, name: 'Food', cost: 40},
    ],
};

const AppContext = createContext();

// const AppContext = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

export default AppContext
