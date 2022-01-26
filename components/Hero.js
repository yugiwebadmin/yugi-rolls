import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import FadeUp from "../animations/FadeUp";

export default function Hero() {
  return (
    <>
      <div className="relative h-screen mb-8 tracking-wide shadow-xl shadow-neutral-400 font-body">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-screen"
            src="/hero.jpg"
            alt="delicious burger"
          />
          <div
            className="absolute inset-0 bg-gray-400 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <FadeUp>
            <h1 className="pt-2 text-5xl font-extrabold text-white md:text-6xl lg:text-7xl ">
              Craft Burger Perfection.
            </h1>
            <p className="max-w-3xl mt-6 text-2xl font-semibold text-neutral-100 md:text-3xl lg:text-4xl">
              Proudly Serving Your City Since 2010.
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
