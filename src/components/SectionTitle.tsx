import { FC } from "react";

type TSectionTitleProps = {
  title: string;
  subTitle: string;
};
const SectionTitle: FC<TSectionTitleProps> = ({ title, subTitle }) => {
  return (
    <div className="mb-8">
      <h1 className="text-xl md:text-2xl font-bold uppercase text-center">
        {title}
      </h1>
      <div className="border-[2.5px] border-primaryColor w-[100px] mx-auto my-2 rounded-md"></div>
      <p className="text-base font-normal text-slate-700 text-center lg:w-1/2 mx-auto">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionTitle;
