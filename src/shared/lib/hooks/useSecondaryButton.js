import { useEffect } from "react";
import { secondaryButton } from "@telegram-apps/sdk-react";

export function useSecondaryButton(params, onClick) {
  useEffect(() => {
    secondaryButton.setParams({
      ...params,
      isVisible: true,
    });
    secondaryButton.onClick(onClick);

    return () => {
      secondaryButton.offClick(onClick);
      secondaryButton.setParams({
        isVisible: false,
      });
    };
  });
}
