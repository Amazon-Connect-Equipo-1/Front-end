/* 

𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝 
𝐀𝐮𝐭𝐨𝐫𝐬:
        A01749448 Jorge Chávez Badillo
        A01750185 Amy Murakami Tsutsumi
        A01749373 Ariadna Jocelyn Guzmán Jiménez
𝐒𝐭𝐚𝐫𝐭 𝐃𝐚𝐭𝐞: 
𝐄𝐧𝐝 𝐃𝐚𝐭𝐞:

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
