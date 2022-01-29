import Link from "next/link";
import DelayedFadeIn from "../animations/DelayedFadeIn";
import FadeUp from "../animations/FadeUp";
import FadeLeft from "../animations/FadeLeft";

export default function Intro() {
  return (
    <div className="bg-white font-display">
      <div className="px-4 pt-16 pb-6 mx-auto text-center max-w-7xl sm:px-6 lg:pt-24 lg:px-8">
        <div className="text-3xl font-semibold tracking-tight text-neutral-600 md:text-4xl lg:text-5xl ">
          <FadeUp>
            <span className="block pb-4">
              We make Eggrolls with no Meat, no Egg and no Dairy.
            </span>
          </FadeUp>
          <DelayedFadeIn>
            <span className="block pb-4">We call them Yugirolls.</span>
          </DelayedFadeIn>
        </div>
        <FadeLeft>
          <span className="block pt-4 text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl text-neutral-600">
            We also make other vegan eats.
          </span>

          <div className="flex justify-center mt-8">
            <div className="inline-flex justify-center px-5 py-3 text-base text-orange-600 bg-transparent border-2 border-orange-600 shadow-md shadow-neutral-500/40 w-36 lg:text-lg lg:w-44 hover:bg-orange-600 hover:border-orange-600 hover:text-white">
              <Link href={"/about"} passHref>
                LEARN MORE
              </Link>
            </div>
          </div>
        </FadeLeft>
      </div>
    </div>
  );
}
