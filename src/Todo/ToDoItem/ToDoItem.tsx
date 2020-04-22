import React, { FC } from "react";
import { ToDoItemInterface } from "../Types/items";
interface ToDoItemProps {
  item: ToDoItemInterface;
  index: number;
  onClickTodo: (id: string) => void;
}
export const TodoItem: FC<ToDoItemProps> = ({ item, onClickTodo, index }) => {
  return (
    <div onClick={() => onClickTodo(item.id)}>
      {index + 1} {item.label}
    </div>
  );
};
