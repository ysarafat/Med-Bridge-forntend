/* eslint-disable @typescript-eslint/ban-ts-comment */
import FormInput from "@/components/Form/FormInput";
import FormWrapper from "@/components/Form/FormWrapper";
import { Button } from "@/components/ui/button";
import {
  useAddDonorsMutation,
  useGetSingleDonorQuery,
  useUpdateDonorAmountMutation,
} from "@/redux/features/donores/donorsApi";
import { useUpdatePostMutation } from "@/redux/features/supplyPost/supplyPostApi";
import { useGetUserQuery } from "@/redux/features/user/usersApi";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/store";
import { FC } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
type TDonateProps = {
  data: {
    _id: string;
    title: string;
    category: string;
    qty: string;
    image: string;
    description: string;
  };
};
export type TUser = {
  _id: string;
  name: string;
  email: string;
};
const Donate: FC<TDonateProps> = ({ data: postData }) => {
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const { data: userData, isLoading: userLoading } = useGetUserQuery(
    user?.email
  );
  const [updatePost, { error, isLoading }] = useUpdatePostMutation();
  const [addDonor] = useAddDonorsMutation();
  const { data: donorData } = useGetSingleDonorQuery(userData?.data?.email, {
    skip: userLoading,
  });
  const [updateDonorAmount] = useUpdateDonorAmountMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    const donateData = {
      image: postData?.image,
      title: postData?.title,
      category: postData?.category,
      qty: Number(postData?.qty) + Number(data.qty),
      description: postData?.description,
    };
    const response = await updatePost({
      id: postData?._id,
      postData: donateData,
    }).unwrap();

    // update donar for leaderboard
    const newDonorData = {
      name: userData?.data?.name,
      email: userData?.data?.email,
      totalAmount: Number(data?.qty),
      post: [postData._id],
    };

    let addDonorResponse;

    if (!donorData?.data?.email) {
      addDonorResponse = await addDonor(newDonorData).unwrap();
    } else {
      addDonorResponse = await updateDonorAmount({
        email: userData?.data?.email,
        totalAmount: donorData?.data?.totalAmount + Number(data?.qty),
        post: postData._id,
      }).unwrap();
    }

    if (response.success && addDonorResponse.success) {
      toast.success("Donation received successfully ");
      navigate("/dashboard");
    }
  };
  return (
    <div className="">
      {error && (
        <div className="text-center text-rose-400">
          {
            // @ts-ignore
            error?.data?.message
          }{" "}
          | need login first
        </div>
      )}
      {userData?.data && (
        <div>
          <p className="text-base font-medium">
            Username: {userData?.data?.name}
          </p>
          <p className="text-base font-medium mt-2 mb-3">
            User Email: {userData?.data?.email}
          </p>
        </div>
      )}
      <div>
        <p className="truncate">Supply Name: {postData.title} </p>
        <p>Supply Category: {postData.category} </p>
        <p>Total Amount: {postData.qty}</p>
      </div>
      <div className="mt-5">
        <FormWrapper onSubmit={onSubmit}>
          <FormInput type="number" name="qty" label="Donate Amount" required />
          <Button className="mt-3 w-full" disabled={isLoading}>
            {isLoading ? "Please Wait.." : " Donate Now"}
          </Button>
        </FormWrapper>
      </div>
    </div>
  );
};

export default Donate;
