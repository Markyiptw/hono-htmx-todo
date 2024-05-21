import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();

app.use(
  "/base.css",
  serveStatic({
    path: "node_modules/todomvc-common/base.css",
  })
);

app.use(
  "/base.js",
  serveStatic({
    path: "node_modules/todomvc-common/base.js",
  })
);

app.use(
  "/index.css",
  serveStatic({
    path: "node_modules/todomvc-app-css/index.css",
  })
);

app.use(
  "/htmx.min.js",
  serveStatic({
    path: "node_modules/htmx.org/dist/htmx.min.js",
  })
);

export default app;
