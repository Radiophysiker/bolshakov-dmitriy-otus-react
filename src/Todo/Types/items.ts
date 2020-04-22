export interface ToDoItemInterface {
  id: string;
  label: string;
  important: boolean;
  done: boolean;
}

export interface TodoListInterface {
  items: Array<ToDoItemInterface>;
  onClickToDoDone: (id: string) => void;
  onClickToDoImportant: (id: string) => void;
  onClickToDoDelete: (id: string) => void;
}
