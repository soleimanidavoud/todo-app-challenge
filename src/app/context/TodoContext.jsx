import React, { createContext, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([{ id: uuidv1(), ...todo }, ...todos]);
  };

  const editTodo = (id, todo) => {
    var tempTodos = [...todos];
    var todoIndex = todos.findIndex((todo) => todo.id === id);
    tempTodos[todoIndex] = { id, ...todo };
    setTodos(tempTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getTodo = (id) => {
    return todos.find((todo) => todo.id === id);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, editTodo, getTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
