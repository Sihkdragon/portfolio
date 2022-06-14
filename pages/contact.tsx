import React from "react";
import Layout from "../components/layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import HeadingSecond from "../components/atoms/HeadingSecond";
import Button from "../components/atoms/Button";
const ContactPage = () => {
  return (
    <Layout
      PageHead="Contact"
      currentPage="contact"
      PageTitle="Contact"
      lastPage={true}
    >
      <div className="grid grid-cols-2 w-full mt-12 pr-24 gap-y-4">
        <div className=" text-xl flex items-center font-extrabold text-main">
          <FontAwesomeIcon icon={faInstagram} className="w-6 mr-2" />
          <span> Instagram</span>
        </div>
        <Link href={"https://instagram.com/ditotisi"}>
          <a className=" text-xl inline-block text-right text-main underline hover:text-opacity-60">
            instagram.com/ditotisi
          </a>
        </Link>
        <div className=" text-xl flex items-center font-extrabold text-main">
          <MailIcon className="w-6 mr-2" />
          <span> Email</span>
        </div>
        <span className=" text-xl inline-block text-right text-main">
          ditolord@gmail.com
        </span>
        <div className=" text-xl flex items-center font-extrabold text-main">
          <PhoneIcon className="w-6 mr-2" />
          <span> Phone</span>
        </div>
        <span className=" text-xl inline-block text-right text-main">
          0821-1741-6500
        </span>
      </div>
      <HeadingSecond
        color="main"
        classname="mt-14 flex items-center"
        weight="semibold"
      >
        <FontAwesomeIcon icon={faPencilAlt} className="w-6 mr-2" />
        Write Message to Me
      </HeadingSecond>
      <section className="flex flex-col mt-12 gap-4 pr-24 text-main">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="border-main rounded px-2 py-2 text-dark border-2 md:w-64"
          placeholder="Example@mail.com"
        />
        <label htmlFor="message">Message</label>
        <textarea
          name=""
          id="message"
          cols={30}
          rows={10}
          className="border-main rounded px-2 py-1 text-dark border-2 h-36 focus:outline-none"
          placeholder="Type Message Here..."
        ></textarea>
        <div className="flex items-center gap-2">
          <Button type="submit" size="default">
            Submit
          </Button>
          <Button type="reset" size="default" color="light">
            Reset
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
