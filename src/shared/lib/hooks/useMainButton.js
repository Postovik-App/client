import { mainButton } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export const useMainButton = (params, onClick) => {
  useEffect(() => {
    mainButton.setParams({
      ...params,
      isVisible: true,
    });
    mainButton.onClick(onClick);

    return () => {
      mainButton.offClick(onClick);
      mainButton.setParams({
        isVisible: false,
      });
    };
  });
};
