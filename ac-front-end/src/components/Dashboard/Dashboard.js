/* Dashboard
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import React from "react";
import "../../styles/Dashboard/Dashboard.css";
import AgentActiveCalls from "../AgentList/AgentActiveCalls";


const Dashboard = (props) => {

  return (
    <div className="dsb-main-container">
      <div className="dsb-container">
        <iframe
          width="960"
          height="700"
          src="https://us-west-2.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/f0f0db32-74b6-4fef-8a26-89103d50737b?directory_alias=amazonconnectbancos">
        </iframe>
      </div>
      
    </div>
  );
};

export default Dashboard;



