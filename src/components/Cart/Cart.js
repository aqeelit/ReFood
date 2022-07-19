import React, {useContext} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../context/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const CartCTX = useContext(CartContext);

  const totalAmount = `$${CartCTX.totalAmount.toFixed(2)}`;
  const hasItems = CartCTX.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    CartCTX.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    CartCTX.addItem({...item, amount: 1});
  };

  const orderHandler = () => {
    console.log('ordering...');
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
    {CartCTX.items.map((item) => (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    ))}
  </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
