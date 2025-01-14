import {
    backButton,
    viewport,
    themeParams,
    miniApp,
    initData,
    mainButton,
    secondaryButton,
    settingsButton,
    $debug,
    init as initSDK,
} from "@telegram-apps/sdk-react";
import initTheme from "@/app/helpers/initTheme.js";

export function init(debug) {
    setDebug(debug);
    initSDK();
    checkMiniAppSupported()
    mountDependencies()
    initTheme();
}

function mountDependencies() {
    backButton.mount()
    settingsButton.mount()
    miniApp.mount()
    mainButton.mount()
    secondaryButton.mount()
    themeParams.mount()
    initData.restore();
    void viewport
        .mount()
        .catch((e) => {
            console.error("Something went wrong mounting the viewport", e)
        })
        .then(() => {
            viewport.bindCssVars()
        })

    miniApp.bindCssVars()
    themeParams.bindCssVars()
}

function setDebug({ debug }) {
    $debug.set(debug)
    debug &&
        import("eruda").then((lib) => lib.default.init()).catch(console.error)
}

function checkMiniAppSupported() {
    if (!backButton.isSupported || !miniApp.isSupported()) {
        throw new Error("ERR_NOT_SUPPORTED")
    }
}