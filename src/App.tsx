import { useState, ChangeEvent, KeyboardEvent } from "react";
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import useTodos from "./utils/useTodos";

const App: React.FC = () => {
  const {
    filteredTodos,
    filter,
    itemsLeft,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    changeFilter,
  } = useTodos();

  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value);
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };
  const handleAddTodo = () => {
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <h1 className="app-title">todos</h1>
      <div className="main-container">
        <Input
          newTodo={newTodo}
          onInputChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onAddTodo={handleAddTodo}
        />
        <ToDoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
        />
        <Footer
          itemsLeft={itemsLeft}
          filter={filter}
          onFilterChange={changeFilter}
          onClearCompleted={clearCompleted}
        />
      </div>
    </>
  );
};

export default App;
