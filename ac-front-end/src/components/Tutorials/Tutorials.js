import { useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "../../styles/Tutorials/Tutorials.css";
import CardBlocking from "../../pdf/CardBlocking.pdf";

function Tutorials() {
  const pdfFile = CardBlocking;
  /*
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfError, setPdfError] = useState("");

  const allowedFiles = ["application/pdf"];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError("");
          setPdfFile(e.target.result);
        };
      } else {
        setPdfError("Not a valid pdf: Please select only PDF");
        setPdfFile("");
      }
    } else {
      console.log("please select a PDF");
    }
  };*/
  /*
  return (
    
    <div className="container">
      <form>
        <label>
          <h5>Upload PDF</h5>
        </label>
        <br></br>

        <input
          type="file"
          className="form-control"
          onChange={handleFile}
        ></input>
        {pdfError && <span className="text-danger">{pdfError}</span>}
      </form>

      <h5>View PDF</h5>
      <div className="viewer">
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
            <Viewer fileUrl="https://written-pdf-tutorials.s3.us-west-2.amazonaws.com/Card+blocking.pdf"></Viewer>
            // <Viewer fileUrl={pdfFile}></Viewer>
          </Worker>
        )}

        {!pdfFile && <>No file is selected yet</>}
      </div>
    </div>
  );*/
  return (
    <div className="viewer">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
        <Viewer fileUrl={pdfFile}></Viewer>
      </Worker>
    </div>
  );
}

export default Tutorials;
