import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";

import "./AddTodo.css";

const INITIAL_ERROR = { title: "", message: "" };

const AddTodo = (props) => {
  const titleInput = useRef(null);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(INITIAL_ERROR);

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
    if (title.trim().length < 3) {
      setError({
        title: "Enter Valid Data!",
        message: "Todo data should be at least 3 characters long!",
      });
      return;
    }
    setTitle("");

    props.addTodoHandler({
      id: nanoid(),
      title: title,
      complete: false,
    });
  };

  const onClose = () => {
    setError(INITIAL_ERROR);
    titleInput.current.focus();
  };

  return (
    <div>
      {error.title.trim().length > 0 && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={onClose}
        />
      )}
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
    </div>
  );
};

export default AddTodo;
