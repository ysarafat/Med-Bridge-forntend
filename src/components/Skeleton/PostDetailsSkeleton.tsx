import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Container from "../Container";

const PostDetailsSkeleton = () => {
  return (
    <Container className="my-16">
      <Skeleton height={500} borderRadius={8} />

      <div>
        <h1 className="text-4xl font-bold mt-5 mb-2">
          <Skeleton borderRadius={8} />
        </h1>
        <p>
          <Skeleton width={"25%"} borderRadius={8} />
        </p>
        <p>
          <Skeleton width={"25%"} borderRadius={8} />
        </p>
      </div>
      <div className="mt-5 mb-2">
        <Skeleton borderRadius={8} />
        <Skeleton borderRadius={8} />
        <Skeleton borderRadius={8} />
        <Skeleton borderRadius={8} />
        <Skeleton borderRadius={8} />
      </div>
      <Skeleton width={"15%"} height={35} borderRadius={8} />
    </Container>
  );
};

export default PostDetailsSkeleton;
