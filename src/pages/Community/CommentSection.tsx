import moment from "moment";
import { FC } from "react";
export type TComment = {
  _id: string;
  name: string;
  email: string;
  image: string;
  comment: string;
  commentAt: string;
};
const CommentSection: FC<{ item: TComment }> = ({ item }) => {
  return (
    <div className="flex gap-3 mt-6">
      <img src={item?.image} alt="" className="w-14 h-14 rounded-md" />
      <div>
        <div className="flex  items-center gap-3">
          <p className="text-lg font-bold">{item?.name}</p>
          <p className="text-sm text-slate-500">
            {moment(item?.commentAt).subtract(1, "days").calendar()}
          </p>
        </div>
        {item.comment}
      </div>
    </div>
  );
};

export default CommentSection;
