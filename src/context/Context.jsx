import { createContext, useState } from "react";

export const Context = createContext();

const TODOS = [
  { id: 1, title: "Todo 1", isComplated: false },
  { id: 2, title: "Todo 2", isComplated: false },
];

const readTodosFromStorage = () => {
  try {
    const raw = localStorage.getItem("todos");
    const parsed = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) ? parsed : TODOS;
  } catch {
    return TODOS;
  }
};

export const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState(readTodosFromStorage);

  const updateTodos = (updater) => {
    setTodos((previousTodos) => {
      const updatedTodos =
        typeof updater === "function" ? updater(previousTodos) : updater;

      try {
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
      } catch {}

      return updatedTodos;
    });
  };

  const createTodo = (title) => {
    const cleanTitle = String(title || "").trim();
    if (!cleanTitle) return;

    const newTodo = {
      id: Date.now(),
      title: cleanTitle,
      isComplated: false,
    };

    updateTodos((previousTodos) => [newTodo, ...previousTodos]);
  };

  const toggleTodo = (todoId) => {
    updateTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === todoId
          ? { ...todo, isComplated: !todo.isComplated }
          : todo
      )
    );
  };

  const editTodo = (todoId, newTitle, newCompleted) => {
    const cleanTitle = String(newTitle || "").trim();
    if (!cleanTitle) return;

    updateTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === todoId
          ? { ...todo, title: cleanTitle, isComplated: Boolean(newCompleted) }
          : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    updateTodos((previousTodos) =>
      previousTodos.filter((todo) => todo.id !== todoId)
    );
  };

  return (
    <Context.Provider
      value={{
        todos,
        createTodo,
        toggleTodo,
        editTodo,
        deleteTodo,
      }}
    >
      {children}
    </Context.Provider>
  );
};
