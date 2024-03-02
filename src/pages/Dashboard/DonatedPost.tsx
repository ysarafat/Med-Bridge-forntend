/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetSingleDonorQuery } from "@/redux/features/donores/donorsApi";
import { useGetPostQuery } from "@/redux/features/supplyPost/supplyPostApi";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/store";
import { Link } from "react-router-dom";
import { TUser } from "../supplyPostDetails/SupplyComponents/Donate";

const DonatedPost = () => {
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const { data: postData } = useGetPostQuery(undefined);
  const { data } = useGetSingleDonorQuery(user?.email, {
    skip: user?.email ? false : true,
  });
  function filterById(data: any, idArray: string[]) {
    if (!data || !idArray) return [];
    return data.filter((item: any) => item._id && idArray.includes(item._id));
  }

  const donatePost = filterById(postData?.data, data?.data?.post);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-center text-primaryColor">
        Give Testimonials
      </h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">SL</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {donatePost?.map((post: any, index: number) => (
            <TableRow key={post._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>{post.qty} </TableCell>
              <TableCell className="text-right">
                <div>
                  <Link to={`/dashboard/create-testimonial/${post._id}`}>
                    <Button
                      variant={"outline"}
                      className="hover:text-yellow-500 hover:border-yellow-500 mr-4"
                    >
                      Give Testimonial
                    </Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DonatedPost;
