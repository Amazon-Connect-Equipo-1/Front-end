import { createContext, useState } from "react";

//Create recordings context
export const RecordingsContext = createContext();

const RecordingsSupplier = ({ children }) => {
  //For testing Ill create dummy recordings
  const dummyRec = [
    {
      id: 1,
      agent: 11,
      agent_name: "Jim Halpert",
      tags: ["Business", "Work", "Theft"],
      minitureURL: "http://amazon.aws.com/videominiature1",
      videoURL: "http://amazon.aws.com/video1",
      rating: 4,
      date: "02/12/2022",
    },
    {
      id: 2,
      agent: 12,
      agent_name: "Dwight Schrute",
      tags: ["Theft"],
      minitureURL: "http://amazon.aws.com/videominiature2",
      videoURL: "http://amazon.aws.com/video2",
      rating: 5,
      date: "02/12/2022",
    },
    {
      id: 3,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["Business", "Theft"],
      minitureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 4,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["Business", "Theft"],
      minitureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 5,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["Business", "Theft"],
      minitureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
  ];

  //Recordings Array
  const [arrRecordings, setArrRecordings] = useState(dummyRec);

  const getAllMiniatures = () => {
    //Petition to obtain all videos miniatures
  };

  const getAllVideos = () => {
    //Petition to obtain all videos info
  };

  const getMoreVideos = () => {
    //this is to show the last 50 videos and so on
  };

  const getVideo = (videoId) => {};

  return (
    <RecordingsContext.Provider value={[arrRecordings]}>
      {children}
    </RecordingsContext.Provider>
  );
};

export default RecordingsSupplier;
