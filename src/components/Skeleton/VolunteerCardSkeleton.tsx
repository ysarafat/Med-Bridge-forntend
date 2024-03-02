import Skeleton from "react-loading-skeleton";

const VolunteerCardSkeleton = () => {
  return (
    <div className="border p-5 rounded-lg overflow-hidden hover:shadow-lg cursor-pointer transition-all">
      <div className="flex justify-center">
        <Skeleton height={96} width={96} borderRadius={100} />
      </div>
      <div>
        <h1 className="text-xl font-semibold text-center my-2 ">
          <Skeleton borderRadius={8} />
        </h1>
        <p className="text-center font-semibold text-primaryColor">
          <Skeleton borderRadius={8} />
        </p>
        <p className="text-center text-lg font-bold">
          <Skeleton borderRadius={8} />
        </p>
        <p className="text-center text-lg font-bold">
          <Skeleton borderRadius={8} />
        </p>
      </div>
    </div>
  );
};

export default VolunteerCardSkeleton;
