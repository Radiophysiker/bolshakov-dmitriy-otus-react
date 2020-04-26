import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { StateInterface, ToDoMain } from "./App";
const input = "input#newTask";
const button = "button#addNewTask";
let todoListWrapper: ReactWrapper;
// let todoListWrapper: ShallowWrapper;

describe("Default render tests", () => {
  it("Find Input newTask", () => {
    const wrapper: ReactWrapper = mount(<ToDoMain />);
    expect(
      wrapper
        .find(input)
        .first()
        .matchesElement(<input />),
    ).toBe(true);
  });
  it("Find Button addNewTask", () => {
    const wrapper: ReactWrapper = mount(<ToDoMain />);
    expect(
      wrapper
        .find(button)
        .first()
        .matchesElement(<button>Add</button>),
    ).toBe(true);
  });
});

describe("Action tests", () => {
  beforeEach(() => {
    todoListWrapper = mount(<ToDoMain />);
  });
  it("Create new task", () => {
    todoListWrapper
      .find(input)
      .simulate("change", { currentTarget: { value: "test" } });
    todoListWrapper.find("ToDoForm").simulate("submit");
    const state: StateInterface = todoListWrapper.state() as StateInterface;
    expect(state.items).toHaveLength(4);
  });
  it("Remove task", () => {
    todoListWrapper.find("button.remove").first().simulate("click");
    const state: StateInterface = todoListWrapper.state() as StateInterface;
    expect(state.items).toHaveLength(2);
  });
  it("Important task", () => {
    todoListWrapper
      .find(input)
      .simulate("change", { currentTarget: { value: "test" } });
    todoListWrapper.find("ToDoForm").simulate("submit");
    todoListWrapper.find("button.important").last().simulate("click");
    let state: StateInterface = todoListWrapper.state() as StateInterface;
    let items = state.items;
    expect(items[items.length - 1].important).toBe(true);
    todoListWrapper.find("button.important").last().simulate("click");
    state = todoListWrapper.state() as StateInterface;
    items = state.items;
    expect(items[items.length - 1].important).toBe(false);
  });
  it("Check initial task", () => {
    const state: StateInterface = todoListWrapper.state() as StateInterface;
    expect(state.items).toHaveLength(3);
  });
});
