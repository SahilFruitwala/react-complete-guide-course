import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";

import './BaseTodo.css' 

const INTITAL_TODOS = [
    {
        id: 1,
        title: "Clean Room",
        complete: false  
    },
    {
        id: 2,
        title: "Eat Dinner",
        complete: true  
    },
    {
        id: 3,
        title: "Check Mail",
        complete: false  
    }
]

const BaseTodo = () => {
  const [todos, setTodos] = useState(INTITAL_TODOS);

  return (
    <div>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default BaseTodo;
