import { useState } from "react";
import { Content } from "./content/Content";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
import clsx from "clsx";

export const Layout = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  return (
    <div
      className={clsx(
        "h-screen max-h-screen flex flex-col gap-2 sm:p-2",
        "bg-surface-dark text-foreground duration-200"
      )}
    >
      <Header
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />
      <div className="w-full h-full max-h-full flex flex-row overflow-hidden">
        <Sidebar
          isSidebarOpened={isSidebarOpened}
          setIsSidebarOpened={setIsSidebarOpened}
        />
        <Content />
      </div>
    </div>
  );
};
