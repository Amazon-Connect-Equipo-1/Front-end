/* About Card
Authors:
        A01777771 Stephen Strange*/

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
        label: t("labelOverall"),
        backgroundColor: "#FFFFFF",
        borderColor: "#000000",
        borderWidth: 1,
        data: dataSentimentOverall,
      },
    ],
  };

  const stateLine = {
    labels: [0, 1, 2, 3],
    datasets: [
      {
        label: t("labelQuarter"),
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#FFFFFF",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        data: props.sentimentByQuarter,
      },
    ],
  };

  return (
    <Card className="recc-main-container">
      <div className="recc-navbar">
        <h2 className="recc-title" onClick={props.onChangeCard}>
          {t("about")}
        </h2>
        <h2 className="recc-title">Analysis</h2>
      </div>
      <div className="recc-container">
        <div>
          <Bar
            data={stateBar}
            options={{
              title: {
                display: true,
                text: "Sentiments analysis",
                fontSize: 20,
                fontColor: "#FFFFFF",
              },
              legend: {
                display: true,
                position: "right",
              },
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div>
          <Line
            data={stateLine}
            options={{
              title: {
                display: true,
                text: "Sentiment analysis",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default RecordingsChart;
