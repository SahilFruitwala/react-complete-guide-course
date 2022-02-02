import './ExpenseItem.css';

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>October 13, 1997</div>
      <div className="expense-item__description">
        <h2>Home Insurance</h2>
        <div className="expense-item__price">CA$ 1001.11</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
