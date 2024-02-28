import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <h1 className="text-2xl lg:text-3xl font-bold text-primaryColor ">
          Health Bridge
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
