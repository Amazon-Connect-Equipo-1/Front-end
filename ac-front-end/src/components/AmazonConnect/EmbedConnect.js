//import "amazon-connect-streams";
import "./connect-streams-min.js"
import { useEffect, React } from "react";
import { Component } from "spinners-react";

const EmbedConnect = (props) => {
  useEffect(() => {
    const container = document.getElementById("ccp");
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
        ringtoneUrl: "./ringtone.mp3", // optional, defaults to CCP’s default ringtone if a falsy value is set
      },
      pageOptions: {
        //optional
        enableAudioDeviceSettings: false, //optional, defaults to 'false'
        enablePhoneTypeSettings: true, //optional, defaults to 'true'
      },
      ccpAckTimeout: 5000, //optional, defaults to 3000 (ms)
      ccpSynTimeout: 3000, //optional, defaults to 1000 (ms)
      ccpLoadTimeout: 10000, //optional, defaults to 5000 (ms)
    });
    // eslint-disable-next-line no-undef
    connect.agent(function(agent) {
      var states = agent.getAgentStates();
      console.log("here are your states: " + JSON.stringify(states));
      var name = agent.getName();
      window.alert(name)
    });
    

    // eslint-disable-next-line no-undef
    connect.core.onAuthFail(function(){
      window.alert("Log Out")
    });

    // eslint-disable-next-line no-undef
    connect.core.onAccessDenied(function() { 
      window.alert("Qué paso master")
    });
  }, []);

  return <div id="ccp" style={{ width: "400px", height: "500px" }}></div>;
};

export default EmbedConnect;
