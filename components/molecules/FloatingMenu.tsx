import Link from "next/link";
import React, { useEffect, useState } from "react";
interface PropsFloatingMenu {
  show: boolean;
}
const FloatingMenu = ({ show }: PropsFloatingMenu) => {
  const [showStyle, setShowStyle] = useState("-translate-y-48");
  useEffect(() => {
    show ? setShowStyle("translate-y-0") : setShowStyle("-translate-y-48");
  }, [show]);
  return (
    <div
      className={`absolute right-0 bg-dark border w-52 shadow-md rounded-md overflow-hidden transition duration-700 ${showStyle}`}
    >
      <ul className="grid grid-cols-1 text-white">
        <Link href={"/"}>
          <li className="hover:bg-slate-600 px-2  py-1 pt-3 pb-1 hover:cursor-pointer">
            Home
          </li>
        </Link>
        <Link href={"/profile"}>
          <li className="hover:bg-slate-600 px-2  py-2 hover:cursor-pointer">
            Profile
          </li>
        </Link>
        <Link href={"/portfolio"}>
          <li className="hover:bg-slate-600 px-2  py-2 hover:cursor-pointer">
            Portfolio
          </li>
        </Link>
        <Link href={"/contact"}>
          <li className="hover:bg-slate-600 px-2  pt-1 pb-3 hover:cursor-pointer">
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default FloatingMenu;
