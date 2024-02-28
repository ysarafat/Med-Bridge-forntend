import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
type TContainerProps = {
  children: ReactNode;
  className?: string;
};
const Container: FC<TContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1200px] mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
