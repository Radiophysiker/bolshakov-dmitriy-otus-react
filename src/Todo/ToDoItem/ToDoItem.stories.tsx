import React from "react";
import { ToDoItem } from "./ToDoItem";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "ToDoItem",
  component: ToDoItem,
  decorators: [withKnobs],
};
const item = {};
export const ToDoItemStory: React.FC<{}> = () => {
  return (
    <ToDoItem
      index={number("number", 0)}
      onClickToDoDone={action("Закрыть задачу")}
      onClickToDoDelete={action("Удалить задачу")}
      onClickToDoImportant={action("Отметить задачу важной")}
      item={{
        id: "dsf",
        label: text("label", "dsf"),
        done: boolean("done", false),
        important: boolean("important", false),
      }}
    />
  );
};
