import{j as e,G as i}from"./workspace-manager-7VfwGuMm.js";const r=String.raw,n=r`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,o=()=>e.jsx(i,{styles:n}),l=({scope:t=""})=>e.jsx(i,{styles:r`
      ${t} {
        font-family: var(--chakra-fonts-body);
        color: var(--chakra-colors-chakra-body-text);
        background: var(--chakra-colors-chakra-body-bg);
        transition-property: background-color;
        transition-duration: var(--chakra-transition-duration-normal);
        line-height: var(--chakra-lineHeights-base);
      }
      ${t} *, ${t} ::before, ${t} ::after {
        border-color: var(--chakra-colors-chakra-border-color);
      }

      ${t} :where(html) {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      ${t} :where(body) {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${t} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      ${t} :where(main) {
        display: block;
      }

      ${t} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${t} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${t} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${t} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${t} :where(b, strong) {
        font-weight: bold;
      }

      ${t} small {
        font-size: 80%;
      }

      ${t} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${t} sub {
        bottom: -0.25em;
      }

      ${t} :where(sup) {
        top: -0.5em;
      }

      ${t} :where(img) {
        border-style: none;
      }

      ${t} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${t} :where(button, input) {
        overflow: visible;
      }

      ${t} :where(button, select) {
        text-transform: none;
      }

      ${t} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${t} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${t} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${t} progress {
        vertical-align: baseline;
      }

      ${t} textarea {
        overflow: auto;
      }

      ${t} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${t} input[type="number"]::-webkit-inner-spin-button,
      ${t} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${t} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${t} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${t} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${t} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${t} details {
        display: block;
      }

      ${t} summary {
        display: list-item;
      }

      ${t} template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${t} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${t} :where(button) {
        background: transparent;
        padding: 0;
      }

      ${t} fieldset {
        margin: 0;
        padding: 0;
      }

      ${t} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${t} textarea {
        resize: vertical;
      }

      ${t} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${t} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${t} table {
        border-collapse: collapse;
      }

      ${t} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${t} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${t} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${t} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      ${t} [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${t} select::-ms-expand {
        display: none;
      }

      ${n}
    `});export{o as CSSPolyfill,l as default};
