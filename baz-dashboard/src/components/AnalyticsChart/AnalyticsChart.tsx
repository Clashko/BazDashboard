import { Card, Typography } from "@material-tailwind/react";
import type { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useThemeMode } from "../../utils/ThemeModeProvider";
import { UseAppSelector } from "../../redux/store/store";
import { selectAnalyticsState } from "../../redux/features/dashboardSlice";

export const AnalyticsChart = () => {
  const { themeMode } = useThemeMode();

  const data = UseAppSelector(selectAnalyticsState);

  if (data == null) {
    return;
  }

  const series: ApexNonAxisChartSeries = [
    {
      name: "Sales",
      data: [...data.salesCount],
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
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 5,
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
      categories: Array.from({ length: data.daysCount }, (_, i) => i + 1),
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
  };
  return (
    <Card className="w-full min-h-[340px] bg-surface shadow-lg p-2 flex flex-col gap-2">
      <Typography type="lead">Analytics</Typography>
      <Typography>Visitor analytics of last 30 days</Typography>
      <div className="max-w-full overflow-hidden overflow-x-auto scrollbar-thin scrollbar-thumb-info scrollbar-track-transparent">
        <Chart
          series={series}
          options={options}
          type="bar"
          height={240}
          width={1500}
        />
      </div>
    </Card>
  );
};
