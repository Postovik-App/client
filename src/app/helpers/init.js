import {
    backButton,
    viewport,
    themeParams,
    miniApp,
    initData,
    mainButton,
    $debug,
    init as initSDK,
} from "@telegram-apps/sdk-react";
import initTheme from "@/app/helpers/initTheme.js";

export function init(debug) {
    $debug.set(debug)

    initSDK();

    debug && 
        import("eruda").then((lib) => lib.default.init()).catch(console.error)

    if (!backButton.isSupported || !miniApp.isSupported()) {
        throw new Error("ERR_NOT_SUPPORTED")
    }

    backButton.mount()
    miniApp.mount()
    mainButton.mount()
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

    initTheme();
}
