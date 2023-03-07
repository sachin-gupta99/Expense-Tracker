import './ExpenseDate.css';
import Card from '../UI/Card';

function ExpenseDate(props) {
    const expenseDate = new Date(props.date);

    const month = expenseDate.toLocaleString('en-US', {month: 'long'});
    const day = expenseDate.toLocaleString('en-US', {day: '2-digit'});
    const year = expenseDate.getFullYear();

    return (
        <Card className='expense-date'>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
        </Card>
    );
};

export default ExpenseDate;