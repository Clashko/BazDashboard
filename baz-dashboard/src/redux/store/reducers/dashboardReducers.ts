import { dashboardApi } from "../../api/dashboardApi";
import dashboardSlice from "../../features/dashboardSlice";

export const dashboardReducers = {
  [dashboardApi.reducerPath]: dashboardApi.reducer,
  dashboardState: dashboardSlice.reducer,
};

export const dashboardMiddlewares = [dashboardApi.middleware];
