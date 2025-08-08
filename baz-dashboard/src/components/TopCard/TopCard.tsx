import { Button, Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";

export interface TopTableRow {
  id: number;
  source: string;
  value: number;
}

interface Props {
  title: string;
  headers: string[];
  rows: TopTableRow[];
}
export const TopCard = ({ title, headers, rows }: Props) => {
  return (
    <Card className="w-full bg-surface shadow-lg p-2 flex flex-col gap-2 justify-between">
      <Typography type="lead">{title}</Typography>
      <div>
        <div className="flex flex-row gap-2 justify-between items-center">
          {headers.map((head) => (
            <Typography className="text-sm font-light">{head}</Typography>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {rows.map(({ id, source, value }, index) => (
            <div
              key={id}
              className={clsx(
                "flex flex-row gap-2 py-2 justify-between items-center",
                {
                  "border-b-2 border-foreground/10": index !== rows.length - 1,
                }
              )}
            >
              <Typography className="text-sm sm:text-md">{source}</Typography>
              <Typography className="text-sm sm:text-md">
                {value.toFixed(2)}K
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <Button variant="outline" className="lg:m-4 flex flex-row gap-2">
        <Typography>Report</Typography>
        <FaArrowRight className="text-md sm:text-xl" />
      </Button>
    </Card>
  );
};
