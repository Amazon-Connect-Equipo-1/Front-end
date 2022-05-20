import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "../../styles/Tutorials/Tutorials.css";
import BloqueoTarjeta from "../../pdf/BloqueoTarjeta.pdf";
import CancelacionTarjeta from "../../pdf/CancelacionTarjeta.pdf";
import CardBlocking from "../../pdf/CardBlocking.pdf";
import CardCancellation from "../../pdf/CardCancellation.pdf";
import CardRejected from "../../pdf/CardRejected.pdf";
import ReportarCargosNoReconocidos from "../../pdf/ReportarCargosNoReconocidos.pdf";
import ReportUnrecognizedCharges from "../../pdf/ReportUnrecognizedCharges.pdf";
import RequestNewPlastic from "../../pdf/RequestNewPlastic.pdf";
import RequestThirdPartyService from "../../pdf/RequestThirdPartyService.pdf";
import SeleccionarMejoresVideos from "../../pdf/SeleccionarMejoresVideos.pdf";
import SelectBestVideos from "../../pdf/SelectBestVideos.pdf";
import SolicitarNuevoPlastico from "../../pdf/SolicitarNuevoPlastico.pdf";
import SolicitarServicioTerceros from "../../pdf/SolicitarServicioTerceros.pdf";
import TarjetaRechazada from "../../pdf/TarjetaRechazada.pdf";
import { saveClick } from "../MonitorModule.js";
import { useState } from "react";

const Tutorials = () => {
  const INPUT_NAME = "agent tutorials";

  const [pdfFile, setPdfFile] = useState(CardBlocking);

  function choosePdf(n) {
    setPdfFile(n);
  }

  return (
    <div className="t-sub-container">
      <h2 className="t-title">System Help</h2>
      <div className="t-container">
        <select
          className="t-select"
          onChange={(t) => choosePdf(t.target.value)}
        >
          <option value={CardBlocking}>Card Blocking</option>
          <option value={CardRejected}>Card Rejected</option>
          <option value={CardCancellation}>Card Cancellation</option>
          <option value={RequestNewPlastic}>Request New Plastic</option>
          <option value={RequestThirdPartyService}>
            Request Third Party Services
          </option>
        </select>
      </div>
      <div className="viewer">
        <iframe
          classname="t-pdf"
          src={`${pdfFile}#toolbar=0&navpanes=0`}
          width="100%"
          height="400px"
        />
      </div>
    </div>
  );
};

export default Tutorials;
