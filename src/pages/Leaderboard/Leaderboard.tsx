import Container from "@/components/Container";
import LeaderboardCard from "@/components/LeaderboardCard";
import SectionTitle from "@/components/SectionTitle";
import LeaderboardCardSkeleton from "@/components/Skeleton/LeaderboardCardSkeleton";
import { useGetDonorsQuery } from "@/redux/features/donores/donorsApi";
type TDonor = {
  _id: string;
  name: string;
  email: string;
  totalAmount: number;
};
const Leaderboard = () => {
  const { data: donorData, isLoading } = useGetDonorsQuery(undefined);

  return (
    <Container className="py-16">
      <SectionTitle title="leaderboard" subTitle="Our donar's ranking" />
      <div className="mb-4  py-2 px-5  rounded-md grid grid-cols-4 justify-items-start items-center	 relative">
        <p className="text-sm font-bold">Serial</p>
        <p className="text-sm  col-span-2 md:col-span-1 font-semibold">Name</p>
        <p className="col-span-2 md:col-span-1 hidden lg:block">Email</p>
        <p className=" justify-self-end">Amount</p>
      </div>
      {isLoading ? (
        <LeaderboardCardSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {donorData?.data?.map((donor: TDonor, index: number) => (
            <LeaderboardCard key={donor._id} serial={index} donor={donor} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Leaderboard;
