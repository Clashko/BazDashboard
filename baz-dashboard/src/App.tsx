import { ThemeModeProvider } from "./utils/ThemeModeProvider";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeModeProvider>
        <RouterProvider router={Router} />
      </ThemeModeProvider>
    </Provider>
  );
};
