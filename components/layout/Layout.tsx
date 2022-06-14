import Head from "next/head";
import Image from "next/image";
import HeadingFirst from "../atoms/HeadingFirst";
import HeadingSecond from "../atoms/HeadingSecond";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Navigator from "../molecules/Navigator";
import { useEffect, useState } from "react";
import FloatingMenu from "../molecules/FloatingMenu";
import LeftLayout from "../organisms/LeftLayout";
import RightLayout from "../organisms/RightLayout";
interface LayoutProps {
  children: React.ReactNode;
  PageTitle: string;
  PageHead: string;
  firstPage?: boolean;
  lastPage?: boolean;
  currentPage: string;
}
const Layout = ({
  children,
  PageTitle,
  PageHead,
  firstPage,
  lastPage,
  currentPage,
}: LayoutProps) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Head>
        <title>{PageTitle}</title>
      </Head>
      <main
        className="w-full min-h-screen bg-cyan-900 p-2 md:py-8 relative grid grid-row"
        onClick={() => showMenu && setShowMenu(false)}
      >
        <section className="container h-full bg-dark flex flex-col md:grid  md:grid-rows-none md:grid-cols-3 shadow-lg drop-shadow-md ">
          <LeftLayout />
          <RightLayout
            PageHead={PageHead}
            currentPage={currentPage}
            firstPage={firstPage}
            lastPage={lastPage}
          >
            {children}
          </RightLayout>
        </section>
      </main>
    </>
  );
};

export default Layout;
