import React from "react";
import CartContext from "./CartContext";

const Cartprovider = (props) => {

const addItemHandler = (items) => {

}

const removeItemHandler = (id) => {

}

const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler
};

return <CartContext.Provider value={cartContext}>
       {props.children}
</CartContext.Provider>

};

export default Cartprovider;