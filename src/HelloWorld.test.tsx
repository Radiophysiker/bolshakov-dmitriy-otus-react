import React from "react";
import { shallow } from "enzyme";
import HelloWorld from "./HelloWorld";
describe("Hello world render check", () => {
  it("Render without props", () => {
    expect(
      shallow(<HelloWorld />).matchesElement(<div>Hello World!</div>),
    ).toBe(true);
  });

  it("Render with props", () => {
    expect(
      shallow(<HelloWorld name="React" />).matchesElement(
        <div>Hello React!</div>,
      ),
    ).toBe(true);
  });
});
