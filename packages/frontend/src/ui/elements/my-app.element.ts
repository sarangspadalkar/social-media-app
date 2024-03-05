import { css, defineElementNoInputs, html } from "element-vir";

export const MyApp = defineElementNoInputs({
  tagName: "my-app",
  styles: css`
    :host {
      display: flex;
      flex-direction: column;
      font-family: sans-serif;
    }
  `,
  renderCallback() {
    return html` <span>Hello there!</span> `;
  },
});
