/*
Dashboard.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01750185 Amy Murakami Tsutsumi
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750145 Miguel Ángel Pérez López

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
import SingleDashboard from "./SingleDashboard";

const Dashboard = (props) => {
  return (
    //Call to "SingleDashboard const on a card container"
    <div className="dsb-main-container" data-aos="fade-up">
      <div
        className="dsb-card-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <SingleDashboard />
        {/* {
          <AgentsAAndQASupplier>
            <AgentActiveCalls isActiveCalls={false} />
          </AgentsAAndQASupplier>
        } */}
      </div>
    </div>
  );
};

export default Dashboard;
