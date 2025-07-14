"use client";

import {
  Search,
  UsersRound,
  House,
  ChartPie,
  Settings,
  MessageCircleQuestion,
  LogOut,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const navItems = [
    { icon: <Search />, label: "Search", active: true },
    { icon: <UsersRound />, label: "Users" },
    { icon: <House />, label: "Home" },
    { icon: <ChartPie />, label: "Analytics" },
    { icon: <Settings />, label: "Settings" },
  ];

  const bottomItems = [
    { icon: <MessageCircleQuestion />, label: "Help" },
    { icon: <LogOut />, label: "Logout" },
  ];

  return (
    <TooltipProvider>
      <aside className="w-20 h-[100vh] flex flex-col justify-between items-center p-5 border-r bg-white">
        {/* Logo */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-2xl font-black text-[#6a0dad]">AJO</h1>
          <nav>
            <ul className="flex flex-col gap-2">
              {navItems.map(({ icon, label, active }, idx) => (
                <li key={idx}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`w-12 h-12 rounded-lg text-[#390053] hover:bg-[#390053] hover:text-stone-50 ${
                          active ? "bg-[#f0e8f6] text-[#9b5cc0]" : ""
                        }`}
                      >
                        {icon}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Icons */}
        <div className="flex flex-col items-center gap-3">
          <ul className="flex flex-col gap-2">
            {bottomItems.map(({ icon, label }, idx) => (
              <li key={idx}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-12 h-12 rounded-lg text-[#390053] hover:bg-[#390053] hover:text-stone-50"
                    >
                      {icon}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
          <Separator className="w-10 bg-muted" />
        </div>
      </aside>
    </TooltipProvider>
  );
};

export default Sidebar;
