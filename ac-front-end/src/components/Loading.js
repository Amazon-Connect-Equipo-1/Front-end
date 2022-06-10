/* Loading
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import { SpinnerCircular } from "spinners-react";
import { useTranslation } from "react-i18next";

function Loading() {
  // Language
  const { t } = useTranslation();
  return (
    <SpinnerCircular role="status">
      <span className="visually-hidden">{t("loading")}</span>
    </SpinnerCircular>
  );
}

export default Loading;
