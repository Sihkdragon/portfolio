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
    <section className="bg-white h-full md:col-span-2 py-8 md:py-12 px-2 sm:px-6 md:px-10 relative ">
      <div className="flex items-center justify-between relative">
        <HeadingFirst color="main">{PageHead}</HeadingFirst>
        <button
          className=""
          onClick={() => (!showMenu ? setShowMenu(true) : setShowMenu(false))}
        >
          <span className="flex items-center  text-lg text-dark hover:text-slate-600">
            Jump To
            <ChevronDownIcon
              className={`h-9 ml-1 ${showMenu && "-rotate-180"} duration-700`}
            />
          </span>
        </button>
        <div
          className={
            showMenu
              ? "absolute w-52 h-44 top-12 right-0 overflow-y-hidden rounded"
              : "absolute w-52 h-44 top-12 right-0 overflow-y-hidden rounded"
          }
        >
          <FloatingMenu show={showMenu} />
        </div>
      </div>
      <main className="py-10 h-full flex">
        <div className="w-full h-full overflow-y-hidden">{children}</div>{" "}
        <Navigator
          firstpage={firstPage}
          lastpage={lastPage}
          currentPage={currentPage}
        />
      </main>
    </section>
  );
};

export default RightLayout;
