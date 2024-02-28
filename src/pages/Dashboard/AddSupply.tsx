import FormInput from "@/components/Form/FormInput";
import FormWrapper from "@/components/Form/FormWrapper";
import { Button } from "@/components/ui/button";
import { useAddPostMutation } from "@/redux/features/supplyPost/supplyPostApi";
import uploadImage from "@/utils/uploadImage";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddSupply = () => {
  const [addPost, { error }] = useAddPostMutation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  console.log(error, "REDUX_ERROR");
  const formData = new FormData();
  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    formData.append("image", data.image[0]);
    try {
      const image = await uploadImage(formData);
      data.image = image;
      const response = await addPost(data).unwrap();
      if (response.success) {
        toast.success(response.message);
        setIsLoading(false);
        navigate("/dashboard/supplies");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("There was an error");
    }
  };
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-center text-primaryColor">
        Add supplies
      </h1>
      <div>
        <FormWrapper onSubmit={onSubmit}>
          <div className="space-y-3">
            <FormInput type="file" name="image" label="Post Cover" />
            <FormInput type="text" name="title" label="Post title" />
            <FormInput type="text" name="category" label="Post category" />
            <FormInput type="number" name="qty" label="Total Amount" />
            <FormInput
              type="textarea"
              name="description"
              label="Post Description"
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

export default AddSupply;
