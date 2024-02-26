"use client";

import { ChartData } from "@/utils/type";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { FC } from "react";

interface Props {
  data: Array<ChartData>;
}
export const CandleStickChart: FC<Props> = ({ data }) => {
  const lastPoint = data[data.length - 1]
    ? data[data.length - 1]
    : ([0, 0, 0, 0, 0, 0] as any);
  const secondLastPoint = data[data.length - 2]
    ? data[data.length - 2]
    : ([0, 0, 0, 0, 0, 0] as any);
  const lastPointClose = lastPoint[4];
  const secondLastPointClose = secondLastPoint[4];
  const isIncreasing = lastPointClose > secondLastPointClose;
  const plotLineColor = isIncreasing ? "#0A9981" : "#F23545";

  const chartOptions = {
    chart: {
      backgroundColor: "#000",
      borderColor: "#ddd",
      height: "800",
    },
    tooltip: {
      crosshairs: [true, true], // Hiển thị crosshair trên cả trục x và y
      formatter: function (): any {
        const chart = this as any;
        return "X: " + chart.x + "<br>Y: " + chart.y;
      },
      shared: true,
      split: false,
      enabled: true,
      label: false,
      animation: false,
      borderColor: "transparent",
      borderWidth: 0,
      shadow: false,
      stroke: "transparent",
      useHTML: true,
      // formatter: function (): any {
      //   const chart = this as any;
      //   return (
      //     "<b>Open:</b> " +
      //     chart.point.open +
      //     "<br/>" +
      //     "<b>High:</b> " +
      //     chart.point.high +
      //     "<br/>" +
      //     "<b>Low:</b> " +
      //     chart.point.low +
      //     "<br/>" +
      //     "<b>Close:</b> " +
      //     chart.point.close
      //   );
      // },
      // positioner: function (
      //   boxWidth: number,
      //   boxHeight: number,
      //   point: { plotX: number }
      // ): { x: number; y: number } {
      //   const chart = this as any;
      //   if (point.plotX > 770) {
      //     return {
      //       x: chart.chart.chartWidth * 0.9,
      //       y: 50,
      //     };
      //   }

      //   return {
      //     x: 20,
      //     y: 50,
      //   };
      // },
    },
    xAxis: {
      gridLineWidth: 0.1,
      gridLineColor: "#eee",
      gridLineDashStyle: "dash",
      crosshair: {
        color: "#3D5AFE",
        width: 1,
        dashStyle: "dash",
        snap: false,
      },
    },
    yAxis: {
      plotLines: [
        {
          value: lastPointClose,
          color: plotLineColor,
          dashStyle: "dash",
          width: 1,
          zIndex: 5,
          label: {
            text: lastPointClose,
            align: "right",
            x: 0,
            y: 3,
            style: {
              color: "white",
              backgroundColor: "#0A9981",
              padding: 5,
            },
          },
        },
      ],
      gridLineWidth: 0.1,
      gridLineColor: "#eee",
      gridLineDashStyle: "dash",
      crosshair: {
        color: "#3D5AFE",
        width: 1,
        dashStyle: "dash",
        snap: false,
      },
    },
    series: [
      {
        id: "main",
        type: "candlestick",
        color: "#F23545",
        upColor: "#0A9981",
        upLineColor: "#0A9981",
        lineColor: "#F23545",
        height: "100vh",
        data,
      },
    ],
  };

  return (
    <div
      className="min-h-screen"
      onMouseEnter={() => {
        document.body.style.cursor = "crosshair";
      }}
      onMouseLeave={() => {
        document.body.style.cursor = "default";
      }}
    >
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        constructorType={"stockChart"}
      />
    </div>
  );
};
