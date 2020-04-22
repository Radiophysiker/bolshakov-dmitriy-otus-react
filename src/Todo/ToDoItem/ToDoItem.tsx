import React, { FC } from "react";
import { ToDoItemInterface } from "../Types/items";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
interface ToDoItemProps {
  item: ToDoItemInterface;
  index: number;
  onClickTodo: (id: string) => void;
}
const Button = css`
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  color: white;
  background-image: none;
  cursor: pointer;
  border: 1px solid transparent;
`;
const Item = styled.div`
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  font-weight: ${(props: ToDoItemInterface) => props.done && "bold"};
`;
const ButtonRemove = styled.button`
  ${Button};
  background-color: #d9534f;
  border-color: #d43f3a;
`;
export const TodoItem: FC<ToDoItemProps> = ({ item, onClickTodo, index }) => {
  return (
    <Item onClick={() => onClickTodo(item.id)} {...item}>
      <span>
        {index + 1}. {item.label}
      </span>
      <ButtonRemove>x</ButtonRemove>
    </Item>
  );
};
