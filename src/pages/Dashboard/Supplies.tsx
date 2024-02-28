import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeletePostMutation,
  useGetPostQuery,
} from "@/redux/features/supplyPost/supplyPostApi";
import { TPost } from "@/types/postTypes";

import { PenIcon, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
const Supplies = () => {
  const { data, isLoading } = useGetPostQuery(undefined);
  const [deletePost] = useDeletePostMutation();
  const handleDeletePost = async (id: string) => {
    try {
      const response = await deletePost(id).unwrap();
      if (response.success) {
        toast.success(response.message);
      }
    } catch (error) {
      toast.error("There was an error");
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-10">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold text-primaryColor">Supplies Post</h1>
        <Link to="/dashboard/create-supply">
          <Button>Add Post</Button>
        </Link>
      </div>
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
          {data?.data.map((post: TPost, index: number) => (
            <TableRow key={post._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>{post.qty} </TableCell>
              <TableCell className="text-right">
                <div>
                  <Link to={`/dashboard/update-supply/${post._id}`}>
                    <Button
                      variant={"outline"}
                      className="hover:text-yellow-600 hover:border-yellow-500 mr-4"
                    >
                      <PenIcon size={20} />
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleDeletePost(post._id)}
                    variant={"outline"}
                    className="hover:text-rose-600 hover:border-rose-500"
                  >
                    <Trash size={20} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Supplies;
