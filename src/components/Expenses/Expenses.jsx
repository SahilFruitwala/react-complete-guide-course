import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  const filterChangeHandler = (newYear) => {
    setFilteredYear(newYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === +filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeHandler={filterChangeHandler}
        selectedYear={filteredYear}
      />
      {filteredExpenses.length === 0 && "No DATA"}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {/* {filteredExpenses.length > 0 ? filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )) : "No DATA"} */}
      {/* {filteredYear === "All"
        ? props.expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        : props.expenses
            .filter(
              (expense) =>
                expense.date.getFullYear().toString() === filteredYear
            )
            .map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))} */}
      {/* {
      props.expenses.map((expense) => {
         return ( <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )}
      )} */}

      {/* <ExpenseItem
        title={props.expenses[1]?.title}
        amount={props.expenses[1]?.amount}
        date={props.expenses[1]?.date}
      />
      <ExpenseItem
        title={props.expenses[2]?.title}
        amount={props.expenses[2]?.amount}
        date={props.expenses[2]?.date}
      /> */}
    </Card>
  );
};

export default ExpenseList;
