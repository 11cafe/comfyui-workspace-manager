import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript, type StyleFunctionProps } from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AlertDialogProvider } from "./components/AlertDialogProvider.tsx";
import CSSReset from "./MyCSSReset.tsx";
import { waitForApp } from "./utils/comfyapp.ts";

const App = React.lazy(() =>
  import("./App.tsx").then(({ default: App }) => ({
    default: App,
  })),
);

/**
 * Since the z-index of other plug-ins is set to 1111111,
 * part of the content of our Drawer component is covered,
 * so the z-index is adjusted uniformly and multiplied by 10000 based on the default value.
 */
const zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 10000000,
  sticky: 11000000,
  banner: 12000000,
  overlay: 13000000,
  modal: 14000000,
  popover: 15000000,
  skipLink: 16000000,
  toast: 17000000,
  tooltip: 18000000,
};

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  zIndices,
  components: {
    Card: {
      baseStyle: (props: StyleFunctionProps) => ({
        container: {
          backgroundColor: props.colorMode === "dark" ? "#171B21" : "#F6F8FA",
        },
      }),
    },
  },
});

// hacky fix for chakra add extra className (chakra-ui-light) into body
// and resulted in user unable to copy new nodes into clipboard, because of this check: e.target.className === "litegraph"
// (https://github.com/comfyanonymous/ComfyUI/blob/57926635e8d84ae9eea4a0416cc75e363f5ede45/web/scripts/app.js#L861)
const targetNode = document.body;
const observerConfig = { attributes: true, attributeFilter: ["class"] };
// Callback function to execute when mutations are observed
const callback = function (
  mutationsList: MutationRecord[],
  _observer: MutationObserver,
) {
  // remove color-scheme property from <html> element, this made the checkboxes dark
  const htmlElement = document.documentElement;
  if (htmlElement.style.colorScheme === "dark") {
    // Remove the color-scheme property
    htmlElement.style.removeProperty("color-scheme");
  }

  // remove chakra from <body> class list, this broke the copy node feature
  for (const mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      // remove all chakra classes from body element
      for (const className of targetNode.classList) {
        if (className.includes("chakra")) {
          targetNode.classList.remove(className);
        }
      }
    }
  }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, observerConfig);

function waitForDocumentBody() {
  return new Promise((resolve) => {
    if (document.body) {
      return resolve(document.body);
    }

    document.addEventListener("DOMContentLoaded", () => {
      resolve(document.body);
    });
  });
}

// wait for document.body to load so that the top menu is loaded and my react component has a place to mount
waitForDocumentBody()
  .then(() => waitForApp())
  .then(() => {
    const topbar = document.createElement("div");
    document.body.append(topbar);
    ReactDOM.createRoot(topbar).render(
      <React.StrictMode>
        <ChakraProvider
          resetCSS={false}
          disableGlobalStyle={true}
          theme={theme}
        >
          <CSSReset scope=".workspace_manager" />
          <ColorModeScript initialColorMode="dark" />
          <AlertDialogProvider>
            <Suspense>
              <App />
            </Suspense>
          </AlertDialogProvider>
        </ChakraProvider>
      </React.StrictMode>,
    );
  });
