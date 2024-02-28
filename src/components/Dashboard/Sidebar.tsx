import { cn } from "@/lib/utils";
import { Container, Home, LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import UserInfo from "./UserInfo";

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },

  {
    label: "All Supply",
    icon: Container,
    href: "/dashboard/supplies",
    color: "text-green-700",
  },
  {
    label: "Back Home",
    icon: Home,
    href: "/",
    color: "text-teal-700",
  },
];
const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="space-y-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 mt-5 flex-1">
        <Link
          to="/dashboard"
          className="flex justify-center items-center pl-3 mb-5"
        >
          <h1 className="text-2xl lg:text-3xl font-bold text-primaryColor text-center">
            Health Bridge
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              to={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-center font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                (pathname === "/dashboard" && route.href === "/dashboard") ||
                  pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <UserInfo />
    </div>
  );
};

export default Sidebar;
