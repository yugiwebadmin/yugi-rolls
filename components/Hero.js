import { ChevronDownIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import FadeUp from "../animations/FadeUp";
import Nav from "./Nav.js";

export default function Hero() {
  return (
    <>
      <div className="relative top-0 h-screen mb-8 tracking-wide shadow-xl shadow-neutral-400 font-body">
        <div className="absolute inset-0">
          <Nav />
          <img
            className="object-cover w-full h-screen"
            src="/hero2bigger.jpg"
            alt="delicious burger"
          />
          <div
            className="absolute inset-0 bg-gray-400 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative px-4 pt-32 mx-auto text-center font-display max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <FadeUp>
            <h1 className="pt-2 text-5xl font-bold text-white md:text-6xl lg:text-7xl ">
              Yugi Rolls
            </h1>
            <p className="mt-6 text-2xl font-semibold text-center text-neutral-100 md:text-3xl lg:text-4xl">
              Vegan Eggrolls And More.
            </p>
            <Link href="/menu">
              <button className="px-8 py-2 mt-10 text-xl font-semibold border-2 text-neutral-100 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black">
                VIEW MENU
              </button>
            </Link>
          </FadeUp>
        </div>
      </div>
    </>
  );
}
