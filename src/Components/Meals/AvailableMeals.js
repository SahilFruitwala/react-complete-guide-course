import classes from "./AvailableMeals.module.css";

import DUMMY_MEALS from "./dummy-meals";

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{mealList}</ul>
    </section>
  );
};

export default AvailableMeals;
