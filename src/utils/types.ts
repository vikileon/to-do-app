import { ChangeEvent, KeyboardEvent } from "react";

export interface Todo {
  text: string;
  checked: boolean;
}

export type Filter = "all" | "active" | "completed";

export interface ToDoListProps {
  todos: Todo[];
  onToggleTodo: (index: number) => void;
  onDeleteTodo: (index: number) => void;
}

export interface FooterProps {
  itemsLeft: number;
  filter: Filter;
  onFilterChange: (newFilter: Filter) => void;
  onClearCompleted: () => void;
}

export interface InputProps {
  newTodo: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onAddTodo: () => void;
}
