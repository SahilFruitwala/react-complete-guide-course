import './Todo.css'

const Todo = (props) => {
  const { id, title,complete } = { ...props.todo };
  return (
    <li>
      <div className="todo-item">
        <div className="todo-item__description">
          <button
            onClick={props.onTaskDone}
            className={complete ? "todo-complete" : ""}
            value={id}
          >
            {title}
          </button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
