import { CalendarIcon, HomeIcon, MailIcon, PhoneIcon, UserIcon } from "@heroicons/react/solid";
import { NextPage } from "next";
import React from "react";
import HeadingFirst from "../components/atoms/HeadingFirst";
import Layout from "../components/layout/Layout";

const ProfilePage: NextPage = () => {
  return (
    <Layout PageTitle="Profile" PageHead="Biodata" currentPage="profile">
      <div className="grid grid-cols-2 w-full gap-y-7">
        <span className="sm:text-lg md:text-xl flex items-center font-extrabold text-main">
          <UserIcon className="w-6 mr-2" />
          <span> Full Name</span>
        </span>
        <span className="sm:text-lg md:text-xl inline-block text-right text-main">
          Ditotisi Rasyid Sumpena
        </span>
        <span className="sm:text-lg md:text-xl flex items-center font-extrabold text-main">
          <HomeIcon className="w-6 mr-2" />
          Address
        </span>
        <span className="sm:text-lg md:text-xl inline-block text-right text-main">
          Bandung, Indonesia
        </span>
        <span className="sm:text-lg md:text-xl flex items-center font-extrabold text-main">
          <MailIcon className="w-6 mr-2" /> Email
        </span>
        <span className="sm:text-lg md:text-xl inline-block text-right text-main">
          ditotisirasyid@gmail.com
        </span>
      </div>
      <HeadingFirst color="main" classname="my-5">
        Education
      </HeadingFirst>
      <div className="grid grid-cols-2 w-full gap-y-7">
        <span className="sm:text-lg md:text-xl inline-block font-extrabold text-main uppercase">
          UNIVERSITAS KOMPUTER INDONESIA
        </span>
        <span className="sm:text-lg md:text-xl inline-block text-right text-main tracking-wider">
          2018 - 2022 (Teknik Informatika)
        </span>
      </div>
    </Layout>
  );
};

export default ProfilePage;
