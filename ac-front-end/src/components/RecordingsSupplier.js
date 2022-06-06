/* Recordings Suppliers
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
//Create recordings context
export const RecordingsContext = createContext();

const RecordingsSupplier = ({ children }) => {
  // Language
  const { t } = useTranslation();
  //For testing Ill create dummy recordings
  const dummyRec = [
    {
      id: 1,
      agent: 11,
      agent_name: "Jim Halpert",
      tags: ["lost-card", "cancel-card"],
      miniatureURL: "http://amazon.aws.com/videominiature1",
      videoURL: "http://amazon.aws.com/video1",
      rating: 4,
      date: "02/12/2022",
    },
    {
      id: 2,
      agent: 12,
      agent_name: "Dwight Schrute",
      tags: ["card-declined"],
      miniatureURL: "http://amazon.aws.com/videominiature2",
      videoURL: "http://amazon.aws.com/video2",
      rating: 5,
      date: "02/12/2022",
    },
    {
      id: 3,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["credit-card", "inssurance"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 4,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["withdrawal", "loans"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 5,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 6,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 7,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 8,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 9,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 10,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 11,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 12,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
  ];

  //Recordings Array
  const [arrRecordings, setArrRecordings] = useState([]);

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
      .catch((error) => console.log("error", error));
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
      `http://35.88.250.238:8080/manager/showRecording?recording_id=${recordingId}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log("Recording info", JSON.parse(result));
        window.localStorage.setItem("selectedVideoInfo", result);
        setSelectedVideoInfo(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
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
      "http://35.88.250.238:8080/manager/showLastRecordings",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const recordingsJSON = JSON.parse(result).recordings;
        // console.log(recordingsJSON);
        let recordings = recordingsJSON.filter((ele) => {
          //Dont include null records if they exist
          if (ele) {
            return ele;
          }
        });

        // for (let index = 0; index < recordings.length; index++) {
        //   const element = recordings[index];
        // }
        recordings = recordings.map((record) => {
          console.log("last records", record);
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
      .catch((error) => console.log("error", error));
  };

  const getVideos = () => {
    // if (arrRecordings.length !== 0) {
    //   return arrRecordings;
    // }
    getLastRecordings();
    console.log(arrRecordings);
    // return {};
  };

  // getVideos();

  useEffect(() => {
    getVideos();
    console.log("use effect");
  }, []);

  return (
    <RecordingsContext.Provider
      value={[
        arrRecordings,
        getLastRecordings,
        selectedVideoInfo,
        obtainSelectedVideoInfo,
      ]}
    >
      {children}
    </RecordingsContext.Provider>
  );
};

export default RecordingsSupplier;
