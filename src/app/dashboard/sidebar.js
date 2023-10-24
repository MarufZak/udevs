import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import { Settings } from "lucide-react";
import React from "react";

const DashboardSidebar = () => {
  const user = {
    name: "Ma'ruf",
    avatar: "avatar.png",
  };

  return (
    <nav className="col-start-1 col-end-2 row-start-2 row-end-3 flex flex-col items-stretch justify-between border border-border border-t-0">
      <ul></ul>
      <div className="flex flex-col items-center">
        <Button className="mb-[10px]" variant="ghost" size="icon">
          <Settings />
        </Button>
        <Avatar className="w-full h-[54px] grid place-items-center rounded-none border-t-[1px]">
          <AvatarFallback className="w-[32px] h-[32px]">
            {user.name.slice(0, 1)}
          </AvatarFallback>
          <AvatarImage className="w-[32px] h-[32px]" src={user.avatar} />
        </Avatar>
      </div>
    </nav>
  );
};

export default DashboardSidebar;
