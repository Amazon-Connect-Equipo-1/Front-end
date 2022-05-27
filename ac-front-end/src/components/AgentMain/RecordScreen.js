import React from "react";
import "../../styles/AgentMain/RecordScreen.css";
import { VscRecord } from "react-icons/vsc";
import { VscStopCircle } from "react-icons/vsc";
import { FiUpload } from "react-icons/fi";
import { useReactMediaRecorder } from "react-media-recorder";
import axios from "axios";


const RecordScreen = (props) => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ screen: true });
  
  const uploadVideo = async () => {
    const API_ENDPOINT = "https://gmfy1qbiac.execute-api.us-west-2.amazonaws.com/default/getSignedURL"
    const mediaBlob =  await fetch(mediaBlobUrl)
      .then(response => response.blob())
  
    const response = await axios({
      method: 'GET',
      url: API_ENDPOINT
    })
  
    let file = new File([mediaBlob], response.data.fileName, { type: 'video/mp4', lastModified: Date.now() });
  
    console.log('Response: ', response.data)
    console.log('Uploading: ', file)
    console.log('Uploading to: ', response.data.uploadURL)
    const result = await fetch(response.data.uploadURL, {
      method: 'PUT',
      body: file
    })
    console.log('Result: ', result)
  }

  return (
    <div className="rs-main-container">
      <h2 className="rs-title">Record</h2>
      <div className="rs-buttons-container">
        <button className="rs-button" onClick={startRecording}>
          <VscRecord />
        </button>
        <button className="rs-button" onClick={stopRecording}>
          <VscStopCircle />
        </button>
        <button className="rs-button" id='uploadButton' onClick={uploadVideo}>
          <FiUpload />
        </button>
      </div>
    </div>
  );
};

export default RecordScreen;
