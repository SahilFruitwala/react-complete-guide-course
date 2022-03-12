import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import styles from "./CourseGoalList.module.css";
import Card from "../../UI/Card/Card";

const CourseGoalList = (props) => {
  return (
    <Card className={styles.goals}>
      <ul>
        {props.items.map((goal) => (
          <CourseGoalItem
            key={goal.id}
            id={goal.id}
            onDelete={props.onDeleteItem}
          >
            {goal.text}
          </CourseGoalItem>
        ))}
      </ul>
    </Card>
  );
};

export default CourseGoalList;
