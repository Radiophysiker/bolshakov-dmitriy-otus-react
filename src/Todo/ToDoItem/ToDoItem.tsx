import React, { FC } from "react";
import { ToDoItemInterface } from "../Types/items";
import { css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";
interface LocalItem extends ToDoItemInterface {
  className?: string;
}
interface ToDoItemProps {
  item: LocalItem;
  index: number;
  onClickToDoImportant: (id: string) => void;
  onClickToDoDelete: (id: string) => void;
  onClickToDoDone: (id: string) => void;
}

const removeAnimation = keyframes`
  from {
    transform: scaleY(1);
  }
  40% {
    transform: scaleY(0.8);
  }
  100% {
    transform: translateX(100%);
  }
`;
const addAnimation = keyframes`
  from {
    transform: scaleY(0.5) translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const Button = css`
  padding: 1px 7px;
  min-width: 22px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  color: white;
  background-image: none;
  cursor: pointer;
  border: 1px solid transparent;
`;
const Item = styled.div`
  transition: height 1s;
  position: relative;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
  display: flex;
  cursor: pointer;
  justify-content: space-between;

  span {
    font-weight: ${(props: ToDoItemInterface) =>
      props.important ? "bold" : "normal"};
    text-decoration: ${(props: ToDoItemInterface) =>
      props.done ? "line-through" : "none"};
  }
  &.add {
    animation: ${addAnimation} 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  &.remove {
    animation: ${removeAnimation} 1s ease-in-out;
    animation-fill-mode: forwards;
  }
`;
const ButtonRemove = styled.button`
  ${Button};
  background-color: #d9534f;
  border-color: #d43f3a;
`;
const ButtonImportant = styled.button`
  ${Button};
  background-color: #398439;
  border-color: #398439;
  margin-right: 8px;
`;

export const ToDoItem: FC<ToDoItemProps> = ({
  item,
  onClickToDoDone,
  onClickToDoDelete,
  onClickToDoImportant,
  index,
}) => {
  const handlerClickImportant = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClickToDoImportant(item.id);
  };
  const handlerClickRemove = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClickToDoDelete(item.id);
  };
  return (
    <Item
      className={item.className}
      onClick={() => onClickToDoDone(item.id)}
      {...item}
    >
      <span>
        {index + 1}. {item.label}
      </span>
      <div>
        <ButtonImportant
          id="importantTask"
          className="important"
          onClick={handlerClickImportant}
        >
          !
        </ButtonImportant>
        <ButtonRemove
          id="removeTask"
          className="remove"
          onClick={handlerClickRemove}
        >
          x
        </ButtonRemove>
      </div>
    </Item>
  );
};
export default ToDoItem;
