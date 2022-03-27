import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'
function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext)
  console.log(cartCtx.items)
  const numberofItems = cartCtx.items.reduce((prevValue, currValue) => {
    return prevValue + currValue.amount
  }, 0)
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofItems}</span>

    </button>
  )
}

export default HeaderCartButton