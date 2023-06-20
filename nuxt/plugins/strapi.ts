import { Page } from "~/models/cms/Page";

export default definePayloadPlugin(() => {
  definePayloadReducer(
    "Page",
    (value) => value instanceof Page && value.toJSON()
  );
  definePayloadReviver("Page", (data) => new Page(data));
});
