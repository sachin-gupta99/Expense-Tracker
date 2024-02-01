import PropTypes from "prop-types";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const changeHandler = (event) => {
    const year = parseInt(event.target.value);
    props.onChangeYear(year);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__heading">
        <p>Filter By Year</p>
      </div>
      <div className="expense-filter__year">
        <select onChange={changeHandler} defaultChecked={0}>
          <option value={0}>--select--</option>
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
        </select>
      </div>
    </div>
  );
};

ExpenseFilter.propTypes = {
  onChangeYear: PropTypes.func.isRequired,
};

export default ExpenseFilter;
