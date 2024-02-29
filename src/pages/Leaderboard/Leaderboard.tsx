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
