/* eslint-disable @typescript-eslint/ban-ts-comment */
import FormInput from "@/components/Form/FormInput";
import FormWrapper from "@/components/Form/FormWrapper";
import { Button } from "@/components/ui/button";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import uploadImage from "@/utils/uploadImage";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [register, { error }] = useRegisterMutation();
  const formData = new FormData();
  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    formData.append("image", data.image[0]);
    const image = await uploadImage(formData);

    setErrorMessage("");
    if (data.password !== data.confirmPassword) {
      return setErrorMessage("Password don't match");
    }
    if (error) {
      //@ts-ignore
      setErrorMessage(error.data.message);
    }
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      image: image,
    };

    try {
      const response = await register(userData).unwrap();
      toast.success(response.message);
      if (response.success) {
        navigate("/login");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-[url('/loginbg.png')] ">
      <FormWrapper
        onSubmit={onSubmit}
        className="bg-secondaryColor dark:bg-slate-800 w-full lg:w-1/3 p-5 rounded-md shadow-lg mx-5  "
      >
        <h1 className="text-primaryColor text-3xl font-bold text-center mb-4">
          Create an account
        </h1>

        {errorMessage && (
          <div className="py-1 bg-white border border-rose-500 rounded-md px-2 w-full text-center mb-2">
            <span className="text-lg text-rose-500  ">{errorMessage}</span>
          </div>
        )}
        <div className="space-y-3">
          <FormInput
            name="name"
            type="text"
            label="Full Name"
            placeholder="Md Rakib Khan"
          />
          <FormInput name="image" type="file" label="Image" />
          <FormInput
            name="email"
            type="email"
            label="Email"
            placeholder="youremail@example.com"
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            placeholder="********"
          />
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="********"
          />
        </div>
        <Button type="submit" className="w-full mt-5" disabled={isLoading}>
          {isLoading ? "Creating Account..." : "Register"}
        </Button>
        <div className="mt-4 text-center">
          Already have an account?{" "}
          <span className="font-semibold text-primaryColor">
            <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </FormWrapper>
    </div>
  );
};

export default Register;
