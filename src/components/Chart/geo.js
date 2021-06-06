import HighchartsReact from "highcharts-react-official";
import React from "react";
import HighCharts from "highcharts";
import map from "@highcharts/map-collection/countries/vn/vn-all.geo.json";

export default function ChartDisplay() {
  let list = [];

  const options = {
    title: {
      text: "",
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"],
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    series: [],
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <HighchartsReact highcharts={HighCharts} options={options} />
    </div>
  );
}
