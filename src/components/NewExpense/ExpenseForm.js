import { useState } from "react";
import PropTypes from "prop-types";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [flag, setFlag] = useState(false);

  const clear = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const changeFlag = () => {
    clear();
    setFlag(!flag);
  };

  const changeTitleHandler = (event) => setEnteredTitle(event.target.value);

  const changeAmountHandler = (event) => setEnteredAmount(event.target.value);

  const changeDateHandler = (event) => setEnteredDate(event.target.value);

  const SubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: parseInt(enteredAmount),
      date: new Date(enteredDate),
    };

    clear();
    changeFlag();

    props.onSubmitExpense(expenseData);
  };

  if (!flag) {
    return (
      <div className="flag-div">
        <button type="button" className="form-button" onClick={changeFlag}>
          Add Expense
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={SubmitHandler}>
      <div className="expense-form">
        <div className="new-expense__particulars new-expense__title">
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            value={enteredTitle}
            id="title"
            placeholder="Expense title"
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__particulars new-expense__amount">
          <label htmlFor="amount">Amount</label>
          <br />
          <input
            type="number"
            id="amount"
            value={enteredAmount}
            placeholder="Expense Amount"
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__particulars new-expense__date">
          <label htmlFor="date">Date</label>
          <br />
          <input
            type="date"
            id="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={changeDateHandler}
          />
        </div>
        <div className="cancel">
          <button type="button" className="form-button" onClick={changeFlag}>
            Cancel
          </button>
        </div>
        <div className="add">
          <button type="submit" className="form-button">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {
  onSubmitExpense: PropTypes.func.isRequired,
};

export default ExpenseForm;
