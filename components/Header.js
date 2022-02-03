import FadeUp from "../animations/FadeUp";
import DelayedFadeIn from "../animations/DelayedFadeIn";
import Nav from "./Nav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <section
      id="Home"
      className="flex flex-col w-full h-screen px-4 pt-20 bg-center bg-cover bg-hero text-neutral-100 font-display md:px-10 lg:px-20 xl:px-28 "
    >
      <main className="flex flex-col justify-center h-screen font-medium tracking-tight text-center pb-28 md:tracking-normal md:pb-16">
        <motion.h1
          className="flex flex-col text-xl text-white md:text-2xl lg:text-3xl 2xl:text-4xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
              y: 15,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,

              transition: {
                delay: 0.5,
                duration: 0.3,
                type: "tween",
              },
            },
          }}
        >
          <div className="self-center p-8 border shadow-lg bg-neutral-500/50 w-max backdrop-blur-sm shadow-neutral-700/70">
            Next Popup:
            <br />
            -Monday Feb 14-
          </div>
        </motion.h1>

        <motion.div
          className="flex justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,

              transition: {
                delay: 1.2,
                duration: 0.3,
                type: "tween",
              },
            },
          }}
        >
          <Link href={"https://linktr.ee/yugirolls"} passHref>
            <button className="absolute p-3 -mt-5 text-base font-normal tracking-wide text-white bg-orange-600 border-2 border-orange-600 shadow-lg cursor-pointer w-36 hover:text-orange-600 shadow-neutral-700/70 lg:w-44 lg:text-xl hover:bg-neutral-100 hover:shadow-inner">
              ORDER
            </button>
          </Link>
        </motion.div>
      </main>
    </section>
  );
}
