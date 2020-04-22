import React, { FC } from "react";
import { TodoItem } from "../ToDoItem";
import { ToDoItemInterface, TodoListInterface } from "../Types/items";
import styled from "@emotion/styled";
const Title = styled.h1`
  margin-top: 0;
`;
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
  return (
    <React.Fragment>
      <Title>ToDo:</Title>
      <div>{elements}</div>
    </React.Fragment>
  );
};
