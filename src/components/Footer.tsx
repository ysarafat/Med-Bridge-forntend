import { Locate, Mail, Phone } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-900 mt-20 pt-10">
      <Container className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-slate-300 mt-2 mb-4">
              The main objectives of healthcare supply chain management are to
              increase visibility and efficiency across the supply chain and, in
              recent months.
            </p>
            <div className="flex items-center gap-x-5">
              <Link to={"/"}>
                <span className=" text-slate-50 ">
                  <FaFacebook size={28} />
                </span>
              </Link>
              <Link to={"/"}>
                <span className=" text-slate-50 ">
                  <FaTwitter size={28} />
                </span>
              </Link>
              <Link to={"/"}>
                <span className=" text-slate-50 ">
                  <FaLinkedin size={28} />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xl font-extrabold text-slate-50 ">
              Important Links
            </p>
            <ul className="mt-4">
              <li className="text-slate-300 hover:text-primaryColor transition-all">
                <Link to={"/supplies"}>Supplies</Link>
              </li>
              <li className="text-slate-300 hover:text-primaryColor transition-all">
                <Link to={"/supplies"}>About Us</Link>
              </li>

              <li className="text-slate-300 hover:text-primaryColor transition-all">
                <Link to={"/supplies"}>Our Mission</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-extrabold text-slate-50 ">Contact Us</p>

            <span className="flex gap-x-2 items-center mt-4 text-slate-300 hover:text-primaryColor transition-all ">
              <Mail size={20} /> contact@health-bridge.com
            </span>
            <span className="flex gap-x-2 items-center my-2 text-slate-300 hover:text-primaryColor transition-all">
              <Phone size={20} /> +86 021-154258
            </span>
            <span className="flex gap-x-2 items-center my-2 text-slate-300 hover:text-primaryColor transition-all">
              <Locate size={20} /> 199/2, kachukhet, cantonment, 1206 Dhaka
            </span>
          </div>
          <div>
            <p className="text-xl font-extrabold text-slate-50 ">Newsletter</p>
            <p className="mt-4 text-slate-300">
              Stay Updated: Subscribe to Our Newsletter
            </p>
            <form className="mt-2">
              <input
                type="email"
                className="w-full py-2 rounded-md px-2"
                placeholder="Your Email"
              />
              <Button className="w-full mt-2"> Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-100 mt-8">
          <div className="text-slate-100 md:flex justify-between py-6 text-center">
            <p>© 2024 Health Bridge . All rights reserved</p>
            <p>A property of Health Bridge</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
