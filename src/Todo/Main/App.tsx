import React, { Component } from "react";
import { ToDoList } from "../ToDoList";
import { ToDoItemInterface } from "../Types/items";
interface StateInterface {
  items: Array<ToDoItemInterface>;
}
export class ToDo extends Component<{}, StateInterface> {
  state: StateInterface = {
    items: [
      { id: "sd1", label: "Drink Coffee", important: false, done: false },
      { id: "sf2", label: "Learn React", important: true, done: false },
      { id: "sf3", label: "Make Awesome App", important: false, done: true },
    ],
  };

  toggleTodoDone = (id: string) => {
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

  onClickTodo = (id: string) => {
    console.log(id);
    this.toggleTodoDone(id);
  };

  public render() {
    const { items } = this.state;
    return <ToDoList items={items} onClickTodo={this.onClickTodo} />;
  }
}
