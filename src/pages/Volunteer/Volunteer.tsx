import FormInput from "@/components/Form/FormInput";
import FormWrapper from "@/components/Form/FormWrapper";
import { Button } from "@/components/ui/button";
import { useAddVolunteerMutation } from "@/redux/features/volunteer/volunteerApi";
import uploadImage from "@/utils/uploadImage";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Volunteer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addVolunteer] = useAddVolunteerMutation();
  const navigate = useNavigate();
  const formData = new FormData();
  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    formData.append("image", data.image[0]);
    try {
      const image = await uploadImage(formData);
      data.image = image;
      const response = await addVolunteer(data).unwrap();
      if (response.success) {
        toast.success(response.message);
        setIsLoading(false);
        navigate("/about-us");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("There was an error");
    }
  };
  return (
    <div className="h-screen flex justify-center items-center  ">
      <FormWrapper
        onSubmit={onSubmit}
        className="bg-secondaryColor dark:bg-slate-800 w-full lg:w-1/3 p-5 rounded-md shadow-lg mx-5 "
      >
        <h1 className="text-primaryColor text-3xl font-bold text-center mb-4">
          Join as a Volunteer
        </h1>

        <div className="space-y-3">
          <FormInput
            name="name"
            type="text"
            label="Name"
            placeholder="EX: Rakib Khan"
          />
          <FormInput name="image" type="file" label="Image" />
          <FormInput
            name="phone"
            type="text"
            label="Phone"
            placeholder="+88017100000"
          />
          <FormInput
            name="email"
            type="email"
            label="Email"
            placeholder="youremail@example.com"
          />
          <FormInput
            name="address"
            type="text"
            label="Address"
            placeholder="Ex: Road #10/a, Apartment #c-1, Dhanmondi r/a, 1209, Dhaka"
          />
        </div>
        <Button type="submit" className="w-full mt-5" disabled={isLoading}>
          {isLoading ? "Please Wait..." : "Register"}
        </Button>
      </FormWrapper>
    </div>
  );
};

export default Volunteer;
