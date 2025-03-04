import { InputProps } from "../utils/types";

const Input: React.FC<InputProps> = ({
  newTodo,
  onInputChange,
  onKeyDown,
  onAddTodo,
}) => {
  return (
    <div className="input-container">
      <input
        className="task-input"
        type="text"
        placeholder="What needs to be done?"
        value={newTodo}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
      <button className="add-button" onClick={onAddTodo}>
        +
      </button>
    </div>
  );
};

export default Input;
