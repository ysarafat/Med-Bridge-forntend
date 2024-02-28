import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import SectionTitle from "@/components/SectionTitle";
import PostCardSkeleton from "@/components/Skeleton/PostCardSkeleton";
import { useGetPostQuery } from "@/redux/features/supplyPost/supplyPostApi";
import { TPost } from "@/types/postTypes";

const SuppliesCards = () => {
  const { data, isLoading } = useGetPostQuery(undefined);

  return (
    <Container className="py-16">
      <SectionTitle
        title="All Supply Post "
        subTitle="Her our all supply post"
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
          data?.data?.map((supply: TPost) => (
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
    </Container>
  );
};

export default SuppliesCards;
