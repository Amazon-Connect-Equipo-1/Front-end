/* 
StatisticsQuality-agent.js

Authors:
- A01749373 Ariadna Jocelyn Guzmán Jiménez

Creation date: 09/06/2022
Last modification date: 09/06/2022

(Decripción)
*/

//Import Modules
import React from "react";
import "../../styles/Dashboard/SingleDashboard.css";
import "../../styles/Dashboard/Dashboard.css";

const StatisticsQA = (props) => {
  return (
    <div className="dsb-main-container" data-aos="fade-up">
      <div
        className="dsb-card-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="sdsb-main-container-statistics">
          <iframe
            src="https://us-west-2.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/5b9ac8c9-d9e4-4a28-a93b-b1ea030d9dec?directory_alias=amazonconnectbancos"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StatisticsQA;
