import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  let filteredExpenses = props.data;
  const [filterYear, setFilterYear] = useState(0);
  const changeHandler = (year) => {
    setFilterYear(year);
  };

  if(filterYear) {
    filteredExpenses = props.data.filter(item => {
      const expenseDate = new Date(item.date);
      return expenseDate.getFullYear() === filterYear;
    });
  }
  

  return (
    <Card className="expenses">
      <ExpenseFilter onChangeYear={changeHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
