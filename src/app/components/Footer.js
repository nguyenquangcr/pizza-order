import Image from "next/image";
import Link from "next/link";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-6">
          {/* logo  */}
          <Link href={"#"}>
            <Image src={"logo.svg"} width={100} height={100} alt="" />
          </Link>
          {/* social icons */}
          <div className="flex gap-x-6 text-xl text-white">
            <Link href={"#"}>
              <FaYoutube />
            </Link>
            <Link href={"#"}>
              <FaFacebook />
            </Link>
            <Link href={"#"}>
              <FaInstagram />
            </Link>
            <Link href={"#"}>
              <FaPinterest />
            </Link>
          </div>
          {/* copyright  */}
          <div className="text-white font-medium">
            Copyright &copy: Medicineland 2023. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
