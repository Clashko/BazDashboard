import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  AcquisitionChannelsResponseDto,
  ActiveUsersResponseDto,
  AnalyticsResponseDto,
  SessionByDeviceResponseDto,
  TopChannelsResponseDto,
  TopPagesResponseDto,
} from "../dtos";
import type { RootState } from "../store/store";
import type { StatsResponseDto } from "../dtos/StatsResponseDto";

interface IDashboardState {
  statsState: StatsResponseDto | null;
  acquisitionChannelsState: AcquisitionChannelsResponseDto | null;
  activeUsersState: ActiveUsersResponseDto | null;
  analyticsState: AnalyticsResponseDto | null;
  sessionByDeviceState: SessionByDeviceResponseDto | null;
  topChannelsState: TopChannelsResponseDto | null;
  topPagesState: TopPagesResponseDto | null;
}

const initialState: IDashboardState = {
  statsState: null,
  acquisitionChannelsState: null,
  activeUsersState: null,
  analyticsState: null,
  sessionByDeviceState: null,
  topChannelsState: null,
  topPagesState: null,
};

const dashboardSlice = createSlice({
  name: "dashboardState",
  initialState: initialState,
  reducers: {
    clearDashboardState: () => {
      return initialState;
    },
    setStatsState: (
      state,
      action: PayloadAction<StatsResponseDto>
    ) => {
      state.statsState = action.payload;
    },
    setAcquisitionChannelsState: (
      state,
      action: PayloadAction<AcquisitionChannelsResponseDto>
    ) => {
      state.acquisitionChannelsState = action.payload;
    },
    setActiveUsersState: (
      state,
      action: PayloadAction<ActiveUsersResponseDto>
    ) => {
      state.activeUsersState = action.payload;
    },
    setAnalyticsState: (state, action: PayloadAction<AnalyticsResponseDto>) => {
      state.analyticsState = action.payload;
    },
    setSessionByDeviceState: (
      state,
      action: PayloadAction<SessionByDeviceResponseDto>
    ) => {
      state.sessionByDeviceState = action.payload;
    },
    setTopChannelsState: (
      state,
      action: PayloadAction<TopChannelsResponseDto>
    ) => {
      state.topChannelsState = action.payload;
    },
    setTopPagesState: (state, action: PayloadAction<TopPagesResponseDto>) => {
      state.topPagesState = action.payload;
    },
  },
});

export const {
  clearDashboardState,
  setStatsState,
  setAcquisitionChannelsState,
  setActiveUsersState,
  setAnalyticsState,
  setSessionByDeviceState,
  setTopChannelsState,
  setTopPagesState,
} = dashboardSlice.actions;

export default dashboardSlice;

export const selectStatsState = (state: RootState) =>
  state.dashboardState.statsState;

export const selectAcquisitionChannelsState = (state: RootState) =>
  state.dashboardState.acquisitionChannelsState;

export const selectActiveUsersState = (state: RootState) =>
  state.dashboardState.activeUsersState;

export const selectAnalyticsState = (state: RootState) =>
  state.dashboardState.analyticsState;

export const selectSessionByDeviceState = (state: RootState) =>
  state.dashboardState.sessionByDeviceState;

export const selectTopChannelsState = (state: RootState) =>
  state.dashboardState.topChannelsState;

export const selectTopPagesState = (state: RootState) =>
  state.dashboardState.topPagesState;
