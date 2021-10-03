import React, {useState} from "react";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
    console.log("expense");
  }
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList items ={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
