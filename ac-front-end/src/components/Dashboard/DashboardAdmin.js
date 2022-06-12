/*
DashboardAdmin.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01750185 Amy Murakami Tsutsumi
- A01749373 Ariadna Jocelyn Guzmán Jiménez

Creation date: 04/05/2022
Last modification date: 09/06/2022

Program that displays the dashboard created on QuickSight.
*/

//Import Modules
import React from "react";
import "../../styles/Dashboard/Dashboard.css";
import AgentActiveCalls from "../AgentList/AgentActiveCalls";
import AgentsAAndQASupplier, {
  AgentAAndQAContext,
} from "../AgentsAAndQASupplier";

const DashboardAdmin = (props) => {
  return (
    //Call to "SingleDashboard const on a card container"
    <div className="dsb-main-container" data-aos="fade-up">
      <div
        className="dsb-card-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="sdsb-main-container-dashboard">
          <iframe
            src="https://us-west-2.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/641e81ac-9c80-49c6-b2fe-a3963ef3881a?directory_alias=amazonconnectbancos"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
