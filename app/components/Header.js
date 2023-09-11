import Image from "next/image";
import Logo from "../assets/logo.svg";

export default function Header({ children }) {
  return (
    <div className="w-11/12 lg:w-2/5 p-4 bg-transparent border-2 border-solid border-gray-400 rounded-xl flex flex-row justify-between items-center outline-headerOutline">
      <div className="flex justify-center items-stretch h-full">
        <Image src={Logo} alt="logo" />
      </div>
      {children}
    </div>
  );
}
