import Image from "next/image";
import React from "react";
import HeadingSecond from "../atoms/HeadingSecond";
import profilePic from "/public/img/me.png";

const LeftLayout = () => {
  return (
    <section className="bg-dark flex  relative h-96 md:h-full  w-full">
      <div className="w-72 sm:w-80 mx-auto mt-auto md:w-full  md:absolute -bottom-1 ">
        <Image src={profilePic} className="" alt="Profile Picture" />
      </div>
      <div className="absolute bottom-5 left-10 md:bottom-10 md:left-10">
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
