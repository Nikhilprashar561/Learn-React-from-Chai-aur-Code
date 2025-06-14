import { createContext, useContext } from "react";

export const createTodo = createContext({
    todos: [
        {
            id:1,
            todo:"Hello",
            completed: false
        }
    ],
    addTodo : (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo : (id) => {},
    toggoleComplete : (id) => {}
});

export const TodoContextUse = () => {
  return useContext(createTodo);
};

export const TodoProvider = createTodo.Provider;