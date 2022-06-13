/* 
RecordingsSupplier.js

Authors:
- A01750145 Miguel Ángel Pérez López

Creation date: 15/05/2022
Last modification date: 10/06/2022

(Descripción)
*/

//Import Modules
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";

//Create recordings context
export const RecordingsContext = createContext();

const RecordingsSupplier = ({ children }) => {
  // Language
  const { t } = useTranslation();

  //Recordings Array
  const [arrRecordings, setArrRecordings] = useState([]);
  const [arrAgentRecordings, setArrAgentRecordings] = useState([]);
  const [selectedVideoInfo, setSelectedVideoInfo] = useState();

  const getAllRecordings = () => {
    //Petition to obtain all videos info
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer w`);

    const raw = JSON.stringify({
      email: "mikeperezlopez15@hotmail.com",
      password: "123456@aA",
    });

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      // body: raw,
      // redirect: "follow",
    };

    fetch(
      "https://backtest.bankonnect.link/manager/topRecordings",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        console.log(JSON.parse(result));
      })
      .catch((error) => {
        console.log("error", error);
        alert(error);
      });
  };

  const obtainSelectedVideoInfo = async (recordingId) => {
    console.log("async");

    //fetch with the id
    const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${window.localStorage.getItem("token")}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    await fetch(
      `https://backtest.bankonnect.link/manager/showRecording?recording_id=${recordingId}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log("Recording info", JSON.parse(result));
        window.localStorage.setItem("selectedVideoInfo", result);
        setSelectedVideoInfo(JSON.parse(result));
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error);
      });
  };

  const getLastRecordings = (showOrder = "DESC") => {
    //this is to show the last 50 videos and so on
    //QA
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${window.localStorage.getItem("token")}`
    );

    const raw = JSON.stringify({ order: showOrder });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      // redirect: "follow",
    };

    fetch(
      "https://backtest.bankonnect.link/manager/showLastRecordings",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const recordingsJSON = JSON.parse(result).recordings;
        console.log(recordingsJSON);
        let recordings = recordingsJSON.filter((record) => {
          //Dont include null records if they exist
          if (record) {
            return record;
          }
        });

        recordings = recordings.map((record) => {
          if (record.recordingData === undefined) {
            record.recordingData = [];
          }
          if (record.tags === undefined) {
            record.tags = [];
          }
          return record;
        });
        setArrRecordings([...recordings]);
      })
      .catch((error) => {
        console.log("error", error);
        toast(error);
      });
  };

  const getRecordsByAgent = (selectedEmail) => {
    console.log(selectedEmail);
    const email =
      selectedEmail !== undefined
        ? selectedEmail
        : window.localStorage.getItem("email");
    const token = window.localStorage.getItem("token");

    const myHeadersToken = new Headers();
    myHeadersToken.append("Authorization", `Bearer ${token}`);

    const requestOptionsGET = {
      method: "GET",
      headers: myHeadersToken,
    };

    fetch(
      `https://backtest.bankonnect.link/manager/agentRecordings?email=${email}`,
      requestOptionsGET
    )
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result).recordings;
        if (selectedEmail !== undefined) {
          setArrRecordings([...resultJSON]);
        } else {
          setArrAgentRecordings([...resultJSON]);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(error);
      });
  };

  const getRecordingsByDate = (selectedDate, agentEmail = "") => {
    //This fucntions works for qa recordings to filter for date
    //It also works for agent recordings for filtering by its agent id and date
    const email = window.localStorage.getItem("email");
    const token = window.localStorage.getItem("token");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    //Check if function is called by recordings or agent recordings
    //verify if agentEmail is send
    let isAgentRecordings = true;
    if (agentEmail === "") {
      isAgentRecordings = false;
    }

    let raw = JSON.stringify({
      user_email: agentEmail,
      date: selectedDate,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://backtest.bankonnect.link/manager/filterRecordingsByDate",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result).recordings;
        console.log(resultJSON);
        console.log(result);
        //Check if the result is an empty list
        if (resultJSON.length === 0) {
          console.log("Esta vacía la lista");
        } else {
          //Set information where in the correct array
          if (isAgentRecordings) {
            setArrAgentRecordings([...resultJSON]);
          } else {
            setArrRecordings([...resultJSON]);
          }
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(error);
      });
  };

  const getVideos = () => {
    // if (arrRecordings.length !== 0) {
    //   return arrRecordings;
    // }
    getLastRecordings();
    console.log(arrRecordings);
    // return {};
  };

  const getRecordsByTags = (tagName, agentEmail = "") => {
    const token = window.localStorage.getItem("token");

    const myHeadersToken = new Headers();
    myHeadersToken.append("Content-Type", "application/json");
    myHeadersToken.append("Authorization", `Bearer ${token}`);

    const tagArr = [];
    {
      tagName.map((tag) => {
        tagArr.push(tag.id);
      });
    }

    const raw = JSON.stringify({
      email: agentEmail,
      tags: tagArr,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeadersToken,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://backtest.bankonnect.link/manager/filterRecordings",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        const resultJSON = JSON.parse(result).recordings; //[0].recording_data;
        console.log(resultJSON);
        const recordings = resultJSON.map((record) => {
          return record.recording_data;
        });
        if (agentEmail !== "") {
          setArrAgentRecordings([...recordings]);
        } else {
          setArrRecordings([...recordings]);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(error);
      });
  };

  useEffect(() => {
    // getRecordingsByDate
    if (window.localStorage.getItem("userType") === "Agent") {
      getRecordsByAgent();
    } else {
      getLastRecordings();
    }
    console.log("use effect");
  }, []);

  return (
    <RecordingsContext.Provider
      value={[
        arrRecordings,
        getLastRecordings,
        selectedVideoInfo,
        obtainSelectedVideoInfo,
        arrAgentRecordings,
        getRecordsByAgent,
        getRecordingsByDate,
        getRecordsByTags,
      ]}
    >
      {children}
    </RecordingsContext.Provider>
  );
};

export default RecordingsSupplier;
