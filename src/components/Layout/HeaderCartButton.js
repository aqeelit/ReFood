import React from "react";
import { useContext } from "react";
import CartContext from "../context/cart-context";
import CartIcon from '../Cart/CartIcon';
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
    const cartCTX = useContext(CartContext);

    const numberOfCart = cartCTX.items.reduce((CuNumber,item) => {
        return CuNumber + item.amount;
    },0);


    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCart}</span>
        </button>
    );
}

export default HeaderCartButton;