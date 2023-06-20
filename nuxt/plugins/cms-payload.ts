import { Page } from "~/models/cms/Page"

export default definePayloadPlugin(() => {
  /**Cart */
  definePayloadReducer(
    'CMSPage',
    (value) => value instanceof Page && value.toJSON()
  )
  definePayloadReviver('CMSPage', (data) => new Page(data))
})
