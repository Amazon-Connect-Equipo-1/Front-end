/* 

𝐒𝐢𝐧𝐠𝐥𝐞 𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝
𝐀𝐮𝐭𝐨𝐫𝐬:
        A01749448 Jorge Chávez Badillo
        A01750185 Amy Murakami Tsutsumi
        A01749373 Ariadna Jocelyn Guzmán Jiménez
𝐒𝐭𝐚𝐫𝐭 𝐃𝐚𝐭𝐞: 
𝐄𝐧𝐝 𝐃𝐚𝐭𝐞:

*/

//Import Modules
import React from "react";
import "../../styles/Dashboard/SingleDashboard.css";

const SingleDashboard = (props) => {
  return (
    //Embed amazon quicksight on a card
    <div className="sdsb-main-container-dashboard">
      <iframe
        className="sdsb-quicksight-dashboard"
        src="https://us-west-2.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/3b8c802a-174f-4c14-a7b5-d75c275b3dc1?directory_alias=amazonconnectbancos"
      ></iframe>
    </div>
  );
};

export default SingleDashboard;
