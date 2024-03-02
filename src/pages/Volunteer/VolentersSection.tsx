import { Locate, Mail, Phone } from "lucide-react";
import { FC } from "react";
export type TVolunteer = {
  _id: string;
  name: string;
  image: string;
  phone: string;
  email: string;
  address: string;
};
const VolunteerSection: FC<{ volunteer: TVolunteer }> = ({ volunteer }) => {
  return (
    <div className="border p-5 rounded-lg relative overflow-hidden hover:shadow-lg cursor-pointer transition-all">
      <div>
        <img
          src={volunteer.image}
          alt="volunteer"
          className="w-24 h-24 rounded-full mx-auto border-2 border-primaryColor p-1 object-cover"
        />
        <h5 className="text-center text-xl mt-2 text-primaryColor">
          {volunteer.name}
        </h5>
        <div className="flex items-center gap-x-3 justify-center my-1">
          <Phone size={20} className="text-black dark:text-slate-200" />{" "}
          <p>{volunteer.phone}</p>
        </div>
        <div className="flex items-center gap-x-3 justify-center">
          <Mail size={20} className="text-black dark:text-slate-200" />{" "}
          <p>{volunteer.email}</p>
        </div>

        <div className="flex items-center gap-x-3 justify-center my-1 text-center">
          <Locate
            size={20}
            className="text-black dark:text-slate-200 text-center"
          />{" "}
          <p className="">{volunteer.address}</p>
        </div>
      </div>
      <div className="w-[200px] h-[200px] bg-primaryColor rounded-full absolute -left-40 -bottom-40 z-[-999]"></div>
      <div className="w-[200px] h-[200px] bg-primaryColor rounded-full absolute -right-28 -top-28 z-[-999]"></div>
    </div>
  );
};

export default VolunteerSection;
