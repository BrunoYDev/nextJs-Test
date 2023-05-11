"use client";

import { useTodoStore } from "@/stores/useTodoStore";

interface ICard {
    id: string;
    todoItem: string;
}

const TodoCard = ({id,todoItem}: ICard) => {
  const removeTodo = useTodoStore((store) => store.removeTodo);

  return (
    <li>
      <h2>{todoItem}</h2>
      <button onClick={() => removeTodo(id)}>Remover Item</button>
    </li>
  );
};

export default TodoCard;
