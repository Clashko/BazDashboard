import { Button } from "@material-tailwind/react";
import { PiUser } from "react-icons/pi";

export const User = () => {
  return (
    <Button className="p-2" variant="ghost">
      <PiUser size={20} />
    </Button>
  );
};
