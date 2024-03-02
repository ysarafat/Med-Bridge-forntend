import Skeleton from "react-loading-skeleton";

const CommentSkeleton = () => {
  return (
    <div className="flex items-center gap-2 mt-5">
      <div>
        <Skeleton height={52} width={52} borderRadius={8} />
      </div>
      <div className="w-full">
        <Skeleton height={20} borderRadius={8} />

        <Skeleton height={15} borderRadius={8} />
      </div>
    </div>
  );
};

export default CommentSkeleton;
