import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hook";
import { useCurrentToken } from "@/redux/store";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import Logout from "./Logout";
import ThemeMode from "./Theme/ThemeMode";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  const token = useAppSelector(useCurrentToken);
  return (
    <nav className=" py-4 border-b ">
      <Container className="flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className=" ">
          <div className=" hidden md:flex gap-x-5 items-center">
            {" "}
            <Link to={"/supplies"}>All Supplies</Link>
            {!token && (
              <Link to={"/login"}>
                <Button
                  variant={"outline"}
                  className={cn(
                    "hover:bg-secondaryColor/20 hover:border-primaryColor"
                  )}
                >
                  Login
                </Button>
              </Link>
            )}
            {token && (
              <>
                <Link to={"/dashboard"}>
                  <Button>Dashboard</Button>
                </Link>
                <Logout />
              </>
            )}
            <ThemeMode />
          </div>
          <div className="flex items-center gap-x-5">
            <div className="md:hidden">
              <ThemeMode />
            </div>
            <Sheet>
              <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
                <Menu />
              </SheetTrigger>
              <SheetContent
                className="p-0 bg-white dark:bg-slate-800"
                side="right"
              >
                <div className="flex flex-col gap-y-3 mt-10 px-4">
                  {" "}
                  <Link to={"/supplies"} className="text-center">
                    All Supplies
                  </Link>
                  {!token && (
                    <Link to={"/login"}>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "hover:bg-secondaryColor/20 hover:border-primaryColor w-full"
                        )}
                      >
                        Login
                      </Button>
                    </Link>
                  )}
                  {token && (
                    <>
                      <Link to={"/dashboard"}>
                        <Button className="w-full">Dashboard</Button>
                      </Link>
                      <Logout />
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
