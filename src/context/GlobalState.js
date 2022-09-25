import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial State 
const initialState = {
    transactions:  [
        
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

//create contxt
export const GlobalContext = createContext(initialState);

//Provider component
    //to use action pass down to provider
export const GlobalProvider = ({ children }) => { //children because we wrapped 
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    
    return (<GlobalContext.Provider value={{ //this is what would be accessible to the children
        transactions: state.transactions,
        deleteTransaction,
        addTransaction}}>

        {children} 
        {/* children is whatever component we wrap */}
    </GlobalContext.Provider>)
}