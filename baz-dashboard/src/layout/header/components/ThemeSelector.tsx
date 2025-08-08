import { Button } from "@material-tailwind/react";
import { useThemeMode } from "../../../utils/ThemeModeProvider";
import { PiLightbulb, PiLightbulbFill } from "react-icons/pi";

export const ThemeSelector = () => {
  const { themeMode, setThemeMode } = useThemeMode();
  return (
    <Button
      className="p-2"
      variant="ghost"
      onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}
    >
      {themeMode === "dark" ? (
        <PiLightbulb className="text-lg sm:text-xl" />
      ) : (
        <PiLightbulbFill className="text-lg sm:text-xl" />
      )}
    </Button>
  );
};
