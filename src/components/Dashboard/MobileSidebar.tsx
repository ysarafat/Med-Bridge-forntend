"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import { routes } from "./Sidebar";
import UserInfo from "./UserInfo";

const MobileSidebar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-900 border-b md:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-0 py-10 bg-slate-950 dark:bg-slate-800"
        >
          <div className="space-y-1 mb-10">
            {routes.map((route) => (
              <NavLink
                to={route.href}
                key={route.href}
                className={({ isActive }) =>
                  cn(
                    "text-sm group flex p-3 w-full justify-center font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    isActive ? "text-white bg-white/10" : "text-zinc-400"
                  )
                }
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </NavLink>
            ))}
          </div>
          <UserInfo />
        </SheetContent>
      </Sheet>
      <Search />
    </div>
  );
};

export default MobileSidebar;
