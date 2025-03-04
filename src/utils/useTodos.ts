import { useReducer } from "react";
import { Todo, Filter } from "./types";

interface State {
  todos: Todo[];
  filter: Filter;
}

type Action =
  | { type: "add"; text: string }
  | { type: "toggle"; index: number }
  | { type: "delete"; index: number }
  | { type: "clearCompleted" }
  | { type: "changeFilter"; filter: Filter };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [...state.todos, { text: action.text.trim(), checked: false }],
      };
    case "toggle":
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.index ? { ...todo, checked: !todo.checked } : todo
        ),
      };
    case "delete":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.index),
      };
    case "clearCompleted":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.checked),
      };
    case "changeFilter":
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

const useTodos = () => {
  const [state, dispatch] = useReducer(reducer, { todos: [], filter: "all" });

  const addTodo = (text: string) => {
    if (text.trim() !== "") {
      dispatch({ type: "add", text });
    }
  };

  const toggleTodo = (index: number) => dispatch({ type: "toggle", index });

  const deleteTodo = (index: number) => dispatch({ type: "delete", index });

  const clearCompleted = () => dispatch({ type: "clearCompleted" });

  const changeFilter = (filter: Filter) =>
    dispatch({ type: "changeFilter", filter });

  const itemsLeft = state.todos.filter((todo) => !todo.checked).length;
  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "active") return !todo.checked;
    if (state.filter === "completed") return todo.checked;
    return true;
  });

  return {
    filteredTodos,
    filter: state.filter,
    itemsLeft,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    changeFilter,
  };
};

export default useTodos;
