import type { NextPage } from "next";
import Button from "../components/atoms/Button";
import HeadingFirst from "../components/atoms/HeadingFirst";
import HeadingSecond from "../components/atoms/HeadingSecond";

import Layout from "../components/layout/Layout";
const Home: NextPage = () => {
  return (
    <Layout PageTitle="Home" PageHead="Welcome" firstPage={true} currentPage="home">
      <div className="flex flex-col gap-y-10 justify-center items-center w-full h-full">
        <div className="text-center">
          <HeadingSecond color="light" classname="mb-4">
            Hello I&apos;m
          </HeadingSecond>
          <HeadingFirst color="main">Ditotisi Rasyid Sumpena</HeadingFirst>
        </div>
        <HeadingSecond color="main" weight="semibold" classname="text-center">
          Junior Software Developer
        </HeadingSecond>
        <Button
          onClick={() => {
            window.open(`${window.location.href}doc/CV.pdf`);
          }}
        >
          CLICK FOR CV
        </Button>
      </div>
    </Layout>
  );
};

export default Home;
