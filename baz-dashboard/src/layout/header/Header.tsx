import { Button, Typography } from "@material-tailwind/react";
import { ThemeSelector, User } from "./components";
import { BiMenu } from "react-icons/bi";

interface Props {
  isSidebarOpened: boolean;
  setIsSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ isSidebarOpened, setIsSidebarOpened }: Props) => {
  return (
    <header className="w-full max-w-full">
      <div className="w-full p-2 flex flex-row gap-4 justify-between items-center bg-surface rounded-b-lg sm:rounded-lg shadow-lg">
        <div className="flex flex-row gap-1 sm:gap-2 items-center">
          <Button
            variant="ghost"
            color="primary"
            className="p-2"
            onClick={() => setIsSidebarOpened(!isSidebarOpened)}
          >
            <BiMenu className="text-lg sm:text-xl" />
          </Button>
          <img alt="logo" src="/assets/logo.png" className="h-6 sm:h-8" />
          <Typography className="font-bold text-sm sm:text-lg">
            BAZ Dashboard
          </Typography>
        </div>
        <div className="flex flex-row gap-1 sm:gap-2">
          <ThemeSelector />
          <User />
        </div>
      </div>
    </header>
  );
};
