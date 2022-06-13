/* 
TutorialsContainer.js

Authors:
- A01378688 Daniel Garcia Barajas
- A01750185 Amy Murakami Tsutsumi

Creation date: 18/05/2022
Last modification date: 10/06/2022

Component that displays process tutorials in three 
different languages (English, Spanish and French). 
*/

//Import Modules
import "@react-pdf-viewer/core/lib/styles/index.css";
import "../../styles/Tutorials/Tutorials.css";
import CardBlockingEN from "../../pdf/CardBlockingEN.pdf";
import CardBlockingES from "../../pdf/CardBlockingES.pdf";
import CardBlockingFR from "../../pdf/CardBlockingFR.pdf";
import CardCancellationEN from "../../pdf/CardCancellationEN.pdf";
import CardCancellationES from "../../pdf/CardCancellationES.pdf";
import CardCancellationFR from "../../pdf/CardCancellationFR.pdf";
import CardRejectedEN from "../../pdf/CardRejectedEN.pdf";
import CardRejectedES from "../../pdf/CardRejectedES.pdf";
import CardRejectedFR from "../../pdf/CardRejectedFR.pdf";
import ReportUnrecognizedChargesEN from "../../pdf/ReportUnrecognizedChargesEN.pdf";
import ReportUnrecognizedChargesES from "../../pdf/ReportUnrecognizedChargesES.pdf";
import ReportUnrecognizedChargesFR from "../../pdf/ReportUnrecognizedChargesFR.pdf";
import RequestNewPlasticEN from "../../pdf/RequestNewPlasticEN.pdf";
import RequestNewPlasticES from "../../pdf/RequestNewPlasticES.pdf";
import RequestNewPlasticFR from "../../pdf/RequestNewPlasticFR.pdf";
import RequestThirdPartyServiceEN from "../../pdf/RequestThirdPartyServiceEN.pdf";
import RequestThirdPartyServiceES from "../../pdf/RequestThirdPartyServiceES.pdf";
import RequestThirdPartyServiceFR from "../../pdf/RequestThirdPartyServiceFR.pdf";
import SelectBestVideosEN from "../../pdf/SelectBestVideosEN.pdf";
import SelectBestVideosES from "../../pdf/SelectBestVideosES.pdf";
import SelectBestVideosFR from "../../pdf/SelectBestVideosFR.pdf";
import Empty from "../../pdf/Empty.pdf";

import { saveClick } from "../MonitorModule.js";
import LocaleContext from "../../LocaleContext";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { MdPermIdentity } from "react-icons/md";

const Tutorials = (props) => {
  const INPUT_NAME = "agent tutorials";

  const [pdfFile, setPdfFile] = useState(Empty);

  function choosePdf(n) {
    setPdfFile(n);
  }

  // Language
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  const options = [
    {
      label: t("cardBlocking"),
      idEN: CardBlockingEN,
      idES: CardBlockingES,
      idFR: CardBlockingFR,
    },
    {
      label: t("cardCancellation"),
      idEN: CardCancellationEN,
      idES: CardCancellationES,
      idFR: CardCancellationFR,
    },
    {
      label: t("cardRejected"),
      idEN: CardRejectedEN,
      idES: CardRejectedES,
      idFR: CardRejectedFR,
    },
    {
      label: t("reportUnrecognizedCharges"),
      idEN: ReportUnrecognizedChargesEN,
      idES: ReportUnrecognizedChargesES,
      idFR: ReportUnrecognizedChargesFR,
    },
    {
      label: t("requestNewPlastic"),
      idEN: RequestNewPlasticEN,
      idES: RequestNewPlasticES,
      idFR: RequestNewPlasticFR,
    },
    {
      label: t("requestThirdPartyServices"),
      idEN: RequestThirdPartyServiceEN,
      idES: RequestThirdPartyServiceES,
      idFR: RequestThirdPartyServiceFR,
    },
    {
      label: t("selectBestVideos"),
      idEN: SelectBestVideosEN,
      idES: SelectBestVideosES,
      idFR: SelectBestVideosFR,
    },
  ];
  const [value, setValue] = useState(null);

  return (
    <div className="t-main-container">
      <div className="t-sub-container">
        <h2 className="t-title">{t("systemHelp")}</h2>
        <div className="t-container">
          <Autocomplete
            disablePortal
            className="t-select"
            id="t-select"
            options={options}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              if (locale === "en") {
                choosePdf(newValue.idEN);
              } else if (locale === "es") {
                choosePdf(newValue.idES);
              } else if (locale === "fr") {
                choosePdf(newValue.idFR);
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                className="text-field"
                id="text-field"
                label={t("tutorials")}
              />
            )}
          />
        </div>
        <div className="viewer">
          <iframe className="t-pdf" src={`${pdfFile}#toolbar=0&navpanes=0`} />
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
