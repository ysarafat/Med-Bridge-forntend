import Skeleton from "react-loading-skeleton";

const LeaderboardCardSkeleton = () => {
  return (
    <div>
      <Skeleton height={40} borderRadius={8} />
      <Skeleton height={40} borderRadius={8} className="my-5" />
      <Skeleton height={40} borderRadius={8} />
      <Skeleton height={40} borderRadius={8} className="my-5" />
      <Skeleton height={40} borderRadius={8} />
      <Skeleton height={40} borderRadius={8} className="my-5" />
      <Skeleton height={40} borderRadius={8} />
    </div>
  );
};

export default LeaderboardCardSkeleton;
