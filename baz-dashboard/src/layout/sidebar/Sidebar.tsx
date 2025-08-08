import { Button, Drawer, Typography } from "@material-tailwind/react";
import { NavButton } from "../../components";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";

interface Props {
  isSidebarOpened: boolean;
  setIsSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar = ({ isSidebarOpened, setIsSidebarOpened }: Props) => {
  return (
    <>
      <div className="block sm:hidden">
        <Drawer open={isSidebarOpened}>
          <Drawer.Panel className="w-full flex flex-col gap-2 bg-surface text-foreground">
            <div className="w-full flex flex-row justify-between items-center">
              <Typography type="h5">MENU</Typography>
              <Button
                variant="ghost"
                className="p-2 text-inherit"
                onClick={() => setIsSidebarOpened(false)}
              >
                <IoClose size={20} />
              </Button>
            </div>
            <NavButton target="/" placeholder="HOME" />
            <NavButton target="/dashboard" placeholder="DASHBOARD" />
          </Drawer.Panel>
        </Drawer>
      </div>

      <div className="h-full max-h-full hidden sm:block">
        <div
          className={clsx(
            "h-full flex flex-col gap-2 pt-2 rounded-lg bg-surface duration-200 transition-width",
            {
              "w-[200px]": isSidebarOpened,
              "w-[50px]": !isSidebarOpened,
            }
          )}
        >
          <NavButton target="/" placeholder="HOME" />
          <NavButton target="/dashboard" placeholder="DASHBOARD" />
        </div>
      </div>
    </>
  );
};
