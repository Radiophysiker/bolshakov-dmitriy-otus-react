import React from "react";
import { ToDo } from "./App";
import { action } from "@storybook/addon-actions";
import { ToDoList } from "../ToDoList";
import { ToDoForm } from "../ToDoForm";

export default {
  title: "ToDo",
  component: ToDo,
};

export const ToDoStory: React.FC<{}> = () => {
  const items = [
    { id: "sd1", label: "Drink Coffee", important: false, done: false },
    { id: "sf2", label: "Learn React", important: true, done: false },
    { id: "sf3", label: "Make Awesome App", important: false, done: true },
  ];
  return (
    <div>
      <ToDoList
        items={items}
        onClickToDoDone={action("Отметить задачу сделанной")}
        onClickToDoImportant={action("Отметить задачу важной")}
        onClickToDoDelete={action("Удалить задачу")}
      />
      <ToDoForm onClickToDoAdd={action("Добавить задачу")} />
    </div>
  );
};
