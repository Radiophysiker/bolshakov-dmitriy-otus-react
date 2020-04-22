import React, { Component } from "react";
import { ToDoList } from "../ToDoList";
import styled from "@emotion/styled";
import { ToDoItemInterface } from "../Types/items";
interface StateInterface {
  items: Array<ToDoItemInterface>;
}
const FieldWrapper = styled.div`
  width: 540px;
  margin: 0 auto;
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
`;

export class ToDo extends Component<{}, StateInterface> {
  state: StateInterface = {
    items: [
      { id: "sd1", label: "Drink Coffee", important: false, done: false },
      { id: "sf2", label: "Learn React", important: true, done: false },
      { id: "sf3", label: "Make Awesome App", important: false, done: true },
    ],
  };

  onClickToDoDelete = (id: string) => {
    this.setState((state: StateInterface) => ({
      items: state.items.filter((item: ToDoItemInterface) => item.id !== id),
    }));
  };

  onClickToDoDone = (id: string) => {
    this.setState((state: StateInterface) => ({
      items: state.items.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo,
      ),
    }));
  };

  onClickToDoImportant = (id: string) => {
    this.setState((state: StateInterface) => ({
      items: state.items.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              important: !todo.important,
            }
          : todo,
      ),
    }));
  };

  public render() {
    const { items } = this.state;
    return (
      <FieldWrapper>
        <ToDoList
          items={items}
          onClickToDoImportant={this.onClickToDoImportant}
          onClickToDoDelete={this.onClickToDoDelete}
          onClickToDoDone={this.onClickToDoDone}
        />
      </FieldWrapper>
    );
  }
}
