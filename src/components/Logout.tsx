import { cn } from "@/lib/utils";
import { logoutUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "./ui/button";

const Logout = ({ className }: { className?: string }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(logoutUser());
    localStorage.clear();
    toast.success("Logout successfully");
    navigate("/");
  };
  return (
    <Button
      onClick={logout}
      variant={"outline"}
      className={cn(
        "bg-rose-400  text-white hover:bg-rose-200 hover:border-rose-500 ",
        className
      )}
    >
      Logout
    </Button>
  );
};

export default Logout;
