import Link from "next/link";
import { CameraIcon } from "@heroicons/react/solid";
import Meta from "../components/Meta";
import Nav from "../components/Nav";

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
                      className="object-cover object-center shadow-lg shadow-neutral-700/80"
                      src="/hero2bigger.jpg"
                      alt="Whitney leaning against a railing on a downtown street"
                      width={1184}
                      height={1376}
                    />
                  </div>
                  <figcaption className="flex mt-3 text-sm text-neutral-500">
                    <CameraIcon
                      className="flex-none w-5 h-5 text-neutral-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">
                      Photograph by VanTranPhotography
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="mx-auto text-base max-w-prose lg:max-w-none">
                <p className="text-lg text-neutral-900">
                  My parents owned a Chinese take-out restaurant for many years.
                  Before that - a Chinese buffet restaurant. They have since
                  retired and only recently have I convinced them to help me
                  develop the eggless and meatless eggroll. I wanted something
                  that tasted just like the eggrolls they used to make, only
                  100% vegan.
                </p>
              </div>
              <div className="mx-auto mt-5 prose text-neutral-900 prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  After many prototypes, this eggroll was born, and we named it{" "}
                  <span className="text-orange-600">Yugiroll</span> to
                  differentiate it from the traditional eggroll. As we were
                  initially selling them from our home, YUGI rolls stood for
                  "Your Underground Impossible" rolls.
                </p>
                <em>
                  Side Note: When I was in high school, my fake WWF-type
                  wrestling name was also "Yugi Eggroll". Looking back, I'm not
                  quite sure why I decided on such an internalized racial name?
                </em>
                <p>
                  Since the Yugiroll, my parents remade some plant-based
                  versions of their other restaurant favorites as well. As a
                  result, this business now exists - we will continually try to
                  recreate the food I loved before I went vegan, and to{" "}
                  <em>
                    {" "}
                    set a higher standard for vegan asian food in Ottawa.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
