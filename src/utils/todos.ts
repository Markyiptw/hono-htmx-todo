export type Todo = {
  description: string;
  id: ReturnType<typeof crypto.randomUUID>;
  createdAt: Date;
  complete: boolean;
};

class Todos {
  todos: Todo[];

  constructor(todos: Todo[]) {
    this.todos = todos;
  }

  delete(id: Todo["id"]) {
    const index = this.todos.map(({ id }) => id).indexOf(id);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}

export const todos = new Todos([
  {
    description: "Bake a cake",
    id: crypto.randomUUID(),
    createdAt: new Date(),
    complete: false,
  },
  {
    description: "Feed the cat",
    id: crypto.randomUUID(),
    createdAt: new Date(),
    complete: false,
  },
  {
    description: "Take out the rubbish",
    id: crypto.randomUUID(),
    createdAt: new Date(),
    complete: false,
  },
]);
