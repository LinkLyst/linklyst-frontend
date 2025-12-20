"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "../ui/sidebar";
import {
  Home,
  Search,
  Settings,
  UserRound,
  MessageCircleQuestionMark,
  Logs,
  Tags
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const items = [
  { title: "Explore", url: "/", icon: Home },
  { title: "Profile", url: "#", icon: UserRound },
  { title: "Search", url: "#", icon: Search },
  { title: "Tags", url: "#", icon: Tags },

  { title: "Feedback", url: "#", icon: MessageCircleQuestionMark },
  { title: "Settings", url: "#", icon: Settings },
  { title: "Changelog", url: "#", icon: Logs }
];

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar className="sidebar !border-r border-gray-400  text-zinc-200">
      {/* Logo Section */}
      <SidebarHeader className="mb-2 flex flex-col gap-3 transition-all duration-300 ">
        <div className="px-3 py-2">
          <Image src={"/Ly.svg"} alt="Company logo" width={22} height={22} priority />
        </div>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="px-2">
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => {
              const isActive = pathname === item.url;

              return (
                <SidebarMenuItem key={item.title} className="mb-2">
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={`flex items-center justify-between  gap-3 rounded-lg px-3 py-2 transition text-sm font-medium  text-white ${isActive ? "bg-zinc-900 text-white" : "text-zinc-300 hover:bg-zinc-900/40 "} `}
                    >
                      <div className="flex items-center gap-4">
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </div>
                      <span
                        className={`h-5 w-1 rounded-full transition-all
                          ${isActive ? "bg-white" : "bg-transparent"}`}
                      />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
          <Button className="cursor-pointer w-full mt-4">Add Link</Button>
        </SidebarGroupContent>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <div className="flex flex-col gap-2 p-3">
          <div className="w-full h-30  bg-zinc-800 rounded-lg animate-pulse" />
          <p className="text-xs text-zinc-500 text-center">Built by CodeThat</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default LeftSidebar;
