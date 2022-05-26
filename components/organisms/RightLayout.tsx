import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import HeadingFirst from "../atoms/HeadingFirst";
import FloatingMenu from "../molecules/FloatingMenu";
import Navigator from "../molecules/Navigator";
interface RightLayoutProps {
  children: React.ReactNode;
  PageHead: string;
  firstPage?: boolean;
  lastPage?: boolean;
  currentPage: string;
}
const RightLayout = ({
  children,
  PageHead,
  firstPage,
  lastPage,
  currentPage,
}: RightLayoutProps) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="bg-white col-span-2 py-12 px-10 relative ">
      <Navigator
        firstpage={firstPage}
        lastpage={lastPage}
        currentPage={currentPage}
      />
      <div className="flex items-center justify-between relative">
        <HeadingFirst color="main">{PageHead}</HeadingFirst>
        <button
          className=""
          onClick={() => (!showMenu ? setShowMenu(true) : setShowMenu(false))}
        >
          <span className="flex items-center  text-lg text-dark hover:text-slate-600">
            Jump To <ChevronDownIcon className="h-9 ml-1" />
          </span>

          {/* {showMenu && <FloatingMenu />} */}
        </button>
        <div
          className={
            showMenu
              ? "absolute w-52 h-44 top-12 right-0 overflow-y-hidden rounded"
              : "-z-10 absolute w-52 h-44 top-12 right-0 overflow-y-hidden rounded"
          }
        >
          <FloatingMenu show={showMenu} />
        </div>
      </div>
      {children}
    </section>
  );
};

export default RightLayout;
