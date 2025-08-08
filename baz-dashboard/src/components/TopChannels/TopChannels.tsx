import { selectTopChannelsState } from "../../redux/features/dashboardSlice";
import { UseAppSelector } from "../../redux/store/store";
import { TopCard, type TopTableRow } from "../TopCard/TopCard";

export const TopChannels = () => {
  const headers = ["Source", "Visitors"];
  const data = UseAppSelector(selectTopChannelsState);
  if (data == null) return;

  const rows: TopTableRow[] = data.values.map((item) => ({
    id: item.id,
    source: item.source,
    value: item.visitors,
  }));

  return <TopCard title="Top Channels" headers={headers} rows={rows} />;
};
