import { Facebook, Linkedin, Twitter } from "lucide-react";
import { FC } from "react";
type TTeamMemberCardProps = {
  image: string;
  name: string;
  designation: string;
  facebookUrl: string;
  LinkedinUrl: string;
  xUrl: string;
};
const TeamMemberCard: FC<TTeamMemberCardProps> = ({
  name,
  image,
  designation,
  facebookUrl,
  LinkedinUrl,
  xUrl,
}) => {
  return (
    <div>
      <div className="bg-[#ffe5b483] border border-slate-200 grid grid-rows-auto md:grid-rows-1fr xl:grid-rows-auto  rounded-t-lg ">
        <div className="w-full overflow-hidden relative z-10">
          <img
            src={image}
            alt={name}
            className="rounded-full border-4 border-primaryColor p-1 mx-auto my-4 z-[999] w-24 h-24 object-cover aspect-square "
          />
          <div className="h-96 bg-secondaryColor w-full rounded-full absolute -top-80 shadow  -z-10"></div>
        </div>
        <div className="mb-4">
          <p className="text-2xl font-extrabold text-center text-primaryColor">
            {name}
          </p>
          <p className="text-center">{designation}</p>
        </div>
      </div>
      <div className="bg-primaryColor  rounded-b-lg text-center self-end">
        <div className="flex justify-center items-center gap-x-4">
          <a
            href={facebookUrl}
            target="_blank"
            className="hover:bg-secondaryColor text-center p-2 flex items-center justify-start text-white hover:text-black transition-all"
          >
            <Facebook />
          </a>
          <a
            href={LinkedinUrl}
            target="_blank"
            className="hover:bg-secondaryColor text-center p-2 flex items-center justify-start text-white hover:text-black transition-all"
          >
            <Linkedin />
          </a>
          <a
            href={xUrl}
            target="_blank"
            className="hover:bg-secondaryColor text-center p-2 flex items-center justify-start text-white hover:text-black transition-all"
          >
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
