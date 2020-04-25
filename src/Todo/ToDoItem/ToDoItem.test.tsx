import React from "react";
import { mount, shallow, ShallowWrapper } from "enzyme";
import { matchers } from "jest-emotion";
import ToDoItem from "./ToDoItem";
import renderer from "react-test-renderer";
expect.extend(matchers);
const props = {
  index: 0,
  onClickToDoDone: () => ({}),
  onClickToDoDelete: () => ({}),
  onClickToDoImportant: () => ({}),
  item: { id: "sd1", label: "Drink Coffee", important: false, done: false },
};
describe("Check text-content in span", () => {
  it("Render props test data N1", () => {
    const wrapper = mount(<ToDoItem {...props} />);
    expect(
      wrapper.find("span").matchesElement(<span>1. Drink Coffee</span>),
    ).toBe(true);
  });
});

describe("Check text-decoration in span", () => {
  it("Done: false", () => {
    const localProps = { ...props, item: { ...props.item, done: false } };
    const tree = renderer.create(<ToDoItem {...localProps} />);
    expect(tree.toJSON()).toHaveStyleRule("text-decoration", "none", {
      target: "span",
    });
  });
  it("Done: true", () => {
    const localProps = { ...props, item: { ...props.item, done: true } };
    const tree = renderer.create(<ToDoItem {...localProps} />);
    expect(tree.toJSON()).toHaveStyleRule("text-decoration", "line-through", {
      target: "span",
    });
  });
});

describe("Check font-weight in span", () => {
  it("important: false", () => {
    const localProps = { ...props, item: { ...props.item, important: false } };
    const tree = renderer.create(<ToDoItem {...localProps} />);
    expect(tree.toJSON()).toHaveStyleRule("font-weight", "normal", {
      target: "span",
    });
  });
  it("important: true", () => {
    const localProps = { ...props, item: { ...props.item, important: true } };
    const tree = renderer.create(<ToDoItem {...localProps} />);
    expect(tree.toJSON()).toHaveStyleRule("font-weight", "bold", {
      target: "span",
    });
  });
});
