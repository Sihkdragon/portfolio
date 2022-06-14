import { useRouter } from "next/router";
import NavigationArrow from "../atoms/NavigationArrow";
import Pagelists from "../../database/PageList";

interface NavigatorProps {
  firstpage?: boolean;
  lastpage?: boolean;
  currentPage: string;
}
const Navigator = ({ firstpage, lastpage, currentPage }: NavigatorProps) => {
  let PageNumber: number;
  switch (currentPage) {
    case "home":
      PageNumber = 0;
      break;
    case "profile":
      PageNumber = 1;
      break;
    case "portfolio":
      PageNumber = 2;
      break;
    case "contact":
      PageNumber = 3;
      break;

    default:
      break;
  }
  const router = useRouter();
  return (
    <div
      id="arrow-container"
      className={`flex  flex-col justify-center items-center gap-y-8 w-fit`}
    >
      <div
        className={
          firstpage ? `invisible` : `relative pr-4 md:pr-5 duration-500`
        }
        onClick={() => {
          router.push(Pagelists[PageNumber - 1]);
        }}
      >
        <NavigationArrow />
      </div>
      <span className=" mx-auto block text-sm md:text-base  rotate-90 text-main align-top">
        Navigate
      </span>
      <div
        className={lastpage ? `hidden` : `relative pr-4 md:pr-5 `}
        onClick={() => {
          router.push(Pagelists[PageNumber + 1]);
        }}
      >
        <NavigationArrow sideUp={false} />
      </div>
    </div>
  );
};

export default Navigator;
