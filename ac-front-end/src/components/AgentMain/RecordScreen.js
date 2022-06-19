/*
RecordScreen.js

Authors:
- A01750480 Edna Jacqueline Zavala Ortega
- A01379566 Diego Juarez Ruiz
- A1379918  Luis Enrique Zamarrripma Marin
- A01378688 Daniel Garcia Barajas
Translation:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 24/05/2022
Last modification date: 18/06/2022

Program that allows to record the screen when the agent is on a call.
*/

import React from "react";
import "../../styles/AgentMain/RecordScreen.css";
import { VscRecord } from "react-icons/vsc";
import { VscStopCircle } from "react-icons/vsc";
import { FiUpload } from "react-icons/fi";
import { useReactMediaRecorder } from "react-media-recorder";
import axios from "axios";
import { useTranslation } from "react-i18next";

// Component to record screen
const RecordScreen = (props) => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: true });

  // Function that stops screen recording. Calls the function "stopRecording" from
  // react-media-recorder and then, after 4 seconds, a click event is executed to upload
  // the recording to S3.
  function stopRecordFunct() {
    stopRecording();
    console.log("Subiendo----");
    setTimeout(() => {
      document.getElementById("uploadButton").click();
    }, 4000);
  }

  // Function to upload a recording to S3.
  // Step 1: Call the corresponding Lambda function. This Lambda returns a presigned URL to upload a file directly to S3.
  // Step 2: Make a PUT request using the presigned URL obtained as a response from the Lambda function. The file must be added in the body of the request.
  const uploadVideo = async () => {
    // Presigned URL to upload an object
    const API_ENDPOINT =
      "https://gmfy1qbiac.execute-api.us-west-2.amazonaws.com/default/getSignedURL";
    const mediaBlob = await fetch(mediaBlobUrl).then((response) =>
      response.blob()
    );

    // GET request to Lambda.
    // Response variable includes a link to upload it to S3
    const response = await axios({
      method: "GET",
      url: API_ENDPOINT,
    });

    // Create the mp4 file
    let file = new File([mediaBlob], response.data.fileName, {
      type: "video/mp4",
      lastModified: Date.now(),
    });

    console.log("Response: ", response.data);
    console.log("Uploading: ", file);
    console.log("Uploading to: ", response.data.uploadURL);

    // Make a PUT request to upload mp4 file to S3. Mp4 file is sent in the body.
    const result = await fetch(response.data.uploadURL, {
      method: "PUT",
      body: file,
    });
    console.log("Result: ", result);
  };

  // Language
  const { t } = useTranslation();

  return (
    <div className="rs-main-container">
      <h2 className="rs-title">{t("record")}</h2>
      <div className="rs-buttons-container">
        <button className="rs-button" onClick={startRecording}>
          <VscRecord />
        </button>
        <button className="rs-button" onClick={stopRecordFunct}>
          <VscStopCircle />
        </button>
        <button className="rs-button" id="uploadButton" onClick={uploadVideo}>
          <FiUpload />
        </button>
      </div>
    </div>
  );
};

export default RecordScreen;
