import React from "react";
import classes from './Cart.module.css';
import Modal from '../UI/Modal'
function Cart(props) {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "a1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
      <div></div>
    </Modal>
  );
}

export default Cart;
