import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
const url = 'https://course-api.netlify.app/api/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // remove item
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  // increase item
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  // decrease item
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
