import { Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";

interface Props {
  title: string;
  value: number;
  sign: string;
  percentage: number;
}

export const InfoCard = ({ title, value, sign, percentage }: Props) => {
  return (
    <Card className="bg-surface shadow-lg p-2 flex flex-col gap-4">
      <Typography type="lead">{title}</Typography>
      <div className="flex flex-row items-center justify-between">
        <Typography type="h6">
          {value.toFixed(1)}
          {sign}
        </Typography>
        <div className="flex flex-row gap-2 items-center">
          <Typography
            className={clsx("text-sm p-1 px-2 rounded-lg", {
              "text-success bg-success/10": percentage > 0,
              "text-error bg-error/10": percentage <= 0,
            })}
          >
            {percentage.toFixed(1)}%
          </Typography>
          <Typography type="p" className="text-sm">Vs last month</Typography>
        </div>
      </div>
    </Card>
  );
};
