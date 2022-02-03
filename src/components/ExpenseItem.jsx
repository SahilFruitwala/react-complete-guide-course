import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = props => {
  const { title, amount, date } = { ...props };

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">CA${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
