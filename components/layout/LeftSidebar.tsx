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
import { Home, Search, Settings, UserRound, MessageCircleQuestionMark, Logs } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const items = [
  { title: "Explore", url: "#", icon: Home },
  { title: "Profile", url: "#", icon: UserRound },
  { title: "Feedback", url: "#", icon: MessageCircleQuestionMark },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
  { title: "Changelog", url: "#", icon: Logs }
];

const LeftSidebar = () => {
  return (
    <Sidebar className="sidebar !border-none !border-r bg-zinc-950  text-zinc-200">
      {/* Logo Section */}
      <SidebarHeader className="mb-2 flex flex-col gap-3 transition-all duration-300 ">
        <div className="flex items-center gap-3 bg-zinc-900/70 px-3 py-2 rounded-xl border border-zinc-800 shadow-sm">
          <Image
            src={"/Ly.svg"}
            alt="Company logo"
            width={32}
            height={32}
            priority
            className="rounded-md"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-lg font-semibold tracking-tight">Linklyst</h1>
            <p className="text-[11px] text-zinc-400">Save to organize.</p>
          </div>
        </div>
        <Button className="cursor-pointer">Add Now</Button>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="px-2">
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title} className="mb-2">
                <SidebarMenuButton asChild>
                  <a
                    href={item.url}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-zinc-800 transition text-sm font-medium text-zinc-300 hover:text-white"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <div className="flex flex-col gap-2 p-3">
          <div className="w-full h-14 bg-zinc-800 rounded-lg animate-pulse" />
          <p className="text-xs text-zinc-500 text-center">Built by CodeThat</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default LeftSidebar;
