import { FC } from "react";

type TLeaderboardCardProps = {
  serial: number;
  donor: {
    _id: string;
    name: string;
    email: string;
    totalAmount: number;
  };
};
const LeaderboardCard: FC<TLeaderboardCardProps> = ({ serial, donor }) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800  py-2 px-5  rounded-md grid grid-cols-4 justify-items-start items-center	 relative">
      <p className="text-sm font-bold">{serial + 1}</p>
      <p className="text-sm  col-span-2 md:col-span-1 font-semibold">
        {" "}
        {donor.name}
      </p>
      <p className="col-span-2 md:col-span-1 hidden lg:block">{donor?.email}</p>
      <p className="text-primaryColor font-bold text-lg justify-self-end">
        $ {donor.totalAmount}
      </p>
    </div>
  );
};

export default LeaderboardCard;
