import FormInput from "@/components/Form/FormInput";
import FormWrapper from "@/components/Form/FormWrapper";
import { Button } from "@/components/ui/button";
import { useAddTestimonialsMutation } from "@/redux/features/testimonials/testimonialsApi";
import { useGetUserQuery } from "@/redux/features/user/usersApi";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/store";
import { FieldValues } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { TUser } from "../supplyPostDetails/SupplyComponents/Donate";

const CreateTestimonial = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const { data: userData } = useGetUserQuery(user?.email);
  const [addTestimonials, { isLoading }] =
    useAddTestimonialsMutation(undefined);

  const onSubmit = async (data: FieldValues) => {
    data.postId = id;
    data.name = userData?.data?.name;
    data.email = user?.email;
    data.image = userData?.data?.image;
    try {
      const response = await addTestimonials(data).unwrap();
      if (response.success) {
        toast.success("Testimonials post successfully ");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("There was an error");
    }
  };
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-center text-primaryColor">
        Give Testimonials
      </h1>

      <FormWrapper onSubmit={onSubmit}>
        <div className="space-y-3">
          <FormInput
            type="textarea"
            name="testimonial"
            label="Describe Your Testimonials"
          />
          <div className="flex justify-end  ">
            <Button
              disabled={isLoading}
              type="submit"
              className=" w-full md:w-1/3 lg:w-1/6"
            >
              {isLoading ? "Please Wait..." : "submit"}
            </Button>
          </div>
        </div>
      </FormWrapper>
    </div>
  );
};

export default CreateTestimonial;
