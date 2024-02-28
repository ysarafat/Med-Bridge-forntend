import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const PostCardSkeleton = () => {
  return (
    <div className="border border-slate-200 p-4 rounded-lg shadow hover:scale-[102%] cursor-pointer transition-all grid grid-rows-auto md:grid-rows-1fr xl:grid-rows-auto">
      <Skeleton height={225} borderRadius={8} />
      <div>
        <h1 className="text-xl font-semibold text-center my-2">
          <Skeleton borderRadius={8} />
        </h1>
        <p className="text-center font-semibold text-primaryColor">
          <Skeleton borderRadius={8} />
        </p>
        <p className="text-center text-lg font-bold">
          <Skeleton borderRadius={8} />
        </p>
      </div>
      <div className="self-end">
        <Skeleton height={35} borderRadius={8} />
      </div>
    </div>
  );
};

export default PostCardSkeleton;
