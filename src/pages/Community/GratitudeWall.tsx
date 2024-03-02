import Container from "@/components/Container";
import FormInput from "@/components/Form/FormInput";
import FormWrapper from "@/components/Form/FormWrapper";
import SectionTitle from "@/components/SectionTitle";
import CommentSkeleton from "@/components/Skeleton/CommentSkeleton";
import { Button } from "@/components/ui/button";
import {
  useAddCommentMutation,
  useGetCommentsQuery,
} from "@/redux/features/comments/CommentsApi";
import { useGetUserQuery } from "@/redux/features/user/usersApi";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/store";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { TUser } from "../supplyPostDetails/SupplyComponents/Donate";
import CommentSection, { TComment } from "./CommentSection";

const GratitudeWall = () => {
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const { data: userData } = useGetUserQuery(user?.email);
  const { data: commentsData, isLoading: commentLoading } =
    useGetCommentsQuery(undefined);

  const [addComment, { isLoading }] = useAddCommentMutation();

  const onSubmit = async (data: FieldValues) => {
    const commentData = {
      name: userData?.data?.name,
      email: userData?.data?.email,
      image: userData?.data?.image,
      comment: data.comment,
      commentAt: new Date(),
    };
    try {
      const response = await addComment(commentData).unwrap();
      if (response.success) {
        toast.success("Comment post successfully ");
      }
    } catch (error) {
      toast.error("There was an issue");
      console.log(error);
    }
  };
  return (
    <Container className="my-12">
      <SectionTitle
        title="Gratitude Wall"
        subTitle="Throw your comment in our community"
      />
      <div>
        <img
          src="/LoveNotes.webp"
          alt=""
          className="w-full h-[500px] rounded-lg"
        />
        <h1 className="mt-5 text-center text-xl">
          Feel free to share your opinion here
        </h1>
      </div>

      <div className="mt-5">
        <FormWrapper onSubmit={onSubmit}>
          <div className="space-y-3">
            <FormInput
              type="textarea"
              name="comment"
              rows={4}
              label="Here describe your opinion "
            />
            <div className="flex justify-end  ">
              <Button
                disabled={isLoading}
                type="submit"
                className=" w-full md:w-1/3 lg:w-1/6"
              >
                {isLoading ? "Please Wait..." : "Post Comment"}
              </Button>
            </div>
          </div>
        </FormWrapper>
      </div>
      <h1 className="text-3xl mt-6">Comments</h1>
      {commentLoading && (
        <>
          <CommentSkeleton />
          <CommentSkeleton />
          <CommentSkeleton />
          <CommentSkeleton />
          <CommentSkeleton />
        </>
      )}

      {commentsData?.data?.map((item: TComment) => (
        <CommentSection key={item?._id} item={item} />
      ))}
    </Container>
  );
};

export default GratitudeWall;
