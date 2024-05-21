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
        <link rel="stylesheet" href="assets/base.css" />
        <link rel="stylesheet" href="assets/index.css" />
      </head>
      <body>
        ${props.children}
      </body>
    </html>
  `;
};

app.get("/", (c) => {
  return c.html(
    <Root
      children={html`
        <section class="todoapp">
          <header class="header">
            <h1>todos</h1>
            <input
              class="new-todo"
              placeholder="What needs to be done?"
              autofocus
            />
          </header>
        </section>
        <footer class="info">
          <p>Double-click to edit a todo</p>
          <!-- Change this out with your name and url ↓ -->
          <p>Created by <a href="http://todomvc.com">you</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
        <!-- Scripts here. Don't remove ↓ -->
        <script src="assets/base.js"></script>
      `}
    />
  );
});

export default app;
