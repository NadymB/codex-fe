"use client";

import {
  KLineData,
  LineType,
  TooltipShowType,
  dispose,
  init,
} from "klinecharts";
import { FC, useEffect } from "react";

interface Props {
  data: Array<KLineData>;
}
export const CandleStickChart: FC<Props> = ({ data }) => {
  useEffect(() => {
    // initialize the chart
    const chart = init("chart");

    chart?.createIndicator("MA");

    chart?.setStyles({
      candle: { tooltip: { showType: "rect" as TooltipShowType } },
      grid: {
        show: true,
        horizontal: {
          show: true,
          size: 0.1,
          color: "#EDEDED",
          style: "solid" as LineType,
        },
        vertical: {
          show: true,
          size: 0.1,
          color: "#EDEDED",
          style: "solid" as LineType,
        },
      },
      indicator: {
        lines: [
          {
            // 'solid' | 'dashed'
            style: "solid" as LineType,
            smooth: false,
            size: 1,
            dashedValue: [2, 2],
            color: "#FF9600",
          },
          {
            style: "solid" as LineType,
            smooth: false,
            size: 1,
            dashedValue: [2, 2],
            color: "#935EBD",
          },
          {
            style: "solid" as LineType,
            smooth: false,
            size: 1,
            dashedValue: [2, 2],
            color: "#2196F3",
          },
          {
            style: "solid" as LineType,
            smooth: false,
            size: 1,
            dashedValue: [2, 2],
            color: "#E11D74",
          },
          {
            style: "solid" as LineType,
            smooth: false,
            size: 1,
            dashedValue: [2, 2],
            color: "#01C5C4",
          },
        ],
      },
      crosshair: {
        show: true,
        horizontal: {
          show: true,
          line: {
            show: true,
            style: "dashed" as LineType,
            dashedValue: [4, 2],
            size: 1,
            color: "#3D5AFE",
          },
        },
        vertical: {
          show: true,
          line: {
            show: true,
            style: "dashed" as LineType,
            dashedValue: [4, 2],
            size: 1,
            color: "#3D5AFE",
          },
        },
      },
    });

    // add data to the chart
    chart?.applyNewData(data);

    return () => {
      // destroy chart
      dispose("chart");
    };
  }, [data]);

  return <div id="chart" style={{ width: "100%", height: "100vh" }} />;
};
