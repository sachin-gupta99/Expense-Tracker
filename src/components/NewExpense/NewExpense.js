import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

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

export default NewExpense;
