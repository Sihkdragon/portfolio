import Image from "next/image";
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import portfolioLists from "../database/portfolioLists";
import comproimg from "../public/img/compro.png";
import quiteclose from "../public/img/quiteclose.png";
import home from "../public/img/home.png";
const PortfolioPage = () => {
  const [choose, setChoose] = useState("");
  return (
    <Layout PageTitle="Porfolio" PageHead="Portfolio" currentPage="portfolio">
      <div className="mt-12 w-72 h-8 mb-4  rounded-md grid grid-cols-3 overflow-hidden">
        <label
          htmlFor="all"
          className="flex justify-center items-center ml-0  w-full h-full bg-main text-white cursor-pointer hover:bg-main/90"
        >
          All
        </label>
        <label
          htmlFor="web"
          className="flex justify-center items-center text-light border-y border-y-light hover:bg-main/80 hover:border-none hover:text-white cursor-pointer"
        >
          Web
        </label>
        <label
          htmlFor="mobile"
          className="flex justify-center items-center text-light border rounded-r-md border-light hover:bg-main/80 hover:border-none hover:text-white cursor-pointer"
        >
          Mobile
        </label>
        <input
          type="radio"
          name="select-group"
          id="all"
          className="hidden"
          onChange={() => {
            setChoose("all");
          }}
        />
        <input
          type="radio"
          name="select-group"
          id="web"
          className="hidden"
          onChange={() => {
            setChoose("wb");
          }}
        />
        <input
          type="radio"
          name="select-group"
          id="mobile"
          className="hidden"
          onChange={() => {
            setChoose("mobile");
          }}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3">
        <a
          href="https://sihkdragon.github.io/ProBuildy-CompanyProfile/"
          className="image-wrapper bg-dark  overflow-hidden relative group"
          target="_blank"
        >
          <Image
            src={comproimg}
            height={400}
            width={400}
            objectFit="cover"
            className="duration-500  group-hover:scale-125 group-hover:rotate-6  group-hover:opacity-75"
            alt={portfolioLists[0].name}
          />
          <h1 className="text-white text-xs absolute bottom-6 left-3 duration-500 opacity-0 group-hover:opacity-100">
            {portfolioLists[0].name}
          </h1>
        </a>

        <a
          className="image-wrapper bg-dark  overflow-hidden relative group"
          href="https://quiteclosergame.vercel.app/"
          target="_blank"
        >
          <Image
            src={quiteclose}
            height={400}
            width={400}
            objectFit="cover"
            className="duration-500  group-hover:scale-125 group-hover:rotate-6  group-hover:opacity-75"
            quality={100}
            alt={portfolioLists[2].name}
          />
          <h1 className="text-white text-xs absolute bottom-6 left-3 duration-500 opacity-0 group-hover:opacity-100">
            {portfolioLists[2].name}
          </h1>
        </a>
        <a
          className="image-wrapper bg-dark overflow-hidden relative group"
          href="https://halaman-utama.vercel.app/"
          target="_blank"
        >
          <Image
            src={home}
            height={400}
            width={400}
            objectFit="cover"
            className="duration-500   group-hover:scale-125 group-hover:rotate-6  group-hover:opacity-75"
            alt={portfolioLists[1].name}
          />
          <h1 className="text-white text-xs absolute bottom-6 left-3 duration-500 opacity-0 group-hover:opacity-100">
            {portfolioLists[1].name}
          </h1>
        </a>
      </div>
    </Layout>
  );
};

export default PortfolioPage;
