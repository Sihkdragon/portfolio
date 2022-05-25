import Head from "next/head";
import Link from "next/link";
import React from "react";
import HeadingFirst from "../../components/atoms/HeadingFirst";
import HeadingSecond from "../../components/atoms/HeadingSecond";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <main className="w-full h-[100vh] bg-cyan-900 py-8">
        <section className="container h-full bg-white flex flex-col gap-20  py-52  items-center relative">
          <h1 className="text-6xl text-main font-extrabold">Oopsss...</h1>
          <div
            className=" text-center flex flex-col gap-4
          "
          >
            <HeadingFirst color="main">404</HeadingFirst>
            <HeadingSecond color="main"> PAGE NOT FOUND</HeadingSecond>
          </div>
          <Link href={"/"}>
            <a className="text-light hover:underline absolute bottom-36">
              Go to Home Page
            </a>
          </Link>
        </section>
      </main>
    </>
  );
};

export default ErrorPage;
