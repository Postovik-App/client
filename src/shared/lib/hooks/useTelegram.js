import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

export function useTelegram() {
  const webApp = window.Telegram.WebApp;
  const { initData } = retrieveLaunchParams();

  return {
    webApp: webApp,
    data: initData,
    user: initData.user,
  };
}
