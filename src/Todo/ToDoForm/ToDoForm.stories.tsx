import React from "react";
import { ToDoForm } from "./ToDoForm";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "ToDoForm",
  component: ToDoForm,
  decorators: [withKnobs],
};
export const ToDoFormStory: React.FC<{}> = () => {
  return <ToDoForm onClickToDoAdd={action("Добавить")} />;
};
