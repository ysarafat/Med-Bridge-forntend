/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";

function NotFound() {
  const { error }: any = useRouteError();
  return (
    <div className="h-screen w-screen bg-[url('../../../public/Sprinkle.svg')] bg-cover bg-no-repeat items-center py-16 ">
      <img className="w-[70%] h-[70%] mx-auto" src="/Oops404.svg" alt="oops" />
      <div className="container mx-auto text-center">
        <p className="text-2xl font-semibold md:text-3xl mb-8">
          {error?.message}
        </p>
        <Link to="/">
          <Button className=" hover:scale-[102%] transition-all">
            Back To Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
