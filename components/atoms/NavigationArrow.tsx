interface NavigationArrowProps {
  sideUp?: boolean;
}

const NavigationArrow = ({ sideUp = true }: NavigationArrowProps) => {
  if (sideUp) {
    return (
      <div
        className={`flex flex-col justify-center items-center w-fit  group hover:cursor-pointer absolute bottom-0 rotate-180 mr-10`}
      >
        <div className="w-1 h-28 bg-main group-hover:h-36 duration-200 rounded -mb-1"></div>
        <div className="w- h-0 border-l-8 border-r-8 border-x-transparent border-t-[20px] border-t-main"></div>
      </div>
    );
  }
  return (
    <div
      className={`flex flex-col justify-center items-center w-fit  group hover:cursor-pointer absolute top-0`}
    >
      <div className="w-1 h-28 bg-main group-hover:h-36 duration-200 rounded -mb-1"></div>
      <div className=" h-0 border-l-8 border-r-8 border-x-transparent border-t-[20px] border-t-main"></div>
    </div>
  );
};

export default NavigationArrow;
