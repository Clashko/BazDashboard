import type { ApexOptions } from "apexcharts";
import { selectSessionByDeviceState } from "../../redux/features/dashboardSlice";
import { UseAppSelector } from "../../redux/store/store";
import { Card, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { useThemeMode } from "../../utils/ThemeModeProvider";

export const SessionByDeviceChart = () => {
  const { themeMode } = useThemeMode();

  const data = UseAppSelector(selectSessionByDeviceState);

  if (data == null) {
    return;
  }
  const series: ApexNonAxisChartSeries = [
    data.desktop,
    data.mobile,
    data.tablet,
  ];

  const options: ApexOptions = {
    labels: ["Desktop", "Mobile", "Tablet"],
    chart: {
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#0062FF", "#2E7EFF", "#5C9AFF"],
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: "65%",
        },
      },
    },
    tooltip: {
      theme: themeMode === "light" ? "light" : "dark",
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "16px",
      labels: {
        colors: [
          themeMode === "light" ? "#475569" : "#94a3b8",
          themeMode === "light" ? "#475569" : "#94a3b8",
          themeMode === "light" ? "#475569" : "#94a3b8",
        ],
      },
      fontFamily: "inherit",
      fontWeight: 400,
    },
  };
  return (
    <Card className="bg-surface min-h-[240px] shadow-lg p-2 flex flex-col gap-2">
      <Typography type="lead">Acquisition Channels</Typography>
      <Chart series={series} options={options} type="donut" height={240} />
    </Card>
  );
};
