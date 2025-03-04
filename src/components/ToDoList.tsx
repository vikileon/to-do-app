import { ToDoListProps } from "../utils/types";

const ToDoList: React.FC<ToDoListProps> = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
}) => {
  if (todos.length === 0) {
    return <p className="empty-message">There are no tasks yet</p>;
  }

  return (
    <div className="to-do-list">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="todo">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => onToggleTodo(index)}
              />
              <span
                style={{
                  textDecoration: todo.checked ? "line-through" : "none",
                  color: todo.checked ? "#d9d9d9" : "#565656",
                }}
              >
                {todo.text}
              </span>
              <button
                className="delete-button"
                onClick={() => onDeleteTodo(index)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
