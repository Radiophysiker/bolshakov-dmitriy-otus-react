import React, { FC } from "react";
import { ToDoItem } from "../ToDoItem";
import { ToDoItemInterface, TodoListInterface } from "../Types/items";
import styled from "@emotion/styled";
const Title = styled.h1`
  margin-top: 0;
`;
export const ToDoList: FC<TodoListInterface> = ({
  items,
  onClickToDoDone,
  onClickToDoImportant,
  onClickToDoDelete,
}) => {
  const elements = items.map((item: ToDoItemInterface, index: number) => {
    return (
      <ToDoItem
        key={item.id}
        index={index}
        item={item}
        onClickToDoImportant={() => onClickToDoImportant(item.id)}
        onClickToDoDelete={() => onClickToDoDelete(item.id)}
        onClickToDoDone={() => onClickToDoDone(item.id)}
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
