import { createRoot } from "react-dom/client";
import Root from "./components/Root";
import { init } from "./helpers/init";
import { isDebug } from "../shared/lib/helpers/isDebug";
import "./styles/global.css";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "@/dev/index.js";

const root = createRoot(document.getElementById("root"));

init(isDebug);

root.render(
  <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
    <Root />
  </DevSupport>,
);
