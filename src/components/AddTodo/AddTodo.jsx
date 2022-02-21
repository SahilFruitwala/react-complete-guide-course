import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";

import "./AddTodo.css";

const AddTodo = (props) => {
  const titleInput = useRef(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    // current property is refered to input element
    titleInput.current.focus();
  }, []);

  const onChangeHandle = (e) => {
    setTitle(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.which === 13) {
      todoHandler();
    }
  };

  const todoHandler = () => {
    if (title.trim().length > 2) {
      setTitle("");

      props.addTodoHandler({
        id: nanoid(),
        title: title,
        complete: false,
      });
    }
  };

  return (
    <div className="center add-todo">
      <input
        ref={titleInput}
        type="text"
        name="title"
        id="title"
        onKeyPress={handleKeyPress}
        onChange={onChangeHandle}
        placeholder="Enter task..."
        value={title}
      />
      <button onClick={todoHandler}>Add</button>
    </div>
  );
};

export default AddTodo;
