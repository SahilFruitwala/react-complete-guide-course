import './Todo.css'

const Todo = (props) => {
  const { title,complete } = { ...props.todo };
  return (
    <li>
      <div className="todo-item">
        <div className="todo-item__description">
          <h1 className={complete && 'todo-complete'}>{title}</h1>
        </div>
      </div>
    </li>
  );
};

export default Todo;
