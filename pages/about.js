import Link from "next/link";
import { CameraIcon } from "@heroicons/react/solid";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import FadeUp from "../animations/FadeUp";

export default function About() {
  return (
    <>
      <Meta />
      <Nav />

      <div className="overflow-hidden bg-white font-display" id="about">
        <div className="relative px-4 py-32 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 hidden w-screen lg:block bg-neutral-50 left-3/4" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-neutral-900 font-display sm:text-4xl">
                About Us
              </h2>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2 ">
              <svg
                className="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block "
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-orange-600"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="object-cover object-center shadow-lg shadow-neutral-700/50"
                      src="/hero2bigger.jpg"
                      alt="Whitney leaning against a railing on a downtown street"
                      width={1184}
                      height={1376}
                    />
                  </div>
                </figure>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <FadeUp>
                <div className="mx-auto text-base max-w-prose lg:max-w-none">
                  <p className="text-lg text-neutral-900">
                    My parent&apos;s owned a Chinese take-out restaurant for
                    many years and before that a Chinese buffet restaurant. They
                    have since retired and only recently have I convinced them
                    to help me develop the eggless and meatless eggroll. I
                    wanted something to taste just like the eggroll they used to
                    make but without egg and meat. After many prototypes, this
                    eggroll was born, and we named it Yugiroll to differentiate
                    it from the eggroll. As we were selling them at first from
                    our home, YUGI rolls stood for “Your Underground Impossible”
                    Rolls. Also, my fake WWF-type wrestling name in high school
                    was also “Yugi Eggroll”. Thinking back, I am not sure why I
                    decided on such an internalized racial name?
                  </p>
                </div>
              </FadeUp>
              <FadeUp>
                <div className="pt-6 mx-auto text-base max-w-prose lg:max-w-none">
                  <p className="text-lg text-neutral-900">
                    Since the Yugiroll, my parents remade some of their other
                    restaurant favourites plant-based as well. As a result, this
                    business now exists and we will continually try to recreate
                    the food I used to love before I went vegan and to better
                    some of the vegan offerings I see now available in Ottawa.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
