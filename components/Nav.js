import Head from "next/head";
import Link from "next/link";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Twirl as Hamburger } from "hamburger-react";

const links = [
  { name: "MENU", to: "/menu", id: 1 },
  { name: "ABOUT", to: "#About", id: 2 },
  { name: "GALLERY", to: "#Gallery", id: 3 },
  { name: "CONTACT US", to: "#Contact", id: 4 },
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
      staggerChildren: 0.25,
      staggerDirection: 1,
    },
  },
};

export default function Nav() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <nav className="flex justify-between w-full text-gray-100 bg-black font-body">
      <div className="inline-flex px-4 py-6 text-2xl font-medium font-body lg:text-3xl 2xl:text-3xl md:pl-12 lg:pl-16 ">
        Example Burger
      </div>

      {/* The Side Bar Menu for screens smaller than 'Medium' */}
      <AnimatePresence>
        {open && (
          <motion.aside
            className="fixed z-50 w-screen mt-20 bg-black bg-center bg-no-repeat bg-cover md:hidden "
            style={{ backgroundImage: "url(/transparent-burger4.png)" }}
            initial={{ height: 0 }}
            animate={{
              height: "100vh",
              transition: { duration: 0.5 },
            }}
            exit={{
              height: 0,
              transition: { delay: 0.2, duration: 0.15 },
            }}
          >
            <motion.div
              className="flex flex-col p-8 pt-24 text-2xl md:text-4xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  className="flex pl-2 my-6 text-gray-100 transition duration-100 ease-in-out transform hover:text-yellow-400 hover:scale-105"
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
          <span className="sr-only">Open main menu</span>
          <Hamburger toggled={open} toggle={cycleOpen} />
        </button>
      </div>

      {/* The Navbar on medium screens */}
      <div className="hidden pr-6 md:inline-flex ">
        {links.map(({ name, to, id }) => (
          <a
            key={id}
            href={to}
            className="px-5 py-6 text-lg text-gray-100 transition duration-100 ease-in-out transform 2xl:text-xl font-logo hover:text-yellow-400 hover:scale-105"
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
}
