import React from "react";
import { ToDoList } from "./ToDoList";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "ToDoList",
  component: ToDoList,
  decorators: [withKnobs],
};

export const ToDoListStory: React.FC<{}> = () => {
  const items = [
    { id: "sd1", label: "Drink Coffee", important: false, done: false },
    { id: "sf2", label: "Learn React", important: true, done: false },
    { id: "sf3", label: "Make Awesome App", important: false, done: true },
  ];
  return (
    <ToDoList
      items={items}
      onClickToDoDone={action("Отметить задачу важной")}
      onClickToDoImportant={action("Отметить задачу важной")}
      onClickToDoDelete={action("Удалить задачу")}
    />
  );
};
