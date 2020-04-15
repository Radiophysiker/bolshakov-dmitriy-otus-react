import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import HelloWorld from "./HelloWorld";

export default {
  title: "HelloWorld",
  decorators: [withKnobs],
};

export const HelloWorldStory: React.FC<{}> = () => {
  return <HelloWorld name={text("Name", "React")} />;
};
