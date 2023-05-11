'use client';

import { IItem, useTodoStore } from "@/stores/useTodoStore";
import TodoCard from "../TodoCard/TodoCard";

const TodoList = () => {
    const { todoList } = useTodoStore((store) => store);
    return (
        <ul>
            {todoList.map((listItem) => (
                <TodoCard key={listItem.id} id={listItem.id} todoItem={listItem.todoItem} />
            ))}
        </ul>
    )
}

export default TodoList;