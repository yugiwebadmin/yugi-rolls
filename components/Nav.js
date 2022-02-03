import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Github, Devdotto, Twitter } from "@icons-pack/react-simple-icons";
import { MailIcon } from "@heroicons/react/outline";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "About", to: "/about", id: 2 },
  { name: "Menu", to: "/menu", id: 3 },
  { name: "Contact", to: "/#Contact", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

// const sideVariants = {
//   closed: {
//     transition: {
//       staggerChildren: 0,
//       staggerDirection: -1,
//     },
//   },
//   open: {
//     transition: {
//       staggerChildren: 0.3,
//       staggerDirection: 1,
//     },
//   },
// };

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
      className={` w-full flex  justify-between bg-white/30  font-display backdrop-blur-sm   fixed z-50 transition ease-in-out duration-500 ${
        animateNav && "shadow-xl "
      }`}
    >
      <div
        className={`flex w-screen py-2 bg-transparent    ${
          animateNav &&
          "py-0   backdrop-blur-sm bg-white/30 trasition ease-in-out duration-500"
        } mx-auto   justify-between `}
      >
        <Link href="/">
          <a className="inline-flex my-2 ml-2 text-2xl cursor-pointer md:text-3xl md:ml-8 lg:ml-16 ">
            <Image src="/yugimonkey.png" alt="logo" height={73} width={100} />
          </a>
        </Link>
        <Link href="/">
          <a className="h-full px-4 pt-5 cursor-pointer md:mr-12 lg:mr-20">
            <Image src="/yugitext.png" alt="logo" height={50} width={300} />
          </a>
        </Link>
        {/* The Side Bar Menu */}
        <AnimatePresence>
          {open && (
            <motion.aside
              className="fixed top-0 right-0 h-screen bg-neutral-800/90 overflow"
              initial={{ width: 0 }}
              transition={{ type: "tween" }}
              animate={{
                width: "320px",
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
                // variants={sideVariants}
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
                    className="flex pl-8 mt-10 text-white transition duration-100 ease-in-out transform w-max hover:scale-105 hover:text-orange-600 "
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
        <div className="flex justify-end md:mr-4">
          <button className="px-2 text-orange-600 cursor-pointer ">
            <span className="sr-only ">Open main menu</span>
            <Hamburger toggled={open} toggle={cycleOpen} />
          </button>
        </div>

        {/* The Navbar on medium screens */}
        {/* <div className="hidden pr-8 md:inline-flex ">
          {links.map(({ name, to, id }) => (
            <a
              key={id}
              href={to}
              className="mx-8 my-6 text-lg font-normal transition duration-100 ease-in-out transform hover:scale-105 hover:text-orange-600 lg:mx-12 9 md:text-xl "
            >
              {name}
            </a>
          ))}
        </div> */}
      </div>
    </nav>
  );
}
