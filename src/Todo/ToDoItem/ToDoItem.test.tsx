import React from "react";
import { mount, shallow, ShallowWrapper } from "enzyme";
import { matchers } from "jest-emotion";
import TodoItem from "./ToDoItem";
import renderer from "react-test-renderer";
expect.extend(matchers);

describe("Check render without snapshot", () => {
  it("Render props test data N1", () => {
    const wrapper = mount(
      <TodoItem
        index={0}
        onClickToDoDone={() => ({})}
        onClickToDoDelete={() => ({})}
        onClickToDoImportant={() => ({})}
        item={{
          id: "sd1",
          label: "Drink Coffee",
          important: false,
          done: false,
        }}
      />,
    );
    expect(
      wrapper.find("span").matchesElement(<span>1. Drink Coffee</span>),
    ).toBe(true);
  });
});
describe("Check render with snapshot", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TodoItem
        index={1}
        onClickToDoDone={() => ({})}
        onClickToDoDelete={() => ({})}
        onClickToDoImportant={() => ({})}
        item={{
          id: "sd1",
          label: "Check Test",
          important: false,
          done: false,
        }}
      />,
    );
  });
  it("Render without props", () => {
    const tree = renderer.create(
      <TodoItem
        index={1}
        onClickToDoDone={() => ({})}
        onClickToDoDelete={() => ({})}
        onClickToDoImportant={() => ({})}
        item={{
          id: "sd1",
          label: "Check Test",
          important: false,
          done: false,
        }}
      />,
    );
    // expect(tree.toJSON()).toHaveStyleRule("line-height", "22px", {
    //   target: "span",
    // });
    // expect(tree.toJSON()).toHaveStyleRule("font-size", "12px", {
    //   target: "button",
    // });
    expect(tree.toJSON()).toHaveStyleRule("display", "flex");
    // expect(tree.toJSON()).toHaveStyleRule("display", "flex", {
    //   target: "div",
    // });
    expect(tree.toJSON()).toHaveStyleRule("position", "relative");
  });

  // it("Render with props", () => {
  //   expect(
  //     shallow(<HelloWorld name="React" />).matchesElement(
  //       <div>Hello React!</div>,
  //     ),
  //   ).toBe(true);
  // });
});
