import { Todo } from "@/components";
import { todos } from "@/utils/todos";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  const query = c.req.query("search");

  const filtered = query
    ? todos.filter(({ description }) =>
        description.includes(query.toLowerCase())
      )
    : todos;

  return c.html(
    <>
      {filtered.map((todo) => (
        <Todo {...todo} />
      ))}
    </>
  );
});

export default app;
