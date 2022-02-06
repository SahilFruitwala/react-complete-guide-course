import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleShowFormButton = () => {
    setShowForm(!showForm);
  };

  if (!showForm) {
    return (
      <div className="new-expense">
        <button onClick={handleShowFormButton}>Add New Expense</button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={props.onSaveExpenseData}
        onFormToggle={handleShowFormButton}
      />
    </div>
  );
};

export default NewExpense;
