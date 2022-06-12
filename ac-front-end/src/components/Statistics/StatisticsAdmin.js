/* 
StatisticsAdmin.js

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

const StatisticsAdmin = (props) => {
  return (
    <div className="dsb-main-container" data-aos="fade-up">
      <div
        className="dsb-card-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="sdsb-main-container-statistics">
          <iframe
            className="sdsb-quicksight-statistics"
            src="https://us-west-2.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/44bafa2f-6179-4345-8967-890a1935b712?directory_alias=amazonconnectbancos"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StatisticsAdmin;
