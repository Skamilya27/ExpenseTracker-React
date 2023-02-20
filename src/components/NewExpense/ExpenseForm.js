import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    //using one state 
    const [userInput, setUserInput] = useState({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        setUserInput({
          ...userInput,
          enteredTitle: event.target.value,
        })
        //alt/preffered way of doing this
        setUserInput((prevState) => {
          return{...prevState, enteredTitle: event.target.value};
        })
    }

    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        setUserInput({
          ...userInput,
          enteredAmount: event.target.value,
        })
    }

    const dateChangehandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput({
          ...userInput,
          enteredDate: event.target.value,
        })
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"  onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangehandler} min="2020-01-01" step="2023-12-31"/>
        </div>
      </div>
      <div className="new-expense___actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
