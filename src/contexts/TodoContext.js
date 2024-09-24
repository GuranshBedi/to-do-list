import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id : 1,
            todo: "Kuch bhi",
            completed: false
        }
    ],
    addTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id,todo) => {},
    todoCompleted: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}