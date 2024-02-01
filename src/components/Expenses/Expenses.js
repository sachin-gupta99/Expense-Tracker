import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredExpenses, setFilteredExpenses] = useState(props.data);
  const [filterYear, setFilterYear] = useState(0);
  const changeHandler = (year) => {
    setFilterYear(year);
  };

  useEffect(() => {
    if (filterYear) {
      setFilteredExpenses(
        props.data.filter(
          (item) => new Date(item.date).getFullYear() === filterYear
        )
      );
    } else {
      setFilteredExpenses(props.data);
    }
  }, [filterYear, props.data]);

  return (
    <Card className="expenses">
      <ExpenseFilter onChangeYear={changeHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

Expenses.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Expenses;
