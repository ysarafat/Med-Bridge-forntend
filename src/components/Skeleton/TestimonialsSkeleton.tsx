import Skeleton from "react-loading-skeleton";

const TestimonialsSkeleton = () => {
  return (
    <div className=" grid grid-col-1 md:grid-cols-2 gap-5 ">
      <div className="border flex items-center gap-x-3 p-3 rounded-lg">
        <Skeleton borderRadius={100} width={40} height={40} />

        <div className="w-full">
          <Skeleton borderRadius={5} width={"100%"} height={30} />
          <Skeleton borderRadius={5} width={"100%"} height={10} />
        </div>
      </div>
      <div className="border flex items-center gap-x-3 p-3 rounded-lg">
        <Skeleton borderRadius={100} width={40} height={40} />

        <div className="w-full">
          <Skeleton borderRadius={5} width={"100%"} height={30} />
          <Skeleton borderRadius={5} width={"100%"} height={10} />
        </div>
      </div>
      <div className="border flex items-center gap-x-3 p-3 rounded-lg">
        <Skeleton borderRadius={100} width={40} height={40} />

        <div className="w-full">
          <Skeleton borderRadius={5} width={"100%"} height={30} />
          <Skeleton borderRadius={5} width={"100%"} height={10} />
        </div>
      </div>
      <div className="border flex items-center gap-x-3 p-3 rounded-lg">
        <Skeleton borderRadius={100} width={40} height={40} />

        <div className="w-full">
          <Skeleton borderRadius={5} width={"100%"} height={30} />
          <Skeleton borderRadius={5} width={"100%"} height={10} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSkeleton;
