import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { StateInterface, ToDoList } from "./ToDoList";
let todoListWrapper: ReactWrapper;
const items = [
  { id: "sd1", label: "Drink Coffee", important: false, done: false },
  { id: "sf2", label: "Learn React", important: true, done: false },
  {
    id: "sf3",
    label: "Make Awesome App",
    important: false,
    done: true,
  },
];
let methodAddItem: jest.SpyInstance;
let methodChangeState: jest.SpyInstance;
let methodRemoveItem: jest.SpyInstance;
let onDeleteItem: jest.Mock;
let onClickToDoDone: jest.Mock;
let onClickToDoImportant: jest.Mock;
describe("Default render tests", () => {
  beforeEach(() => {
    onDeleteItem = jest.fn();
    onClickToDoDone = jest.fn();
    onClickToDoImportant = jest.fn();
    todoListWrapper = mount(
      <ToDoList
        items={items}
        onClickToDoDelete={onDeleteItem}
        onClickToDoDone={onClickToDoDone}
        onClickToDoImportant={onClickToDoImportant}
      />,
    );
  });
  it("Check count test", () => {
    const state: StateInterface = todoListWrapper.state() as StateInterface;
    expect(state.items).toHaveLength(3);
  });
});

describe("Action tests", () => {
  beforeEach(() => {
    onDeleteItem = jest.fn();
    onClickToDoDone = jest.fn();
    onClickToDoImportant = jest.fn();
    jest.useFakeTimers();
    methodAddItem = jest.spyOn(ToDoList.prototype, "addItem");
    methodChangeState = jest.spyOn(ToDoList.prototype, "changeState");
    methodRemoveItem = jest.spyOn(ToDoList.prototype, "removeItem");
    todoListWrapper = mount(
      <ToDoList
        items={items}
        onClickToDoDelete={onDeleteItem}
        onClickToDoDone={onClickToDoDone}
        onClickToDoImportant={onClickToDoImportant}
      />,
    );
  });
  it("Create new task", () => {
    let state: StateInterface = todoListWrapper.state() as StateInterface;
    expect(state.items).toHaveLength(3);
    todoListWrapper.setProps({
      items: [
        ...items,
        { id: "sd4", label: "Drink Coffee", important: false, done: false },
      ],
    });
    state = todoListWrapper.state() as StateInterface;
    expect(state.items).toHaveLength(4);
    expect(methodAddItem).toHaveBeenCalledTimes(1);
    expect(methodChangeState).toHaveBeenCalledTimes(0);
  });

  it("Delete task", async () => {
    todoListWrapper.setProps({
      items: items.slice(0, 1),
    });
    const state: StateInterface = todoListWrapper.state() as StateInterface;
    expect(state.items).toHaveLength(3);
    expect(methodRemoveItem).toHaveBeenCalledTimes(1);
    expect(methodChangeState).toHaveBeenCalledTimes(0);
  });
});
