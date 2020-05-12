export interface Todolists {
  todolists: Todolist[];
}

export interface Todolist {
  title: string;
  tasks: Task[];
}

export interface Task {
  text: string;
  id: number;
}
