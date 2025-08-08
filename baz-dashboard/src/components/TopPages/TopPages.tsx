import { TopCard, type TopTableRow } from "../TopCard/TopCard";
import { UseAppSelector } from "../../redux/store/store";
import { selectTopPagesState } from "../../redux/features/dashboardSlice";

export const TopPages = () => {
  const headers = ["Source", "Pageview"];
  const data = UseAppSelector(selectTopPagesState);
  if (data == null) return;

  const rows: TopTableRow[] = data.values.map((item) => ({
    id: item.id,
    source: item.source,
    value: item.pageview,
  }));

  return <TopCard title="Top Pages" headers={headers} rows={rows} />;
};
