/* eslint-disable @typescript-eslint/ban-ts-comment */
import FormInput from "@/components/Form/FormInput";
import FormWrapper from "@/components/Form/FormWrapper";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { verifyUser } from "@/utils/verifyUser";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { error }] = useLoginMutation();
  // @ts-ignore
  const errorMessage = error?.data?.message || null;
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    const userCredential = {
      email: data?.email,
      password: data?.password,
    };
    try {
      const response = await login(userCredential).unwrap();
      const user = verifyUser(response.token);
      dispatch(setUser({ user, token: response.token }));
      if (response.success) {
        toast.success(response.message);
        navigate("/");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center  ">
      <FormWrapper
        onSubmit={onSubmit}
        className="bg-secondaryColor dark:bg-slate-800 w-full lg:w-1/3 p-5 rounded-md shadow-lg mx-5 "
      >
        <h1 className="text-primaryColor text-3xl font-bold text-center mb-4">
          Login
        </h1>

        {error && (
          <div className="py-1 bg-white border border-rose-500 rounded-md px-2 w-full text-center mb-2">
            <span className="text-lg text-rose-500  ">{errorMessage}</span>
          </div>
        )}

        <div className="space-y-3">
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
        </div>
        <Button type="submit" className="w-full mt-5" disabled={isLoading}>
          {isLoading ? "Logging..." : "Login"}
        </Button>
        <div className="mt-4 text-center">
          Don’t have an account?{" "}
          <span className="font-semibold text-primaryColor">
            <Link to={"/register"}>Register</Link>
          </span>
        </div>
      </FormWrapper>
    </div>
  );
};

export default Login;
