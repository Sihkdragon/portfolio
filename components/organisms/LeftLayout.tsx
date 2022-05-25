import Image from "next/image";
import React from "react";
import HeadingSecond from "../atoms/HeadingSecond";
import profilePic from "../../public/img/me.png";

const LeftLayout = () => {
  return (
    <section className="bg-dark  relative ">
      <div className="w-full  -bottom-1 absolute">
        <Image src={profilePic} className="" />
      </div>
      <div className="absolute bottom-10 left-10">
        <HeadingSecond color="white">Ditotisi Rasyid Sumpena</HeadingSecond>
        <HeadingSecond color="white" weight="medium">
          Student
        </HeadingSecond>
        {/* <div className="text-light font-extrabold">tes</div> */}
      </div>
    </section>
  );
};

export default LeftLayout;
