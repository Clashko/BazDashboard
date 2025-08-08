import { Typography } from "@material-tailwind/react";
import clsx from "clsx";
import { BiHome, BiSolidDashboard } from "react-icons/bi";
import { NavLink } from "react-router-dom";

interface Props {
  target: string;
  placeholder: string;
}
export const NavButton = ({ target, placeholder }: Props) => {
  const setIcon = (placeholder: string) => {
    switch (placeholder) {
      case "HOME":
        return <BiHome size={30} />;
        break;
      case "DASHBOARD":
        return <BiSolidDashboard size={30} />;
        break;
    }
  };

  return (
    <NavLink
      to={target}
      className="w-full bg-transparent border-transparent hover:bg-primary/5 hover:border-primary/5 transition-all duration-200"
    >
      {({ isActive }) => (
        <div
          className={clsx(
            "w-full grid grid-flow-col justify-center sm:justify-normal grid-cols-[50px_150px] sm:grid-cols-[50px_1fr] overflow-hidden",
            {
              "sm:border-r-2 sm:border-info": isActive,
            }
          )}
        >
          <div
            className={clsx("flex items-center justify-center p-2", {
              "text-info": isActive,
            })}
          >
            {setIcon(placeholder)}
          </div>
          <div className="flex items-center justify-start sm:justify-center">
            <Typography className={clsx({ "text-info": isActive })}>
              {placeholder}
            </Typography>
          </div>
        </div>
      )}
    </NavLink>
  );
};
