import { useState } from "react";
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

const Tutorials = () => {
  const INPUT_NAME = "agent tutorials";
  var pdfFile = CardBlocking;

  function choosePdf(n) {
    if (n === 1) {
      pdfFile = CardBlocking;
    } else if (n === 2) {
      pdfFile = CardCancellation;
    } else if (n === 3) {
      pdfFile = CardRejected;
    } else if (n === 4) {
      pdfFile = ReportUnrecognizedCharges;
    } else if (n === 5) {
      pdfFile = RequestNewPlastic;
    } else if (n === 6) {
      pdfFile = RequestThirdPartyService;
    } else if (n === 7) {
      pdfFile = SelectBestVideos;
    }
  }

  return (
    <div>
      <div className="t-title">System Help</div>
      <div className="t-container">
        <div className="t-row-container">
          <p className="t-text">Card blocking</p>
          {/*<button className="t-btn" onClick={choosePdf(1)}>*/}
          <button
            type="submit"
            className="t-btn"
            onClick={() => {
              choosePdf(1);
              saveClick(`${INPUT_NAME} button`);
            }}
          >
            Read
          </button>
        </div>

        <div>
          {
            <div className="t-row-container">
              <p className="t-text">Card rejected</p>
              <button
                className="t-btn"
                onClick={() => {
                  choosePdf(2);
                  saveClick(`${INPUT_NAME} button`);
                }}
              >
                Read
              </button>
            </div>
          }
        </div>
        <div>
          {
            <div className="t-row-container">
              <p className="t-text">Card cancellation</p>
              <button
                className="t-btn"
                onClick={() => {
                  choosePdf(3);
                  saveClick(`${INPUT_NAME} button`);
                }}
              >
                Read
              </button>
            </div>
          }
        </div>
      </div>
      <div className="viewer">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
          <div>{<Viewer fileUrl={pdfFile}></Viewer>}</div>
        </Worker>
      </div>
    </div>
  );
};

export default Tutorials;
