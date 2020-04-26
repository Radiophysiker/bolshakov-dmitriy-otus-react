import React from "react";
import { shallow, mount } from "enzyme";
import { ToDoForm } from "./ToDoForm";

describe("Default render tests", () => {
  const onClick = jest.fn();

  it("Render input", () => {
    expect(
      mount(<ToDoForm onClickToDoAdd={onClick} />).find("input"),
    ).toHaveLength(1);
  });

  it("Render button", () => {
    expect(
      mount(<ToDoForm onClickToDoAdd={onClick} />).find("button"),
    ).toHaveLength(1);
  });
});

describe("Actions tests", () => {
  it("The button is locked if the field is empty", () => {
    const onClick = jest.fn();
    const todoListFormWrapper = mount(<ToDoForm onClickToDoAdd={onClick} />);
    expect(todoListFormWrapper.find("button").props().disabled).toEqual(true);

    todoListFormWrapper.find("button").simulate("click");
    expect(onClick).not.toHaveBeenCalled();
  });

  it("Create task", () => {
    const onClick = jest.fn();

    const todoListFormWrapper = shallow(<ToDoForm onClickToDoAdd={onClick} />);
    const input = todoListFormWrapper.find("input");
    expect(input.matchesElement(<input />)).toBe(true);
    input.simulate("change", { currentTarget: { value: "test" } });
    expect(todoListFormWrapper.state()).toEqual({ label: "test" });
    expect(todoListFormWrapper.find("input").props().value).toEqual("test");
    todoListFormWrapper.find("button").first().simulate("click");
    // expect(onClick).not.toHaveBeenCalled();
    expect(input.prop("value")).toEqual("");
  });
});
