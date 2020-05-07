import React, { Component } from "react";
import { ToDoItem } from "../ToDoItem";
import { ToDoItemInterface, TodoListInterface } from "../Types/items";
import styled from "@emotion/styled";
import de from "deep-equal";
const Title = styled.h1`
  margin-top: 0;
`;
export interface StateInterface {
  items: Array<ToDoItemInterface>;
}
export class ToDoList extends Component<TodoListInterface, StateInterface> {
  constructor(props: TodoListInterface) {
    super(props);
    this.state = {
      items: this.props.items,
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  public removeItem(
    items: Array<ToDoItemInterface>,
    prevItem: Array<ToDoItemInterface>,
  ) {
    const prevIds = prevItem.map((item) => item.id);
    const Ids = items.map((item) => item.id);
    const removedId = prevIds.filter((id) => !Ids.includes(id))[0];
    this.setState(({ items }) => ({
      items: items.map((item) =>
        item.id === removedId ? { ...item, className: "remove" } : item,
      ),
    }));
    setTimeout(() => {
      this.setState(({ items }) => ({
        items: items.filter((item) => item.id !== removedId),
      }));
    }, 1000);
  }
  public addItem(
    items: Array<ToDoItemInterface>,
    prevItem: Array<ToDoItemInterface>,
  ) {
    const prevIds = prevItem.map((item) => item.id);
    const Ids = items.map((item) => item.id);
    const addedId = Ids.filter((id) => !prevIds.includes(id))[0];
    this.setState(({}, { items }) => ({
      items: items.map((item) =>
        item.id === addedId ? { ...item, className: "add" } : item,
      ),
    }));
    setTimeout(() => {
      this.setState(({}, { items }) => ({
        items: items,
      }));
    }, 1000);
  }
  public changeState(prevItem: Array<ToDoItemInterface>) {
    this.setState(() => ({
      items: prevItem,
    }));
  }
  componentDidUpdate(prevProps: TodoListInterface) {
    const prevItem = prevProps.items;
    const { items } = this.props;
    if (prevItem.length > items.length) {
      this.removeItem(items, prevItem);
    } else if (prevItem.length < items.length) {
      this.addItem(items, prevItem);
    } else {
      if (!de(prevItem, items)) {
        this.changeState(prevItem);
      }
    }
  }

  public render() {
    const elements = this.state.items.map(
      (item: ToDoItemInterface, index: number) => {
        return (
          <ToDoItem
            key={item.id}
            index={index}
            item={item}
            onClickToDoImportant={() =>
              this.props.onClickToDoImportant(item.id)
            }
            onClickToDoDelete={() => this.props.onClickToDoDelete(item.id)}
            onClickToDoDone={() => this.props.onClickToDoDone(item.id)}
          />
        );
      },
    );
    return (
      <React.Fragment>
        <Title>ToDo:</Title>
        <div style={{ overflow: "hidden" }}>{elements}</div>
      </React.Fragment>
    );
  }
}
