import { Hono } from "hono";
import { html } from "hono/html";
import type { FC } from "hono/jsx";

const app = new Hono();

const Root: FC = (props) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Template • TodoMVC</title>
        <link rel="stylesheet" href="/assets/base.css" />
        <link rel="stylesheet" href="/assets/index.css" />
        <script src="/assets/htmx.min.js"></script>
      </head>
      <body>
        ${props.children}
      </body>
    </html>
  `;
};

app.get("/", (c) => {
  return c.html(
    <Root>
      <section className="todoapp">
        <header className="header">
          <form hx-post="/todo-items">
            <h1>todos</h1>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autofocus
            />
          </form>
        </header>
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        {/* Change this out with your name and url ↓ */}
        <p>
          Created by <a href="http://todomvc.com">you</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </Root>
  );
});

export default app;
