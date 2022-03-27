import React, { useContext }from "react";
import classes from './Cart.module.css';
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
function Cart(props) {
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
      <div></div>
    </Modal>
  );
}

export default Cart;
