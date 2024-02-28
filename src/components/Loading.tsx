import { RingLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="h-screen fixed w-screen  top-0 right-0 left-0 bottom-0 bg-white/50 backdrop-blur-[2px] flex justify-center items-center z-50">
      <div className="z-50 ">
        <RingLoader color="#0d9488" size={105} />
      </div>
    </div>
  );
};

export default Loading;
