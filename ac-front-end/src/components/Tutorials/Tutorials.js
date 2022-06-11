/* Tutorial
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "../../styles/Tutorials/Tutorials.css";
import CardBlocking from "../../pdf/CardBlocking.pdf";
import CardCancellation from "../../pdf/CardCancellation.pdf";
import CardRejected from "../../pdf/CardRejected.pdf";
import ReportUnrecognizedCharges from "../../pdf/ReportUnrecognizedCharges.pdf";
import RequestNewPlastic from "../../pdf/RequestNewPlastic.pdf";
import RequestThirdPartyService from "../../pdf/RequestThirdPartyService.pdf";
import SelectBestVideos from "../../pdf/SelectBestVideos.pdf";
import { saveClick } from "../MonitorModule.js";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Tutorials = () => {
  const INPUT_NAME = "agent tutorials";

  const [pdfFile, setPdfFile] = useState(CardBlocking);

  function choosePdf(n) {
    setPdfFile(n);
  }

  // Language
  const { t } = useTranslation();

  const options = [
    { label: t("cardBlocking"), id: CardBlocking },
    { label: t("cardCancellation"), id: CardCancellation },
    { label: t("cardRejected"), id: CardRejected },
    { label: t("reportUnrecognizedCharges"), id: ReportUnrecognizedCharges },
    { label: t("requestNewPlastic"), id: RequestNewPlastic },
    { label: t("requestThirdPartyServices"), id: RequestThirdPartyService },
    { label: t("selectBestVideos"), id: SelectBestVideos },
  ];
  const [value, setValue] = useState(null);

  return (
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
            choosePdf(newValue.id);
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
  );
};

export default Tutorials;
