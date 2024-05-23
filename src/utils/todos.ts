export type Todo = {
  description: string;
  id: ReturnType<typeof crypto.randomUUID>;
  createdAt: Date;
  complete: boolean;
};

class Todos {
  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  delete(id: Todo["id"]) {
    const index = this.todos.map(({ id }) => id).indexOf(id);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  add(description: string) {
    this.todos.push({
      description,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      complete: false,
    });
  }

  get(id: Todo["id"]) {
    return this.todos.find((todo) => todo.id === id);
  }
}
export const todos = new Todos();

["Bake a cake", "Feed the cat", "Take out the rubbish"].forEach(
  todos.add.bind(todos)
);
