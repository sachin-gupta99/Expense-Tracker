import PropTypes from "prop-types";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const SubmitHandler = (expenseData) => {
    const expenseDataModified = {
      id: Math.random().toString(),
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
