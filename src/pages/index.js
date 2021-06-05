import React from "react";
import ChartDisplay from "../components/Chart/chart.js";
import GeoDisplay from "../components/Chart/geo.js";
import Statistic from "../components/Statistics/index.js";
import GeoSelection from "../components/Selection/index.js";

export default function Page() {
  return (
    <div>
      <GeoSelection />
      <GeoDisplay />
      <ChartDisplay />
      <Statistic />
    </div>
  );
}
