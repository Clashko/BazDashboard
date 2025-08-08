import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  type AcquisitionChannelsResponseDto,
  type ActiveUsersResponseDto,
  type AnalyticsResponseDto,
  type SessionByDeviceResponseDto,
  type TopChannelsResponseDto,
  type TopPagesResponseDto,
} from "../dtos";
import {
  setAcquisitionChannelsState,
  setActiveUsersState,
  setAnalyticsState,
  setSessionByDeviceState,
  setStatsState,
  setTopChannelsState,
  setTopPagesState,
} from "../features/dashboardSlice";
import type { StatsResponseDto } from "../dtos/StatsResponseDto";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5059/api" }),
  endpoints: (builder) => ({
    stats: builder.mutation<StatsResponseDto, void>({
      query() {
        return {
          url: "Dashboard/Statistic",
          method: "GET",
        };
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        await queryFulfilled
          .then(async (result) => {
            dispatch(setStatsState(result.data));
          })
          .catch(() => {});
      },
    }),
    acquisitionChannels: builder.mutation<AcquisitionChannelsResponseDto, void>(
      {
        query() {
          return {
            url: "Dashboard/AcquisitionChannels",
            method: "GET",
          };
        },
        async onQueryStarted(_args, { dispatch, queryFulfilled }) {
          await queryFulfilled
            .then(async (result) => {
              dispatch(setAcquisitionChannelsState(result.data));
            })
            .catch(() => {});
        },
      }
    ),
    activeUsers: builder.mutation<ActiveUsersResponseDto, void>({
      query() {
        return {
          url: "Dashboard/ActiveUsers",
          method: "GET",
        };
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        await queryFulfilled
          .then(async (result) => {
            dispatch(setActiveUsersState(result.data));
          })
          .catch(() => {});
      },
    }),
    analytics: builder.mutation<AnalyticsResponseDto, void>({
      query() {
        return {
          url: "Dashboard/Analytics",
          method: "GET",
        };
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        await queryFulfilled
          .then(async (result) => {
            dispatch(setAnalyticsState(result.data));
          })
          .catch(() => {});
      },
    }),
    sessionsByDevice: builder.mutation<SessionByDeviceResponseDto, void>({
      query() {
        return {
          url: "Dashboard/SessionsByDevice",
          method: "GET",
        };
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        await queryFulfilled
          .then(async (result) => {
            dispatch(setSessionByDeviceState(result.data));
          })
          .catch(() => {});
      },
    }),
    topChannels: builder.mutation<TopChannelsResponseDto, void>({
      query() {
        return {
          url: "Dashboard/TopChannels",
          method: "GET",
        };
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        await queryFulfilled
          .then(async (result) => {
            dispatch(setTopChannelsState(result.data));
          })
          .catch(() => {});
      },
    }),
    topPages: builder.mutation<TopPagesResponseDto, void>({
      query() {
        return {
          url: "Dashboard/TopPages",
          method: "GET",
        };
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        await queryFulfilled
          .then(async (result) => {
            dispatch(setTopPagesState(result.data));
          })
          .catch(() => {});
      },
    }),
  }),
});

export const {
  useStatsMutation,
  useAcquisitionChannelsMutation,
  useActiveUsersMutation,
  useAnalyticsMutation,
  useSessionsByDeviceMutation,
  useTopChannelsMutation,
  useTopPagesMutation,
} = dashboardApi;
