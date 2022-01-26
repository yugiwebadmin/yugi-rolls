import Image from "next/image";
import Link from "next/link";
import FadeLeft from "../animations/FadeLeft.js";

export default function About() {
  return (
    <section
      id="About"
      className="relative flex flex-col justify-center w-full px-8 py-16 mb-6 h-96 font-body"
    >
      <div className="absolute z-10 w-2/3 pt-20 md:text-lg lg:pl-20 2xl:pl-32 ">
        <FadeLeft>
          <h3 className="mr-6 text-xl font-bold lg:text-3xl">Your Headline</h3>
          <p className="pt-4 text-lg font-medium lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </FadeLeft>
      </div>
      <div className="absolute font-extrabold text-right drop-shadow opacity-70 text-7xl md:text-9xl text-neutral-300 right-8 md:right-20 lg:right-32 2xl:right-40">
        OUR <br /> STORY
      </div>
    </section>
  );
}
