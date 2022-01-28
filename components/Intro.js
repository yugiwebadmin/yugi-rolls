import Link from "next/link";

export default function Intro() {
  return (
    <div className="bg-white font-display">
      <div className="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-700 md:text-4xl lg:text-5xl ">
          <span className="block pb-4">
            We make Eggrolls with no Meat, no Egg and no Dairy.
          </span>
          <span className="block pb-4">We call them Yugirolls.</span>
          <span className="block text-xl font-medium md:text-2xl lg:text-3xl">
            We also make other vegan eats.
          </span>
        </h2>
        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center justify-center w-32 py-3 text-base font-medium text-white bg-orange-600 border-2 border-orange-600 shadow cursor-pointer lg:w-44 hover:bg-orange-600">
            <Link href={"/about"} passHref>
              Learn More
            </Link>
          </div>
          <div className="inline-flex ml-3">
            <a
              href="#"
              className="inline-flex items-center justify-center w-32 px-5 py-3 text-base font-medium text-orange-600 bg-transparent border-2 border-orange-600 lg:w-44 hover:bg-neutral-200"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
