import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import styles from "./CourseInput.module.css";

const INITIAL_ERROR = {
  title: "",
  message: "",
};

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState(INITIAL_ERROR);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0 && !isValid) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length < 3) {
      setError({
        title: "Data is too short!",
        message: "Enter minimum 3 characters!",
      });
      setIsValid(false);
      return;
    }
    setEnteredValue("");
    props.onAddGoal(enteredValue);
  };

  const handleModalClose = () => {
    setIsValid(true);
    setError(INITIAL_ERROR);
  };

  return (
    <div>
      {!isValid && (
        <ErrorModal
          errorTitle={error.title}
          errorMessage={error.message}
          onCloseModal={handleModalClose}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="goal">Goal</label>
          <input
            id="goal"
            type="text"
            value={enteredValue}
            onChange={goalInputChangeHandler}
          />
          <Button type="submit">Add Goal</Button>
        </form>
      </Card>
    </div>
  );
};

export default CourseInput;
