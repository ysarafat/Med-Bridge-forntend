import Logout from "../Logout";
import ThemeMode from "../Theme/ThemeMode";

const UserInfo = () => {
  return (
    <div className="p-4 bg-white/10">
      <div className="mb-4 flex justify-center">
        <ThemeMode />
      </div>
      <Logout className="w-full" />
    </div>
  );
};

export default UserInfo;
