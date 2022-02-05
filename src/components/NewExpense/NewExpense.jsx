import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={props.onSaveExpenseData} />
    </div>
  );
};

export default NewExpense;
