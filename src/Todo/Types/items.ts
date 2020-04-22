export interface ToDoItemInterface {
  id: string;
  label: string;
  important: boolean;
  done: boolean;
}

export interface TodoListInterface {
  items: Array<ToDoItemInterface>;
  onClickTodo: (id: string) => void;
  // onClickTodoDelete: (id: string) => () => void;
}
