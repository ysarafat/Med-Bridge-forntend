import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
type TPostCardProps = {
  image: string;
  title: string;
  category: string;
  qty: string;
  id: string;
};
const PostCard: FC<TPostCardProps> = ({ image, title, category, qty, id }) => {
  return (
    <div className="border border-slate-200 p-4 rounded-lg shadow hover:scale-[102%] cursor-pointer transition-all grid grid-rows-auto md:grid-rows-1fr xl:grid-rows-auto">
      <img src={image} alt={title} className="rounded-lg w-full h-[225px]" />
      <div>
        <h1 className="text-xl font-semibold text-center my-2">{title}</h1>
        <p className="text-center font-semibold text-primaryColor">
          {category}
        </p>
        <p className="text-center text-lg font-bold">Total Amount {qty}</p>
      </div>
      <div className="self-end">
        <Link to={`/supplies/${id}`}>
          {" "}
          <Button className="w-full mt-3  ">View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
