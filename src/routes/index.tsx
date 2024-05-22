import { Hono } from "hono";
import { html } from "hono/html";
import type { FC } from "hono/jsx";

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    html`
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
              <div data-description="Bake a cake">
                <input
                  type="hidden"
                  name="id"
                  value="3fdd528c-26c7-4490-94b3-e181b80218c1"
                />
                <button
                  class="delete"
                  hx-target="closest div"
                  hx-swap="outerHTML"
                  hx-delete="/todos/3fdd528c-26c7-4490-94b3-e181b80218c1"
                >
                  ❌
                </button>
                <button
                  class="edit"
                  hx-target="closest div"
                  hx-swap="outerHTML"
                  hx-get="/todos/3fdd528c-26c7-4490-94b3-e181b80218c1/edit"
                >
                  📝
                </button>
                <span
                  hx-target="closest div"
                  hx-swap="outerHTML"
                  hx-post="/todos/3fdd528c-26c7-4490-94b3-e181b80218c1/toggle"
                  >Bake a cake</span
                >
              </div>

              <div data-description="Feed the cat">
                <input
                  type="hidden"
                  name="id"
                  value="efe2ae81-954f-492c-836a-a5d05cc915ba"
                />
                <button
                  class="delete"
                  hx-target="closest div"
                  hx-swap="outerHTML"
                  hx-delete="/todos/efe2ae81-954f-492c-836a-a5d05cc915ba"
                >
                  ❌
                </button>
                <button
                  class="edit"
                  hx-target="closest div"
                  hx-swap="outerHTML"
                  hx-get="/todos/efe2ae81-954f-492c-836a-a5d05cc915ba/edit"
                >
                  📝
                </button>
                <span
                  hx-target="closest div"
                  hx-swap="outerHTML"
                  hx-post="/todos/efe2ae81-954f-492c-836a-a5d05cc915ba/toggle"
                  >Feed the cat</span
                >
              </div>

              <div data-description="Take out the rubbish">
                <input
                  type="hidden"
                  name="id"
                  value="045378c9-5ea0-44b5-aba1-12a750bed368"
                />
                <button
                  class="delete"
                  hx-target="closest div"
                  hx-swap="outerHTML"
                  hx-delete="/todos/045378c9-5ea0-44b5-aba1-12a750bed368"
                >
                  ❌
                </button>
                <button
                  class="edit"
                  hx-target="closest div"
                  hx-swap="outerHTML"
                  hx-get="/todos/045378c9-5ea0-44b5-aba1-12a750bed368/edit"
                >
                  📝
                </button>
                <span
                  hx-target="closest div"
                  hx-swap="outerHTML"
                  hx-post="/todos/045378c9-5ea0-44b5-aba1-12a750bed368/toggle"
                  >Take out the rubbish</span
                >
              </div>
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
    `
  );
});

export default app;
