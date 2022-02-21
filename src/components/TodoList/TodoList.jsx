import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList = (props) => {
  const todos = props.todos;
  return (
    <div className="todos">
      <ul className="todos-list">
        {todos.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo} onTaskDone={props.onTaskDone} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
