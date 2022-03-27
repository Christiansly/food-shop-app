import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
function MealItemForm(props) {
  const [amoutisValid, setAmoutisValid] = useState(true)
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    
    const enteredAmount = amountInputRef.current.value;
    console.log(enteredAmount)
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmountNumber)

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmoutisValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amoutisValid && <p>Enter a valid value</p>}
    </form>
  );
}

export default MealItemForm;
