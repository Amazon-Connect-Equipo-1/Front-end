/* 
RecordingsCharts.js

Authors:
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750145 Miguel Ángel Pérez López
- A01378688 Daniel Garcia Barajas
- A01749448 Jorge Chávez Badillo
- A01750185 Amy Murakami Tsutsumi

Creation date: 09/06/2022
Last modification date: 10/06/2022

Program that displays the sentiment analysis graphs for each recording. 
*/

//Import Modules

import Card from "../UI/Card";
import "../../styles/Recordings/RecordingsChart.css";
import { useTranslation } from "react-i18next";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const RecordingsChart = (props) => {
  // Language
  const { t } = useTranslation();

  //Dummy sentiment graph
  Chart.defaults.color = "#9facbd";
  const sentimentOverall = Object.keys(props.sentimentOverall);
  const dataSentimentOverall = [];
  for (var i = 0; i < sentimentOverall.length; i++) {
    if (sentimentOverall[i] === "POSITIVE") {
      sentimentOverall[i] = t("positive");
      dataSentimentOverall.push(props.sentimentOverall.POSITIVE);
    } else if (sentimentOverall[i] === "MIXED") {
      sentimentOverall[i] = t("mixed");
      dataSentimentOverall.push(props.sentimentOverall.MIXED);
    } else if (sentimentOverall[i] === "NEUTRAL") {
      sentimentOverall[i] = t("neutral");
      dataSentimentOverall.push(props.sentimentOverall.NEUTRAL);
    } else if (sentimentOverall[i] === "NEGATIVE") {
      sentimentOverall[i] = t("negative");
      dataSentimentOverall.push(props.sentimentOverall.NEGATIVE);
    }
  }

  const stateBar = {
    labels: sentimentOverall,
    datasets: [
      {
        backgroundColor: "#9facbd",
        borderColor: "#9facbd",
        label: t("labelPer"),
        borderWidth: 1,
        data: dataSentimentOverall,
      },
    ],
  };

  const stateLine = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: t("labelSent"),
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#9facbd",
        borderColor: "#9facbd",
        borderWidth: 1,
        data: props.sentimentByQuarter,
      },
    ],
  };

  return (
    <Card className="recc-main-container">
      <div className="recc-container">
        <div className="recc-navbar">
          <h2 className="recc-title" onClick={props.onChangeCard}>
            {t("about")}
          </h2>
          <h2 className="recc-title">{t("analysis")}</h2>
        </div>
        <div>
          <Bar
            style={{ height: "20rem" }}
            data={stateBar}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                  position: "up",
                },
                title: {
                  display: true,
                  fontSize: 20,
                  text: t("labelOverall"),
                  fontColor: "#9facbd",
                },
              },
            }}
          />
        </div>
        <div className="recc-margin-top-lg">
          <Line
            style={{ height: "20rem" }}
            data={stateLine}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                },
                title: {
                  display: true,
                  fontSize: 20,
                  text: t("labelQuarter"),
                  fontColor: "#FFFFFF",
                },
              },
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default RecordingsChart;
