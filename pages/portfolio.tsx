import React from "react";
import Layout from "../components/layout/Layout";

const PortfolioPage = () => {
  return (
    <Layout PageTitle="Porfolio" PageHead="Portfolio" currentPage="portfolio">
      <div className="mt-12 w-72 h-8   rounded-md grid grid-cols-3 overflow-hidden">
        <label
          htmlFor="all"
          className="flex justify-center items-center ml-0  w-full h-full bg-main text-white"
        >
          All
        </label>
        <label
          htmlFor="web"
          className="flex justify-center items-center text-light border-y border-y-light bg-cyan-900 hover:border-none hover:text-white"
        >
          Web
        </label>
        <label
          htmlFor="mobile"
          className="flex justify-center items-center text-light border rounded-r-md border-light"
        >
          Mobile
        </label>
        <input type="radio" name="select-group" id="all" className="hidden" />
        <input type="radio" name="select-group" id="web" className="hidden" />
        <input
          type="radio"
          name="select-group"
          id="mobile"
          className="hidden"
        />
      </div>
      PortfolioPage
    </Layout>
  );
};

export default PortfolioPage;
