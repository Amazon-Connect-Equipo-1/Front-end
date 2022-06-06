/* About Card
Authors:
        A01777771 Stephen Strange*/

//Import Modules

import Card from "../UI/Card";
import "../../styles/Recordings/AboutCard.css";
import { useTranslation } from "react-i18next";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const RecordingsChart = (props) => {
  // Language
  const { t } = useTranslation();

  //Dummy sentiment graph
  Chart.defaults.color = "#FFFFFF";
  const sentimentOverall = Object.keys(props.sentimentOverall);
  const dataSentimentOverall = [];
  for (var i = 0; i < sentimentOverall.length; i++){
    if (sentimentOverall[i] === "POSITIVE"){
      sentimentOverall[i] = t("positive");
      dataSentimentOverall.push(props.sentimentOverall.POSITIVE);
    }
    else if (sentimentOverall[i] === "MIXED"){
      sentimentOverall[i] = t("mixed");
      dataSentimentOverall.push(props.sentimentOverall.MIXED);
    }
    else if (sentimentOverall[i] === "NEUTRAL"){
      sentimentOverall[i] = t("neutral");
      dataSentimentOverall.push(props.sentimentOverall.NEUTRAL);
    }
    else if (sentimentOverall[i] === "NEGATIVE"){
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
    <Card className="abc-main-container">
      <div className="abc-container">
        <div className="abc-navbar">
          <h2 className="abc-title">{t("titleSentiment")}</h2>
        </div>
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
