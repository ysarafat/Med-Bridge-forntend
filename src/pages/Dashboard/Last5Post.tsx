import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetPostQuery } from "@/redux/features/supplyPost/supplyPostApi";
import { TPost } from "@/types/postTypes";
import { Link } from "react-router-dom";
const Last5Post = () => {
  const { data: postData } = useGetPostQuery(undefined);
  return (
    <div className="w-full">
      <div>
        <h1 className="text-2xl text-center font-bold text-primaryColor">
          Last 5 Supply Post
        </h1>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">SL</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {postData?.data
              ?.slice(Math.max(postData?.data.length - 5, 0))
              ?.reverse()
              ?.map((post: TPost, index: number) => (
                <TableRow key={post._id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>{post.qty}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-5 md:w-1/2 w-full  mx-auto">
        <Link to="/dashboard/create-supply">
          <Button className="w-full">Add Post</Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Last5Post;
