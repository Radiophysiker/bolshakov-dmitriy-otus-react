import React, { FC } from "react";
import { ToDoItemInterface } from "../Types/items";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
interface ToDoItemProps {
  item: ToDoItemInterface;
  index: number;
  onClickToDoImportant: (id: string) => void;
  onClickToDoDelete: (id: string) => void;
  onClickToDoDone: (id: string) => void;
}
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
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
  display: flex;
  cursor: pointer;
  justify-content: space-between;

}
`;
const Label = styled.span`
  font-weight: ${(props: ToDoItemInterface) => props.important && "bold"};
  text-decoration: ${(props: ToDoItemInterface) =>
    props.done && "line-through"};
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
export const TodoItem: FC<ToDoItemProps> = ({
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
    <Item onClick={() => onClickToDoDone(item.id)}>
      <Label {...item}>
        {index + 1}. {item.label}
      </Label>
      <div>
        <ButtonImportant onClick={handlerClickImportant}>!</ButtonImportant>
        <ButtonRemove onClick={handlerClickRemove}>x</ButtonRemove>
      </div>
    </Item>
  );
};
