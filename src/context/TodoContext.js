import { createContext, useContext } from "react";


export const TodoContext=createContext({
    todo:[{
        id:1,
        title:"this is todo",
        ismark:false
    }],
    UpdateTodo:(id,todo)=>{},
    DeleteTodo:(id)=>{},
    MarkTodo:(id)=>{},
    AddTodo:(todo)=>{}
});

export const TodoContextProvider=TodoContext.Provider;

export const useTodo=()=>{
    return useContext(TodoContext);
}