import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

export const isDebug = () => {
  const launchParams = retrieveLaunchParams();
  const startParamsDebug = launchParams.startParam == "debug";

  return startParamsDebug || import.meta.env.DEV;
};
