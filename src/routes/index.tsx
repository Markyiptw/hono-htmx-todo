import { Todo } from "@/components";
import { todos } from "@/utils/todos";
import { Hono } from "hono";
import { html } from "hono/html";
import type { FC } from "hono/jsx";

const app = new Hono();

const Document: FC = (props) => html`
  <html>
    <head>
      <title>todo</title>
      <meta charset="UTF-8" />
      <script src="/static/htmx.min.js"></script>
      <script src="/static/todo.js"></script>
      <link rel="stylesheet" href="/static/styles.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script>
    </head>
    <body hx-boost="true">
      <section>
        <h1>Todos</h1>
        <label
          >Search
          <input
            type="search"
            name="search"
            placeholder="Begin Typing To Search"
            hx-get="/todos"
            hx-trigger="keyup changed delay:500ms, search"
            hx-target="#todos"
            hx-replace="innerHTML"
        /></label>

        <form
          hx-post="/todos/sort"
          hx-trigger="end"
          class="sortable"
          id="todos"
        >
          ${props.children}
        </form>
        <form method="post" action="/todos">
          <label
            >Description
            <input
              type="text"
              minlength="3"
              name="description"
              autofocus
              required
          /></label>
        </form>
      </section>
    </body>
  </html>
`;

app.get("/", (c) => {
  return c.html(
    <Document>
      {todos.todos.map((todo) => (
        <Todo {...todo} />
      ))}
    </Document>
  );
});

export default app;
