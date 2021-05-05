import {Area, AreaChart, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";
import stevenUniverseData from "./data/StevenUniverseData";


function StevenUniverseChart() {
  return (
      <AreaChart width={950} height={420} data={stevenUniverseData}>
        <Area type="monotone" dataKey="WAM" stroke="transparent" fillOpacity={1} fill="orange" />
        <XAxis tick={{fontSize: 14}} dataKey="key" interval="preserveStartEnd" tickSize={10} />
        <YAxis domain={[40, 100]} tick={{fontSize: 14}} />
        <Tooltip itemStyle={{color: "darkblue"}} />
      </AreaChart>
  );
}
export default StevenUniverseChart;