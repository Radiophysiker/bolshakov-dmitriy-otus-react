import React, { FC } from "react";
import { ToDoItemInterface } from "../Types/items";
interface ToDoItemProps {
  item: ToDoItemInterface;
  onClickTodo: (id: string) => void;
}
export const TodoItem: FC<ToDoItemProps> = ({ item, onClickTodo }) => {
  return <div onClick={() => onClickTodo(item.id)}> {item.label} </div>;
};
