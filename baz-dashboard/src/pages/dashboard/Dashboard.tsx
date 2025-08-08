import { Button, Spinner, Typography } from "@material-tailwind/react";
import {
  Statistic,
  AnalyticsChart,
  ActiveUsersChart,
  TopChannels,
  TopPages,
  AcquisitionChannelsChart,
  SessionByDeviceChart,
} from "../../components";
import { IoMdRefresh } from "react-icons/io";
import {
  useAcquisitionChannelsMutation,
  useActiveUsersMutation,
  useAnalyticsMutation,
  useSessionsByDeviceMutation,
  useStatsMutation,
  useTopChannelsMutation,
  useTopPagesMutation,
} from "../../redux/api/dashboardApi";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [statsRequest, { isLoading: statsLoading }] = useStatsMutation();
  const [
    acquisitionChannelsRequest,
    { isLoading: acquisitionChannelsLoading },
  ] = useAcquisitionChannelsMutation();
  const [activeUsersRequest, { isLoading: activeUsersLoading }] =
    useActiveUsersMutation();
  const [analyticsRequest, { isLoading: analyticsLoading }] =
    useAnalyticsMutation();
  const [sessionsByDeviceRequest, { isLoading: sessionsByDeviceLoading }] =
    useSessionsByDeviceMutation();
  const [topChannelsRequest, { isLoading: topChannelsLoading }] =
    useTopChannelsMutation();
  const [topPagesRequest, { isLoading: topPagesLoading }] =
    useTopPagesMutation();

  const refreshData = async () => {
    await statsRequest();
    await acquisitionChannelsRequest();
    await activeUsersRequest();
    await analyticsRequest();
    await sessionsByDeviceRequest();
    await topChannelsRequest();
    await topPagesRequest();
  };

  useEffect(() => {
    async function initialRequest() {
      await refreshData();
      setIsLoaded(true);
    }

    initialRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoaded === false) {
    if (
      statsLoading ||
      acquisitionChannelsLoading ||
      activeUsersLoading ||
      analyticsLoading ||
      sessionsByDeviceLoading ||
      topChannelsLoading ||
      topPagesLoading
    ) {
      return (
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
          <Spinner size="xxl" className="text-info" />
          <Typography type="h5">
            Please wait a bit while data is loading...
          </Typography>
        </div>
      );
    }
  }

  return (
    <div className="w-full h-full p-2 sm:pr-0 flex flex-col gap-2">
      <div className="flex flex-row gap-2 justify-between items-center">
        <Typography type="h4">Dashboard</Typography>
        <Button
          variant="ghost"
          className="flex flex-row gap-2"
          onClick={() => refreshData()}
        >
          {statsLoading ||
          acquisitionChannelsLoading ||
          activeUsersLoading ||
          analyticsLoading ||
          sessionsByDeviceLoading ||
          topChannelsLoading ||
          topPagesLoading ? (
            <Spinner size="md" />
          ) : (
            <IoMdRefresh size={20} />
          )}
          <Typography>Refresh</Typography>
        </Button>
      </div>
      <Statistic />
      <AnalyticsChart />
      <div className="grid sm:grid-cols-2 lg:grid-cols-[320px_320px_1fr] lg:grid-rows-1 gap-2">
        <TopChannels />
        <TopPages />
        <ActiveUsersChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2">
        <AcquisitionChannelsChart />
        <SessionByDeviceChart />
      </div>
    </div>
  );
};
