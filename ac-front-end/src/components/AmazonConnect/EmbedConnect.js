/*
EmbedConnect.js

Authors:
- A01378966 Erick Alberto Bustos Cruz
- A01379918 Luis Enrique Zamarripa Marín
- A01750632 Liam Garay Monroy
- A01750480 Edna Jacqueline Zavala Ortega
- A01379566 Diego Alejandro Juárez Ruiz
- A01378688 Daniel Garcia Barajas

Creation date: 22/05/2022
Last modification date: 09/06/2022

Component that embeds the Amazon Connect Agent CPP in the application,
  starts recording when a call starts, and stops recording when the after call work ends.
  After stopping a recording, it uploads the recording to the corresponding s3 using
  the contact id as name.
*/

import "amazon-connect-streams";
import { useEffect, React, useState, useContext } from "react";
import "../../styles/AgentMain/RecordScreen.css";
import { useReactMediaRecorder } from "react-media-recorder";
import { GlobalContext } from "../GlobalSupplier";
import toast from "react-hot-toast";

const EmbedConnect = (props) => {
  //Variables to assing the call id and the status of the call
  const [, , , , setCallId, , setAgentStatus] = useContext(GlobalContext);
  // Save the contact id (id of the call)
  var cid;
  var auth;
  var clientId;

  // Initialize React Media recorder
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      screen: true,
      blobPropertyBag: { type: "video/mp4" },
      onStop: uploadVideo,
      askPermissionOnMount: false,
    });

  // Function that will upload the recording to an S3
  // Step 1: Call lambda function. The lambda returns a link to upload a file direclty to the S3.
  // Step 2: Make a PUT petition using the link obtained through the lambda. We need to send the File Blob through the petition.

  async function uploadVideo(blobUrl, blob) {
    // Endpoint that we will use to retrieve a link that will let us upload the recording to our s3 bucket
    const API_ENDPOINT =
      "https://gmfy1qbiac.execute-api.us-west-2.amazonaws.com/default/getSignedURL";

    // POST petition to lambda
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ contact_id: cid }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error("Error fetching uploading URL", error);
        toast.error("Error fetching uploading URL", error);
      });
    console.log(response.fileName);

    // Create MP4 File Blob
    let file = await new File([blob], response.fileName, {
      type: "video/mp4",
      lastModified: Date.now(),
    });

    console.log("Response: ", response);
    console.log("Uploading: ", file);
    console.log("Uploading to: ", response.uploadURL);

    // Place PUT petition to upload the mp4 to the S3.
    const result = await fetch(response.uploadURL, {
      method: "PUT",
      body: file,
    });
    console.log("Result: ", result);

    return result;
  }

  // Code to embed the Amazon Connect CCP
  useEffect(() => {
    const container = document.getElementById("ccp");
    // Initialize CCP
    // eslint-disable-next-line no-undef
    connect.core.initCCP(container, {
      ccpUrl: "https://itesm2022amazonconnect.my.connect.aws/connect/ccp-v2/", // REQUIRED
      loginPopup: true, // optional, defaults to `true`
      loginPopupAutoClose: true, // optional, defaults to `false`
      loginOptions: {
        // optional, if provided opens login in new window
        autoClose: true, // optional, defaults to `false`
        height: 600, // optional, defaults to 578
        width: 400, // optional, defaults to 433
        top: 0, // optional, defaults to 0
        left: 0, // optional, defaults to 0
      },
      region: "us-west-2", // REQUIRED for `CHAT`, optional otherwise
      softphone: {
        // optional, defaults below apply if not provided
        allowFramedSoftphone: true, // optional, defaults to false
        disableRingtone: false, // optional, defaults to false
      },
      pageOptions: {
        //optional
        enableAudioDeviceSettings: true, //optional, defaults to 'false'
        enablePhoneTypeSettings: true, //optional, defaults to 'true'
      },
      ccpAckTimeout: 5000, //optional, defaults to 3000 (ms)
      ccpSynTimeout: 3000, //optional, defaults to 1000 (ms)
      ccpLoadTimeout: 10000, //optional, defaults to 5000 (ms)
    });

    // Code to be executed once a call starts
    // eslint-disable-next-line no-undef
    connect.contact(function (contact) {
      contact.onConnected(async function (contact) {
        cid = contact.getContactId();
        setCallId(cid);
        startRecording();
        var attributeMap = contact.getAttributes();
        console.log(attributeMap);
        auth = JSON.stringify(attributeMap["boolAuth"]["value"]);
        props.onChangeAuth(auth);
        console.log(auth);
        clientId = JSON.stringify(attributeMap["clientId"]["value"]);
        props.onChangeClientId(clientId);
        console.log(clientId);
      });
    });

    // Agent subscriptions
    // eslint-disable-next-line no-undef
    connect.agent(function (agent) {
      // On state change stop recording
      var status;
      agent.onStateChange(async function (agentStateChange) {
        if (
          agentStateChange.oldState === "AfterCallWork" &&
          agentStateChange.newState === "Available"
        ) {
          await stopRecording();
          auth = "";
          props.onChangeAuth(auth);
          clientId = "";
          props.onChangeClientId(clientId);
          status = "Active";
          //console.log(localStorage.getItem("id"))
        } else if (agentStateChange.newState === "Available") {
          status = "Active";
        } else if (agentStateChange.newState === "Offline") {
          status = "Inactive";
        } else if (agentStateChange.newState === "Busy") {
          status = "In call";
        }

        //Set status in global context
        setAgentStatus(status);

        const myHeaders = new Headers();
        const token = localStorage.getItem("token");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
          method: "POST",
          mode: "cors",
          headers: myHeaders,
          body: JSON.stringify({
            agent_id: localStorage.getItem("id"),
            status: status,
          }),
        };

        const responseAgent = fetch(
          process.env.REACT_APP_ENDPOINT_BACK_END + "agent/updateAgentStatus",
          requestOptions
        )
          .then((responseAgent) => responseAgent.json())
          .then((data) => {
            console.log(data);
            return data;
          })
          .catch((error) => {
            console.error("Error fetching uploading URL", error);
            toast.error("Error fetching uploading URL", error);
          });
      });
    });
  }, []);

  return <div id="ccp" style={{ width: "400px", height: "450px" }}></div>;
};

export default EmbedConnect;
