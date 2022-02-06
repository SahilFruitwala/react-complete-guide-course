import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: 0.01,
    date: "",
  });

  const titleChangeHandler = (event) => {
    setExpenseData((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };
  const amountChanegHandler = (event) => {
    // above is same as this but sometime due to timer react use to update changes may affect this method. SO, use above one.It will take lates snapshot of data keeping scedule state update in mind.
    setExpenseData((prevState) => ({
      ...prevState,
      amount: +event.target.value,
    }));
  };
  const dateChanegHandler = (event) => {
    setExpenseData((prevState) => ({
      ...prevState,
      date: new Date(event.target.value),
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData({ ...expenseData, id: Math.random().toString() });
    setExpenseData({
      title: "",
      amount: 0.01,
      date: "",
    });
    props.onFormToggle();
  };

  const cancelHandler = () => {
    props.onFormToggle();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={expenseData.title}
            placeholder="Enter expense title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0.01"
            step="0.01"
            value={expenseData.amount}
            onChange={amountChanegHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            value={
              expenseData.date === ""
                ? ""
                : expenseData.date.toISOString().split("T")[0]
            }
            onChange={dateChanegHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={cancelHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
