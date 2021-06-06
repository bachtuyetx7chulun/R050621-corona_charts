import React, { useEffect, useState } from "react";
import ChartDisplay from "../components/Chart/chart.js";
import GeoDisplay from "../components/Chart/geo.js";
import Statistic from "../components/Statistics/index.js";
import GeoSelection from "../components/Selection/index.js";
import { getCountries } from "../api/index.js";

export default function Page() {
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    const { data } = await getCountries;
    setCountries(data);
  }, []);

  return (
    <div className="page">
      <GeoSelection data={countries} />
      <Statistic />
      <GeoDisplay />
      <ChartDisplay />
    </div>
  );
}
