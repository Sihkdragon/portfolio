import {
  CalendarIcon,
  HomeIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { NextPage } from "next";
import React from "react";
import HeadingFirst from "../components/atoms/HeadingFirst";
import Layout from "../components/layout/Layout";

const ProfilePage: NextPage = () => {
  return (
    <Layout PageTitle="Profile" PageHead="Biodata" currentPage="profile">
      <div className="grid grid-cols-2 w-full mt-12 pr-24 gap-y-7">
        <span className=" text-xl flex items-center font-extrabold text-main">
          <UserIcon className="w-6 mr-2" />
          <span> Full Name</span>
        </span>
        <span className=" text-xl inline-block text-right text-main">
          Ditotisi Rasyid Sumpena
        </span>
        <span className=" text-xl flex items-center font-extrabold text-main">
          <CalendarIcon className="w-6 mr-2" />
          Date of Birth
        </span>
        <span className=" text-xl inline-block text-right text-main">
          July, 03 2000
        </span>
        <span className=" text-xl flex items-center font-extrabold text-main">
          <HomeIcon className="w-6 mr-2" />
          Address
        </span>
        <span className=" text-xl inline-block text-right text-main">
          Tangerang, Indonesia
        </span>
        <span className=" text-xl flex items-center font-extrabold text-main">
          <MailIcon className="w-6 mr-2" /> Email
        </span>
        <span className=" text-xl inline-block text-right text-main">
          ditolord@gmail.com
        </span>
        <span className=" text-xl flex items-center font-extrabold text-main">
          <PhoneIcon className="w-6 mr-2" /> Phone
        </span>
        <span className=" text-xl inline-block text-right text-main">
          (+62) 821-1741-6500
        </span>
      </div>
      <HeadingFirst color="main" classname="mt-14">
        Education
      </HeadingFirst>
      <div className="grid grid-cols-2 w-full mt-16 pr-24 gap-y-7">
        <span className=" text-xl inline-block font-extrabold text-main uppercase">
          SDN SAGA V
        </span>
        <span className=" text-xl inline-block text-right text-main ">
          2006 - 2012
        </span>
        <span className=" text-xl inline-block font-extrabold text-main uppercase">
          MTS MIFTAHUL HUDA
        </span>
        <span className=" text-xl inline-block text-right text-main ">
          2012 - 2015
        </span>
        <span className=" text-xl inline-block font-extrabold text-main uppercase">
          MA MIFTAHUL HUDA
        </span>
        <span className=" text-xl inline-block text-right text-main ">
          2015 - 2018
        </span>
        <span className=" text-xl inline-block font-extrabold text-main uppercase">
          UNIVERSITAS KOMPUTER INDONESIA
        </span>
        <span className=" text-xl inline-block text-right text-main ">
          2018 - NOW
        </span>
      </div>
    </Layout>
  );
};

export default ProfilePage;
