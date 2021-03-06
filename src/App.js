import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
 const DUMMY_EXPENSES = [
   {
     id: 1,
     title: "Car insurance",
     amount: 294.76,
     date: new Date(2020, 2, 28),
   },
   {
     id: 2,
     title: "Car Inova",
     amount: 594.76,
     date: new Date(2021, 3, 28),
   },
   {
     id: 3,
     title: "Car Yamaha",
     amount: 194.76,
     date: new Date(2021, 4, 21),
   },
   {
     id: 4,
     title: "Car Honda",
     amount: 494.76,
     date: new Date(2020, 5, 22),
   },
 ];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
 
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses]
    })
  };
  return (
    <div>
      <h2 style={{ color: "#ffff" }}>Andres Car Shop</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
