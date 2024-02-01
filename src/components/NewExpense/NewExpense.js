import PropTypes from "prop-types";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const SubmitHandler = (expenseData) => {
    const crypto = window.crypto || window.msCrypto;
    const array = new Uint32Array(1);
    const expenseDataModified = {
      id: crypto.getRandomValues(array)[0].toString(),
      ...expenseData,
    };
    props.onSubmitNewExpense(expenseDataModified);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpense={SubmitHandler} />
    </div>
  );
};

NewExpense.propTypes = {
  onSubmitNewExpense: PropTypes.func.isRequired,
};

export default NewExpense;
