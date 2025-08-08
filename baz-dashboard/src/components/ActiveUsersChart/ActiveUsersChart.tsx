import { Card, Typography } from "@material-tailwind/react";
import type { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useThemeMode } from "../../utils/ThemeModeProvider";
import { UseAppSelector } from "../../redux/store/store";
import { selectActiveUsersState } from "../../redux/features/dashboardSlice";

export const ActiveUsersChart = () => {
  const { themeMode } = useThemeMode();

  const data = UseAppSelector(selectActiveUsersState);

  if (data == null) {
    return;
  }

  const series: ApexNonAxisChartSeries = [
    {
      name: "Users",
      data: [...data.visitorsCount],
    },
  ];
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {},
    dataLabels: {
      enabled: false,
    },
    colors: ["#0062ff"],
    stroke: {
      width: 2,
      curve: "smooth",
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
      show: false,
      borderColor: themeMode === "light" ? "#475569" : "#94a3b8",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 10,
        bottom: 0,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: themeMode === "light" ? "light" : "dark",
    },
  };
  return (
    <Card className="w-full sm:col-span-full lg:col-span-1 bg-surface shadow-lg p-2 flex flex-col gap-2">
      <Typography type="lead">Active Users</Typography>
      <Chart series={series} options={options} type="area" height={240} />
      <div className="flex flex-row gap-8 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <Typography type="h6">{data.dailyAverage}</Typography>
          <Typography>Avg. Daily</Typography>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Typography type="h6">{data.weeklyAverage}K</Typography>
          <Typography>Avg. Weekly</Typography>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Typography type="h6">{data.monthlyAverage}K</Typography>
          <Typography>Avg. Monthly</Typography>
        </div>
      </div>
    </Card>
  );
};
