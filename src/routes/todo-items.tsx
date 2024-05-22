import { Hono } from "hono";
import { html } from "hono/html";
import type { FC } from "hono/jsx";

const app = new Hono();

app.post("/", async (c) => {
  const body = await c.req.parseBody();
  const label = body["label"];

  return c.html(
    <ul className="todo-list">
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked />
          <label>{label}</label>
          <button className="destroy" />
        </div>
        <input className="edit" defaultValue="Create a TodoMVC template" />
      </li>
    </ul>
  );
});
