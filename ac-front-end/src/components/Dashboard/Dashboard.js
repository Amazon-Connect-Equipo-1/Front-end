import React from "react";
import "../../styles/Dashboard/Dashboard.css";

const Dashboard = (props) => {
  return (
    <div className="dsb-main-container">
      <div className="dsb-container">
        <iframe
          width="960"
          height="720"
          src="https://us-west-2.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/f0f0db32-74b6-4fef-8a26-89103d50737b?directory_alias=amazonconnectbancos">
        </iframe>
      </div>
    </div>
  );
};

export default Dashboard;



