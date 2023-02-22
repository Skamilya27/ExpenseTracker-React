import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  {
    /* checking whether there is any expense or not */
  }
  
  if(props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  else if(props.items.length === 1) {
    return (
      <>
        <ul className="expenses-list">
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </ul>
        <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
      </>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.length > 0 &&
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </ul>
  );
};

export default ExpensesList;
