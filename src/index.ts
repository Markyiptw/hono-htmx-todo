import { serve } from "@hono/node-server";
import { Hono } from "hono";
import assets from "@/routes/assets";
import index from "@/routes/index";

const app = new Hono();

app.route("/", index);

app.route("/assets", assets);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
