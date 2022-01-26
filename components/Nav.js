import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Github, Devdotto, Twitter } from "@icons-pack/react-simple-icons";
import { MailIcon } from "@heroicons/react/outline";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

const links = [
  { name: "About", to: "#About", id: 1 },
  { name: "Menu", to: "#Menu", id: 2 },
  { name: "Order", to: "#Order", id: 3 },
  { name: "Contact", to: "#Contact", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

export default function Nav() {
  const [open, cycleOpen] = useCycle(false, true);
  const [animateNav, setAnimateNav] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateNav(true);
      } else setAnimateNav(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav
      className={`text-white w-full flex backdrop-blur-sm justify-between  font-display  fixed z-50 trasition ease-in-out duration-500 ${
        animateNav && "shadow-xl "
      }`}
    >
      <div
        className={`flex w-screen py-4 bg-transparent   ${
          animateNav &&
          "py-0  backdrop-blur-sm bg-neutral-800/20 trasition ease-in-out duration-500"
        } mx-auto   justify-between `}
      >
        <Link href="/">
          <a className="inline-flex mx-4 my-4 text-2xl tracking-widest transition duration-100 ease-in-out transform cursor-pointer md:text-3xl md:ml-8 lg:ml-16 ">
            <Image
              src="/yugiroll-small.png"
              alt="logo"
              height={73}
              width={100}
            />
          </a>
        </Link>

        {/* The Side Bar Menu for screens smaller than 'Medium' */}
        <AnimatePresence>
          {open && (
            <motion.aside
              className="fixed top-0 right-0 h-screen bg-neutral-800/90 md:hidden overflow"
              initial={{ width: 0 }}
              transition={{ type: "tween" }}
              animate={{
                width: "95%",
              }}
              exit={{
                width: 0,
                transition: { delay: 0.3, duration: 0.15 },
              }}
            >
              <motion.div
                className="flex flex-col p-8 ml-4 text-2xl "
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                <div className="pt-12 pb-10">
                  <Image
                    src="/yugiroll-small.png"
                    alt="logo"
                    height={110}
                    width={150}
                  />
                </div>

                {links.map(({ name, to, id }) => (
                  <motion.a
                    key={id}
                    href={to}
                    className="flex pl-8 mt-10 text-orange-600 transition duration-100 ease-in-out transform w-max hover:scale-105 hover:underline"
                    variants={itemVariants}
                    aria-current={links.current ? "page" : undefined}
                    onClick={cycleOpen}
                  >
                    {name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* The Hamburger Menu and Close Icons */}
        <div className="flex justify-end md:hidden ">
          <button className="px-2 m-2 cursor-pointer">
            <span className="sr-only ">Open main menu</span>
            <Hamburger toggled={open} toggle={cycleOpen} />
          </button>
        </div>

        {/* The Navbar on medium screens */}
        <div className="hidden pr-8 md:inline-flex ">
          {links.map(({ name, to, id }) => (
            <a
              key={id}
              href={to}
              className="mx-8 my-6 text-lg font-normal transition duration-100 ease-in-out transform hover:scale-105 hover:underline lg:mx-12 9 md:text-xl "
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
