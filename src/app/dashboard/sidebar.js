"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import { Settings } from "lucide-react";
import React from "react";
import { sidebarLinks } from "./constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const pathName = usePathname();

  const user = {
    name: "Ma'ruf",
    avatar: "/avatar.png",
  };

  return (
    <nav className="col-start-1 col-end-2 row-start-2 row-end-3 flex flex-col items-stretch justify-between border border-border border-t-0">
      <ul className="py-[10px] flex flex-col items-center gap-2.5">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const url = `/dashboard/${link.slug}`;
          console.log(url);
          return (
            <li key={link.id}>
              {/* prevent default link focus styles */}
              <Button
                asChild={true}
                variant={pathName === url ? "default" : "ghost"}
                size="icon"
              >
                <Link href={url}>
                  <Icon size={15} />
                </Link>
              </Button>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col items-center">
        <Button className="mb-[10px] " variant="ghost" size="icon">
          <Settings size={16} className="text-secondary" />
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
