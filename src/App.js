import logo from "./logo.svg";
import React, {useState} from "react";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


function App() {
  const [expenses, setExpense] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      store: "Online",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      store: "Offline",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      store: "Online",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      store: "Offline",
    },
  ]);

  const addExpenseHandler = (expense) => {
    // console.log('In App.js');
    // console.log(expense);

    const newExpense = {
      id: Math.random().toString(),
      title: expense.title,
      amount: expense.amount,
      date: new Date(expense.date)
    };

    setExpense((prevExpense) => [...prevExpense, newExpense]);
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
