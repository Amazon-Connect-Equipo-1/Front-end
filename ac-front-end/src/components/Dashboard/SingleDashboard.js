/*
Dashboard.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01750185 Amy Murakami Tsutsumi
- A01749373 Ariadna Jocelyn Guzmán Jiménez

Creation date: 26/05/2022
Last modification date: 09/06/2022

Program that displays the single dashboard created on QuickSight.
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
