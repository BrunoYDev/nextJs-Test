import { create } from "zustand";

export interface IItem{
    todoItem: string;
    id: string;
}

interface ITodoList{
    todoList: IItem[];
    addTodo: (newTodo: IItem) => void;
    removeTodo: (todoId: string) => void;
}

export const useTodoStore = create<ITodoList>((set) => ({
    todoList: [],
    addTodo: (newTodo) => set(({todoList})=>{
        const newTodoList = [...todoList, newTodo];
        return { todoList: newTodoList };
    }),
    removeTodo: (todoId) => set(({todoList})=>{
        const newTodoList = todoList.filter(currentTodo => currentTodo.id !== todoId);
        return { todoList: newTodoList };
    })
}));