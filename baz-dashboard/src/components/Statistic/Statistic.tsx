import { selectStatsState } from "../../redux/features/dashboardSlice";
import { UseAppSelector } from "../../redux/store/store";
import { InfoCard } from "../InfoCard/InfoCard";

export const Statistic = () => {
  const data = UseAppSelector(selectStatsState);
  if (data == null) return;
  return (
    <div className="grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2">
      <InfoCard title="Unique Visitors" value={data.uniqueVisitors.value} sign="K" percentage={data.uniqueVisitors.percentage} />
      <InfoCard title="Total Pageviews" value={data.totalPageviews.value} sign="K" percentage={data.totalPageviews.percentage} />
      <InfoCard title="Bounce Route" value={data.bounceRoute.value} sign="%" percentage={data.bounceRoute.percentage} />
      <InfoCard title="Visit Duration" value={data.visitDuration.value} sign="K" percentage={data.visitDuration.percentage} />
    </div>
  );
};
