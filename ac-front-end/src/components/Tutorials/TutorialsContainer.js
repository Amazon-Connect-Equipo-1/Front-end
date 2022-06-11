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

const Tutorials = (props) => {
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
    </div>
  );
};

export default Tutorials;
