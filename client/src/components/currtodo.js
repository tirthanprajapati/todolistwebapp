import { toggleTodos,updateTodo,deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const onFormSubmit = (e) => {

    e.preventDefault();
    setEditing(prevState => !prevState);
    dispatch(updateTodo(todo._id,text))

  }

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo?.data);
  return (
    <li className="llistt">
      <form
        style={{
          display: editing ? "inline" : "none",
        }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <span
        style={{
          display: editing ? "none" : "",
        }}
      >
        <span
          className="spam"
          onClick={() => dispatch(toggleTodos(todo._id))}
          style={{
            textDecoration: todo.done ? "line-through" : "",
          }}
        >
          {todo.data}
        </span>
        <span className="icon">
          <span
            className="Edit"
            onClick={() => setEditing((prevState) => !prevState)}
          >
            <i className="fas fa-pen" />
          </span>
          <span className="Trash"
                 onClick={() => dispatch(deleteTodo(todo._id))}
          >
            <i className="fas fa-trash" />
          </span>
        </span>
      </span>
    </li>
  );
};

export default Todo;
