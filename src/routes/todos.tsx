import { Todo } from "@/components";
import { todos } from "@/utils/todos";
import type { Todo as ToDoClass } from "@/utils/todos";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  const query = c.req.query("search");

  const filtered = query
    ? todos.todos.filter(({ description }) =>
        description.includes(query.toLowerCase())
      )
    : todos.todos;

  return c.html(
    <>
      {filtered.map((todo) => (
        <Todo {...todo} />
      ))}
    </>
  );
});

app.delete("/:id", (c) => {
  const id = c.req.param("id");
  todos.delete(id as ToDoClass["id"]);
  return c.body(null);
});

export default app;
