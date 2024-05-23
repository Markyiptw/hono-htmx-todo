import type { Todo as ToDoType } from "@/utils/todos";
import { FC } from "hono/jsx";

export const Todo: FC<ToDoType> = (props) => (
  <div data-description={props.description}>
    <input type="hidden" name="id" value={props.id} />
    <button
      class="delete"
      hx-target="closest div"
      hx-swap="outerHTML"
      hx-delete={`/todos/${props.id}`}
    >
      ❌
    </button>{" "}
    <button
      class="edit"
      hx-target="closest div"
      hx-swap="outerHTML"
      hx-get={`/todos/${props.id}/edit`}
    >
      📝
    </button>{" "}
    <span
      hx-target="closest div"
      hx-swap="outerHTML"
      hx-post={`/todos/${props.id}/toggle`}
      class={props.complete ? "done" : undefined}
    >
      {props.description}
    </span>
  </div>
);
