import PropTypes from "prop-types";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__date">
          <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item__description">{props.title}</div>
        <div className="expense-item__price">
          <p>${props.amount}</p>
        </div>
      </Card>
    </li>
  );
};

ExpenseItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ExpenseItem;
