import React from "react";
import "../../styles/Dashboard/Dashboard.css";

const Dashboard = (props) => {
  return (
    <div className="dsb-main-container">
      <div className="dsb-container">
        <iframe
          width="960"
          height="720"
          src="https://us-west-2.quicksight.aws.amazon.com/sn/dashboards/bcab7222-bf07-44e9-94ef-f78bc4115e99/views/3dfaa089-4e21-4bf8-b970-755cda0597ba"
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
