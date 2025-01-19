import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { backButton } from "@telegram-apps/sdk-react";

export function useBackButton(backURL = null) {
  const navigate = useNavigate();
  const back = useCallback(() => {
    if (backURL) {
      navigate(backURL);
    } else {
      navigate(-1);
    }
  }, [navigate, backURL]);

  useEffect(() => {
    backButton.show();
    backButton.onClick(back);

    return () => {
      backButton.offClick(back);

      backButton.hide();
    };
  }, [back]);
}
