import clsx from "clsx";
import { Outlet } from "react-router-dom";

export const Content = () => {
  return (
    <main
      className={clsx(
        "xl:container mx-auto w-full h-full max-w-full max-h-full",
        "overflow-auto scrollbar-thin scrollbar-thumb-info scrollbar-track-transparent"
      )}
    >
      <Outlet />
    </main>
  );
};
