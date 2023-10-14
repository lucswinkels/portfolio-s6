import Iframe from "sanity-plugin-iframe-pane";
import { DefaultDocumentNodeResolver } from "sanity/desk";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `http://localhost:3000/api/preview`,
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};