import {Area, AreaChart, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";

const stevenUniverseData: {key: string, WAM: number}[] = [];
stevenUniverseData.push({ key: '20.01.2017', WAM: 88.024});
stevenUniverseData.push({ key: '21.01.2017', WAM: 89.9333});
stevenUniverseData.push({ key: '22.01.2017', WAM: 89.6567});
stevenUniverseData.push({ key: '23.01.2017', WAM: 89.6567});
stevenUniverseData.push({ key: '24.01.2017', WAM: 91.0563});
stevenUniverseData.push({ key: '25.01.2017', WAM: 91.0563});
stevenUniverseData.push({ key: '26.01.2017', WAM: 90.646});
stevenUniverseData.push({ key: '29.01.2017', WAM: 88.8819});
stevenUniverseData.push({ key: '31.01.2017', WAM: 89.403});
stevenUniverseData.push({ key: '01.02.2017', WAM: 89.0139});
stevenUniverseData.push({ key: '02.02.2017', WAM: 88.7552});
stevenUniverseData.push({ key: '04.02.2017', WAM: 87.9246});
stevenUniverseData.push({ key: '05.02.2017', WAM: 89.5709});
stevenUniverseData.push({ key: '06.02.2017', WAM: 89.5709});
stevenUniverseData.push({ key: '07.02.2017', WAM: 89.7718});
stevenUniverseData.push({ key: '08.02.2017', WAM: 89.8628});
stevenUniverseData.push({ key: '09.02.2017', WAM: 89.6846});
stevenUniverseData.push({ key: '10.02.2017', WAM: 89.2716});
stevenUniverseData.push({ key: '11.02.2017', WAM: 88.8266});
stevenUniverseData.push({ key: '12.02.2017', WAM: 88.9097});
stevenUniverseData.push({ key: '13.02.2017', WAM: 89.5044});
stevenUniverseData.push({ key: '14.02.2017', WAM: 89.8478});
stevenUniverseData.push({ key: '15.02.2017', WAM: 90.7641});
stevenUniverseData.push({ key: '16.02.2017', WAM: 90.6944});
stevenUniverseData.push({ key: '18.02.2017', WAM: 89.4405});
stevenUniverseData.push({ key: '19.02.2017', WAM: 88.6126});
stevenUniverseData.push({ key: '20.02.2017', WAM: 88.9381});
stevenUniverseData.push({ key: '21.02.2017', WAM: 90.0505});
stevenUniverseData.push({ key: '22.02.2017', WAM: 90.5677});
stevenUniverseData.push({ key: '23.02.2017', WAM: 90.5071});
stevenUniverseData.push({ key: '24.02.2017', WAM: 90.0175});
stevenUniverseData.push({ key: '25.02.2017', WAM: 88.8091});
stevenUniverseData.push({ key: '26.02.2017', WAM: 88.6058});
stevenUniverseData.push({ key: '27.02.2017', WAM: 88.6058});
stevenUniverseData.push({ key: '28.02.2017', WAM: 89.0855});
stevenUniverseData.push({ key: '01.03.2017', WAM: 88.7059});
stevenUniverseData.push({ key: '03.03.2017', WAM: 86.6989});
stevenUniverseData.push({ key: '04.03.2017', WAM: 86.6989});
stevenUniverseData.push({ key: '06.03.2017', WAM: 85.9065});
stevenUniverseData.push({ key: '08.03.2017', WAM: 87.4765});
stevenUniverseData.push({ key: '09.03.2017', WAM: 87.4581});
stevenUniverseData.push({ key: '10.03.2017', WAM: 85.428});
stevenUniverseData.push({ key: '11.03.2017', WAM: 84.935});
stevenUniverseData.push({ key: '12.03.2017', WAM: 86.9217});
stevenUniverseData.push({ key: '13.03.2017', WAM: 86.9217});
stevenUniverseData.push({ key: '14.03.2017', WAM: 87.7662});
stevenUniverseData.push({ key: '15.03.2017', WAM: 87.7662});
stevenUniverseData.push({ key: '16.03.2017', WAM: 87.884});
stevenUniverseData.push({ key: '17.03.2017', WAM: 87.4505});
stevenUniverseData.push({ key: '18.03.2017', WAM: 86.2983});
stevenUniverseData.push({ key: '19.03.2017', WAM: 85.4412});
stevenUniverseData.push({ key: '20.03.2017', WAM: 85.971});
stevenUniverseData.push({ key: '21.03.2017', WAM: 85.7381});
stevenUniverseData.push({ key: '22.03.2017', WAM: 86.4586});
stevenUniverseData.push({ key: '23.03.2017', WAM: 84.9377});
stevenUniverseData.push({ key: '24.03.2017', WAM: 84.7109});
stevenUniverseData.push({ key: '25.03.2017', WAM: 84.7109});
stevenUniverseData.push({ key: '26.03.2017', WAM: 89.2687});
stevenUniverseData.push({ key: '27.03.2017', WAM: 89.2687});
stevenUniverseData.push({ key: '28.03.2017', WAM: 89.5309});
stevenUniverseData.push({ key: '29.03.2017', WAM: 90.1569});
stevenUniverseData.push({ key: '05.04.2017', WAM: 91.3549});
stevenUniverseData.push({ key: '06.04.2017', WAM: 90.6039});
stevenUniverseData.push({ key: '07.04.2017', WAM: 90.0948});
stevenUniverseData.push({ key: '08.04.2017', WAM: 85.651});
stevenUniverseData.push({ key: '09.04.2017', WAM: 85.651});
stevenUniverseData.push({ key: '10.04.2017', WAM: 89.0137});
stevenUniverseData.push({ key: '11.04.2017', WAM: 87.34});
stevenUniverseData.push({ key: '12.04.2017', WAM: 84.3552});
stevenUniverseData.push({ key: '13.04.2017', WAM: 86.3});
stevenUniverseData.push({ key: '14.04.2017', WAM: 86.24});
stevenUniverseData.push({ key: '15.04.2017', WAM: 86.1802});
stevenUniverseData.push({ key: '16.04.2017', WAM: 86.1802});
stevenUniverseData.push({ key: '17.04.2017', WAM: 86.82});
stevenUniverseData.push({ key: '18.04.2017', WAM: 82.4});
stevenUniverseData.push({ key: '19.04.2017', WAM: 82.4027});
stevenUniverseData.push({ key: '20.04.2017', WAM: 83.5227});
stevenUniverseData.push({ key: '21.04.2017', WAM: 83.52});
stevenUniverseData.push({ key: '30.11.2018', WAM: 70.8472});
stevenUniverseData.push({ key: '04.12.2018', WAM: 74.2433});
stevenUniverseData.push({ key: '05.12.2018', WAM: 76.1541});
stevenUniverseData.push({ key: '07.12.2018', WAM: 75.3817});
stevenUniverseData.push({ key: '08.12.2018', WAM: 74.3588});
stevenUniverseData.push({ key: '10.12.2018', WAM: 74.9062});
stevenUniverseData.push({ key: '11.12.2018', WAM: 74.4775});
stevenUniverseData.push({ key: '12.12.2018', WAM: 74.9274});
stevenUniverseData.push({ key: '13.12.2018', WAM: 74.262});
stevenUniverseData.push({ key: '17.12.2018', WAM: 71.9267});
stevenUniverseData.push({ key: '18.12.2018', WAM: 71.2053});
stevenUniverseData.push({ key: '20.12.2018', WAM: 71.2255});
stevenUniverseData.push({ key: '24.12.2018', WAM: 73.6934});
stevenUniverseData.push({ key: '25.12.2018', WAM: 74.8003});
stevenUniverseData.push({ key: '26.12.2018', WAM: 78.4875});
stevenUniverseData.push({ key: '27.12.2018', WAM: 79.6563});
stevenUniverseData.push({ key: '28.12.2018', WAM: 80.1273});
stevenUniverseData.push({ key: '29.12.2018', WAM: 80.5867});
stevenUniverseData.push({ key: '30.12.2018', WAM: 80.82});
stevenUniverseData.push({ key: '31.12.2018', WAM: 83.037});
stevenUniverseData.push({ key: '01.01.2019', WAM: 81.6374});
stevenUniverseData.push({ key: '02.01.2019', WAM: 84.6211});
stevenUniverseData.push({ key: '03.01.2019', WAM: 85.9695});
stevenUniverseData.push({ key: '05.01.2019', WAM: 86.3524});
stevenUniverseData.push({ key: '07.01.2019', WAM: 87.0695});
stevenUniverseData.push({ key: '09.01.2019', WAM: 86.7446});
stevenUniverseData.push({ key: '11.01.2019', WAM: 86.7732});
stevenUniverseData.push({ key: '13.01.2019', WAM: 87.1796});
stevenUniverseData.push({ key: '15.01.2019', WAM: 84.673});
stevenUniverseData.push({ key: '17.01.2019', WAM: 84.6921});
stevenUniverseData.push({ key: '19.01.2019', WAM: 86.7005});
stevenUniverseData.push({ key: '21.01.2019', WAM: 87.413});
stevenUniverseData.push({ key: '22.01.2019', WAM: 88.3919});
stevenUniverseData.push({ key: '23.01.2019', WAM: 91.4642});
stevenUniverseData.push({ key: '24.01.2019', WAM: 92.2773});
stevenUniverseData.push({ key: '25.01.2019', WAM: 92.7015});
stevenUniverseData.push({ key: '26.01.2019', WAM: 92.9725});
stevenUniverseData.push({ key: '27.01.2019', WAM: 93.2085});
stevenUniverseData.push({ key: '28.01.2019', WAM: 93.338});
stevenUniverseData.push({ key: '29.01.2019', WAM: 94.0444});
stevenUniverseData.push({ key: '30.01.2019', WAM: 93.6694});
stevenUniverseData.push({ key: '31.01.2019', WAM: 93.3289});
stevenUniverseData.push({ key: '01.02.2019', WAM: 93.1442});
stevenUniverseData.push({ key: '02.02.2019', WAM: 93.1278});
stevenUniverseData.push({ key: '03.02.2019', WAM: 92.9851});
stevenUniverseData.push({ key: '04.02.2019', WAM: 89.9856});
stevenUniverseData.push({ key: '06.02.2019', WAM: 90.4783});
stevenUniverseData.push({ key: '07.02.2019', WAM: 90.2741});
stevenUniverseData.push({ key: '08.02.2019', WAM: 90.2037});
stevenUniverseData.push({ key: '09.02.2019', WAM: 90.219});
stevenUniverseData.push({ key: '10.02.2019', WAM: 89.6618});
stevenUniverseData.push({ key: '11.02.2019', WAM: 89.2012});
stevenUniverseData.push({ key: '13.02.2019', WAM: 88.5666});
stevenUniverseData.push({ key: '14.02.2019', WAM: 87.9755});
stevenUniverseData.push({ key: '15.02.2019', WAM: 87.3678});
stevenUniverseData.push({ key: '16.02.2019', WAM: 86.9225});
stevenUniverseData.push({ key: '17.02.2019', WAM: 86.7693});
stevenUniverseData.push({ key: '18.02.2019', WAM: 86.7922});
stevenUniverseData.push({ key: '19.02.2019', WAM: 86.7781});
stevenUniverseData.push({ key: '20.02.2019', WAM: 86.85});
stevenUniverseData.push({ key: '21.02.2019', WAM: 86.6834});
stevenUniverseData.push({ key: '23.02.2019', WAM: 86.5344});
stevenUniverseData.push({ key: '25.02.2019', WAM: 87.1252});
stevenUniverseData.push({ key: '26.02.2019', WAM: 87.5604});
stevenUniverseData.push({ key: '27.02.2019', WAM: 87.2047});
stevenUniverseData.push({ key: '28.02.2019', WAM: 85.9825});
stevenUniverseData.push({ key: '02.03.2019', WAM: 85.6131});
stevenUniverseData.push({ key: '03.03.2019', WAM: 85.7934});
stevenUniverseData.push({ key: '05.03.2019', WAM: 86.9374});
stevenUniverseData.push({ key: '06.03.2019', WAM: 86.0625});
stevenUniverseData.push({ key: '07.03.2019', WAM: 85.8519});
stevenUniverseData.push({ key: '08.03.2019', WAM: 85.3001});
stevenUniverseData.push({ key: '09.03.2019', WAM: 85.5939});
stevenUniverseData.push({ key: '10.03.2019', WAM: 86.9483});
stevenUniverseData.push({ key: '11.03.2019', WAM: 87.1416});
stevenUniverseData.push({ key: '13.03.2019', WAM: 86.6887});
stevenUniverseData.push({ key: '14.03.2019', WAM: 85.2314});
stevenUniverseData.push({ key: '17.03.2019', WAM: 83.968});
stevenUniverseData.push({ key: '18.03.2019', WAM: 83.6859});
stevenUniverseData.push({ key: '19.03.2019', WAM: 83.614});
stevenUniverseData.push({ key: '20.03.2019', WAM: 83.8005});
stevenUniverseData.push({ key: '22.03.2019', WAM: 83.675});
stevenUniverseData.push({ key: '27.03.2019', WAM: 83.6318});
stevenUniverseData.push({ key: '28.03.2019', WAM: 83.6561});
stevenUniverseData.push({ key: '29.03.2019', WAM: 82.6274});
stevenUniverseData.push({ key: '02.04.2019', WAM: 83.1591});
stevenUniverseData.push({ key: '03.04.2019', WAM: 82.6898});
stevenUniverseData.push({ key: '05.04.2019', WAM: 81.4191});
stevenUniverseData.push({ key: '07.04.2019', WAM: 81.2512});
stevenUniverseData.push({ key: '08.04.2019', WAM: 81.04});
stevenUniverseData.push({ key: '12.04.2019', WAM: 79.2316});
stevenUniverseData.push({ key: '13.04.2019', WAM: 77.9832});
stevenUniverseData.push({ key: '14.04.2019', WAM: 72.0975});
stevenUniverseData.push({ key: '15.04.2019', WAM: 73.5463});
stevenUniverseData.push({ key: '16.04.2019', WAM: 74.0197});
stevenUniverseData.push({ key: '18.04.2019', WAM: 73.5829});
stevenUniverseData.push({ key: '25.04.2019', WAM: 69.6737});
stevenUniverseData.push({ key: '01.05.2019', WAM: 68.8672});
stevenUniverseData.push({ key: '06.05.2019', WAM: 72.9285});
stevenUniverseData.push({ key: '08.05.2019', WAM: 68.8123});
stevenUniverseData.push({ key: '17.05.2019', WAM: 68.8859});
stevenUniverseData.push({ key: '20.05.2019', WAM: 67.0205});
stevenUniverseData.push({ key: '24.05.2019', WAM: 60.4659});
stevenUniverseData.push({ key: '30.05.2019', WAM: 56.751});
stevenUniverseData.push({ key: '01.06.2019', WAM: 55.977});
stevenUniverseData.push({ key: '03.06.2019', WAM: 67.2779});
stevenUniverseData.push({ key: '07.06.2019', WAM: 73.5125});
stevenUniverseData.push({ key: '08.06.2019', WAM: 73.199});
stevenUniverseData.push({ key: '10.06.2019', WAM: 68.883});
stevenUniverseData.push({ key: '12.06.2019', WAM: 68.465});
stevenUniverseData.push({ key: '14.06.2019', WAM: 68.9783});
stevenUniverseData.push({ key: '15.06.2019', WAM: 71.8006});
stevenUniverseData.push({ key: '19.06.2019', WAM: 72.4452});
stevenUniverseData.push({ key: '20.06.2019', WAM: 69.6729});
stevenUniverseData.push({ key: '23.06.2019', WAM: 68.2092});
stevenUniverseData.push({ key: '28.06.2019', WAM: 72.054});
stevenUniverseData.push({ key: '11.07.2019', WAM: 65.8654});
stevenUniverseData.push({ key: '12.07.2019', WAM: 67.7843});
stevenUniverseData.push({ key: '17.07.2019', WAM: 68.9609});
stevenUniverseData.push({ key: '18.07.2019', WAM: 71.0016});
stevenUniverseData.push({ key: '24.07.2019', WAM: 75.9102});
stevenUniverseData.push({ key: '27.07.2019', WAM: 78.7835});
stevenUniverseData.push({ key: '30.07.2019', WAM: 76.9479});
stevenUniverseData.push({ key: '31.07.2019', WAM: 75.789});
stevenUniverseData.push({ key: '01.08.2019', WAM: 76.2086});
stevenUniverseData.push({ key: '02.08.2019', WAM: 76.2019});
stevenUniverseData.push({ key: '05.08.2019', WAM: 76.3593});
stevenUniverseData.push({ key: '06.08.2019', WAM: 76.3363});
stevenUniverseData.push({ key: '07.08.2019', WAM: 74.6559});
stevenUniverseData.push({ key: '08.08.2019', WAM: 73.1622});
stevenUniverseData.push({ key: '22.08.2019', WAM: 62.3208});
stevenUniverseData.push({ key: '24.08.2019', WAM: 64.2743});
stevenUniverseData.push({ key: '27.08.2019', WAM: 66.9486});
stevenUniverseData.push({ key: '02.09.2019', WAM: 73.2793});
stevenUniverseData.push({ key: '05.09.2019', WAM: 78.6543});
stevenUniverseData.push({ key: '10.09.2019', WAM: 85.3132});
stevenUniverseData.push({ key: '21.09.2019', WAM: 86.7546});
stevenUniverseData.push({ key: '23.09.2019', WAM: 88.7027});
stevenUniverseData.push({ key: '26.09.2019', WAM: 87.1806});
stevenUniverseData.push({ key: '04.10.2019', WAM: 83.3457});
stevenUniverseData.push({ key: '09.10.2019', WAM: 88.8262});
stevenUniverseData.push({ key: '20.10.2019', WAM: 85.9865});
stevenUniverseData.push({ key: '05.12.2019', WAM: 81.7711});
stevenUniverseData.push({ key: '06.12.2019', WAM: 80.4406});
stevenUniverseData.push({ key: '14.12.2019', WAM: 87.1363});
stevenUniverseData.push({ key: '15.12.2019', WAM: 85.2148});
stevenUniverseData.push({ key: '17.12.2019', WAM: 90.0116});
stevenUniverseData.push({ key: '26.12.2019', WAM: 89.4904});
stevenUniverseData.push({ key: '27.12.2019', WAM: 88.691});
stevenUniverseData.push({ key: '30.12.2019', WAM: 86.683});
stevenUniverseData.push({ key: '16.02.2020', WAM: 78.1305});
stevenUniverseData.push({ key: '23.02.2020', WAM: 79.434});
stevenUniverseData.push({ key: '08.03.2020', WAM: 79.5668});
stevenUniverseData.push({ key: '20.03.2020', WAM: 82.7973});
stevenUniverseData.push({ key: '23.03.2020', WAM: 83.3502});
stevenUniverseData.push({ key: '26.03.2020', WAM: 73.7257});
stevenUniverseData.push({ key: '27.03.2020', WAM: 77.201});
stevenUniverseData.push({ key: '02.04.2020', WAM: 87.1628});
stevenUniverseData.push({ key: '08.05.2020', WAM: 71.0813});
stevenUniverseData.push({ key: '21.06.2020', WAM: 74.7248});
stevenUniverseData.push({ key: '25.06.2020', WAM: 73.5276});
stevenUniverseData.push({ key: '05.07.2020', WAM: 70.9926});
stevenUniverseData.push({ key: '24.07.2020', WAM: 65.1403});
stevenUniverseData.push({ key: '28.07.2020', WAM: 70.83});
stevenUniverseData.push({ key: '13.09.2020', WAM: 44.5528});
stevenUniverseData.push({ key: '27.09.2020', WAM: 48.8017});
stevenUniverseData.push({ key: '10.10.2020', WAM: 46.9525});
stevenUniverseData.push({ key: '11.10.2020', WAM: 45.4198});
stevenUniverseData.push({ key: '12.10.2020', WAM: 52.6752});

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