import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const  [isEditing, setIsEditing]= useState(false);

  const saveExpenseDataHandler = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: (Math.random()*100).toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startedEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startedEditingHandler}>Add New Expense</button>}

      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
