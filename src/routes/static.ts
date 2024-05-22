import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();

app.use(
  "/htmx.min.js",
  serveStatic({
    path: "node_modules/htmx.org/dist/htmx.min.js",
  })
);

app.use(
  "/*",
  serveStatic({
    root: "./",
    rewriteRequestPath: (path) => path.replace("/static", "/src/static"),
  })
);

export default app;
