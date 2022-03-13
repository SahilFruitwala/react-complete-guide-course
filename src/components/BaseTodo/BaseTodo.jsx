import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";

import "./BaseTodo.css";

const INTITAL_TODOS = [
  {
    id: 1,
    title: "Clean Room",
    complete: false,
  },
  {
    id: 2,
    title: "Eat Dinner",
    complete: false,
  },
  {
    id: 3,
    title: "Check Mail",
    complete: false,
  },
];

const BaseTodo = () => {
  const [todos, setTodos] = useState(INTITAL_TODOS);

  const addTodoHandler = (todo) => {
    console.log([...todos, todo]);
    setTodos((prevState) => {
      return [...prevState, todo];
    });
  };

  const changeState = (e) => {
    const tempTodos = [...todos];
    const index = todos.findIndex(
      (todo) => todo.id.toString() === e.target.value
    );

    if (index > -1) {
      tempTodos[index].complete = !tempTodos[index].complete;
      const tempTodo = tempTodos.splice(index, 1);
      tempTodos.push(tempTodo[0]);
      setTodos(tempTodos);
    }
  };

  return (
    <>
      <AddTodo setTodos={setTodos} addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onTaskDone={changeState} />
    </>
  );
};

export default BaseTodo;
