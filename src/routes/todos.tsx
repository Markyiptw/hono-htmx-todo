import { Todo } from "@/components";
import { todos } from "@/utils/todos";
import type { Todo as ToDoClass } from "@/utils/todos";
import { Hono } from "hono";

const app = new Hono();

type ID = ToDoClass["id"];

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
  todos.delete(id as ID);
  return c.body(null);
});

app.post("/", async (c) => {
  const body = await c.req.parseBody();
  const description = body["description"];

  if (typeof description === "string") {
    todos.add(description);
  }

  return c.redirect("/");
});

app.get("/:id/edit", (c) => {
  const id = c.req.param("id");
  const todo = todos.get(id as ID)!;
  return c.html(
    <div data-description={todo.id}>
      <input type="hidden" name="id" value={todo.id} />
      <button disabled>❌</button>
      <button disabled>📝</button>
      <form
        hx-patch={`todos/${todo.id}`}
        hx-target="closest div"
        hx-swap="outerHTML"
      >
        <input type="text" name="name" required />
        <input type="submit" />
      </form>
      <span>{todo.description}</span>
    </div>
  );
});

export default app;
