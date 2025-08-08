import { Card, Typography } from "@material-tailwind/react";
import type { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useThemeMode } from "../../utils/ThemeModeProvider";
import { UseAppSelector } from "../../redux/store/store";
import { selectAcquisitionChannelsState } from "../../redux/features/dashboardSlice";

export const AcquisitionChannelsChart = () => {
  const { themeMode } = useThemeMode();

  const data = UseAppSelector(selectAcquisitionChannelsState);

  if (data == null) {
    return;
  }

  const series: ApexNonAxisChartSeries = [
    {
      name: "Direct",
      data: [...data.values.map((value) => value.direct)],
    },
    {
      name: "Referral",
      data: [...data.values.map((value) => value.referral)],
    },
    {
      name: "Organic Search",
      data: [...data.values.map((value) => value.organicSearch)],
    },
    {
      name: "Social",
      data: [...data.values.map((value) => value.social)],
    },
  ];
  const options: ApexOptions = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    title: {},
    dataLabels: {
      enabled: false,
    },
    colors: ["#0062FF", "#2E7EFF", "#5C9AFF", "#8AB7FF"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
      },
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: themeMode === "light" ? "#475569" : "#94a3b8",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: themeMode === "light" ? "#475569" : "#94a3b8",
          fontSize: "14px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: themeMode === "light" ? "#475569" : "#94a3b8",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: themeMode === "light" ? "light" : "dark",
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontSize: "16px",
      labels: {
        colors: [
          themeMode === "light" ? "#475569" : "#94a3b8",
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
      <Chart series={series} options={options} type="bar" height={240} />
    </Card>
  );
};
