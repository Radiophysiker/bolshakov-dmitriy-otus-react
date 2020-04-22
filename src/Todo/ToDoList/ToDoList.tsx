import React, { FC } from "react";
import { TodoItem } from "../ToDoItem";
import { ToDoItemInterface, TodoListInterface } from "../Types/items";
export const ToDoList: FC<TodoListInterface> = ({ items, onClickTodo }) => {
  const elements = items.map((item: ToDoItemInterface, index: number) => {
    return (
      <TodoItem
        key={item.id}
        index={index}
        item={item}
        onClickTodo={() => onClickTodo(item.id)}
      />
    );
  });
  return <div>{elements}</div>;
};
