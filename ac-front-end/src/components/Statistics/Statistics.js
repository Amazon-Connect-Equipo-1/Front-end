/* Statistics
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import React from "react";
import "../../styles/Dashboard/SingleDashboard.css";
import "../../styles/Dashboard/Dashboard.css";

const Statistics = (props) => {
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
            src="https://us-west-2.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/3299fbda-f0a9-4aa1-98fc-b9dbcb57a7e0?directory_alias=amazonconnectbancos"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
