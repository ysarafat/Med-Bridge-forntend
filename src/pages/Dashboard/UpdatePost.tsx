import FormInput from "@/components/Form/FormInput";
import FormWrapper from "@/components/Form/FormWrapper";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import {
  useGetSinglePostQuery,
  useUpdatePostMutation,
} from "@/redux/features/supplyPost/supplyPostApi";
import uploadImage from "@/utils/uploadImage";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const UpdatePost = () => {
  const { id } = useParams();
  const [updatePost] = useUpdatePostMutation();
  const { data: postSingleData, isLoading: singlePostLoading } =
    useGetSinglePostQuery(id);
  //   console.log(data);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const formData = new FormData();
  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
        const image = await uploadImage(formData);
        data.image = image;
      } else {
        data.image = postSingleData?.data.image;
      }
      const postData = {
        image: data.image ? data.image : postSingleData?.data.image,
        title: data.title ? data.title : postSingleData?.data.title,
        category: data.category ? data.category : postSingleData?.data.category,
        qty: data.qty ? data.qty : postSingleData?.data.qty,
        description: data.description
          ? data.description
          : postSingleData?.data.description,
      };

      const response = await updatePost({ id, postData }).unwrap();

      if (response.success) {
        toast.success(response.message);
        setIsLoading(false);
        navigate("/dashboard/supplies");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("There was an error");
    }
  };
  return singlePostLoading ? (
    <Loading />
  ) : (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-center text-primaryColor">
        Update supplies
      </h1>
      <div>
        <FormWrapper onSubmit={onSubmit}>
          <div className="space-y-3">
            <FormInput
              type="file"
              name="image"
              label="Post Cover"
              required={false}
            />
            <FormInput
              type="text"
              name="title"
              label="Post title"
              required={false}
              defaultValue={postSingleData?.data.title}
            />
            <FormInput
              type="text"
              name="category"
              label="Post category"
              required={false}
              defaultValue={postSingleData?.data.category}
            />
            <FormInput
              type="number"
              name="qty"
              label="Total Amount"
              required={false}
              defaultValue={Number(postSingleData?.data.qty)}
            />
            <FormInput
              type="textarea"
              name="description"
              label="Post Description"
              required={false}
              defaultValue={postSingleData?.data.description}
            />
            <div className="flex justify-end  ">
              <Button
                disabled={isLoading}
                type="submit"
                className=" w-full md:w-1/3 lg:w-1/6"
              >
                {isLoading ? "Please Wait..." : " Post Now"}
              </Button>
            </div>
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

export default UpdatePost;
