import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import SectionTitle from "@/components/SectionTitle";
import PostCardSkeleton from "@/components/Skeleton/PostCardSkeleton";
import { Button } from "@/components/ui/button";
import { useGetPostQuery } from "@/redux/features/supplyPost/supplyPostApi";
import { TPost } from "@/types/postTypes";
import { Link } from "react-router-dom";

const SupplyPosts = () => {
  const { data, isLoading } = useGetPostQuery(undefined) || {};

  return (
    <Container className="mt-16">
      <SectionTitle
        title="Supply Posts"
        subTitle="Post their available health and medical supplies for distribution during disasters or emergencies."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {isLoading ? (
          <>
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
          </>
        ) : (
          data?.data
            ?.slice(Math.max(data?.data.length - 6, 0))
            ?.reverse()
            ?.map((supply: TPost) => (
              <PostCard
                key={supply._id}
                image={supply.image}
                title={supply.title}
                category={supply.category}
                qty={supply.qty}
                id={supply._id}
              />
            ))
        )}
      </div>

      <div className="lg:w-1/4 md:w-1/3 w-1/2 mx-auto mt-8">
        <Link to={"/supplies"}>
          <Button className="w-full hover:scale-[102%] transition-all">
            View All
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default SupplyPosts;
