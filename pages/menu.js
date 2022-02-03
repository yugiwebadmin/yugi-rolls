import Link from "next/link";
import Image from "next/image";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import FadeUp from "../animations/FadeUp";

export default function Menu() {
  return (
    <>
      <Meta />
      <Nav />
      <section
        className="px-6 py-28 md:py-32 lg:py-36 md:px-28 lg:px-52 2xl:px-72 text-neutral-800 font-body"
        id="menu"
      >
        <div className="pb-6 mx-6 border-b-2 border-neutral-500">
          <h1 className="text-2xl font-medium text-center md:text-3xl lg:text-4xl font-display">
            OUR MENU
          </h1>
        </div>
        <div className="flex flex-col justify-center pt-4 md:text-lg lg:text-xl">
          <FadeUp>
            <div className="flex flex-col mb-6 md:pb-12 md:flex-row ">
              <div className="flex-col p-6 md:p-12 md:w-2/3">
                <h3 className="font-semibold">YUGI Rolls: $30/dozen </h3>
                <p>
                  Hand-made from scratch. Vegan (no egg, dairy, or animal
                  products). Deep-fried in vegetable oil - So it can be greasy
                  as meat eggrolls. Contains gluten.
                </p>
              </div>
              <div className="px-6 m-auto md:py-4">
                <Image
                  src="/eggrolls2.jpg"
                  alt="picture of eggroles"
                  height={250}
                  width={250}
                  layout=""
                />
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-col mb-6 md:pb-12 md:flex-row ">
              <div className="flex-col p-6 md:p-12 md:w-2/3">
                <h3 className="font-semibold">Won Ton Soup: $10/bowl </h3>
                <p>
                  Each one hand wrapped. No egg, No dairy, No Animal products -
                  Vegan. 4 pieces to a bowl. Sorry, this is not gluten-free.
                  Don't drink this in the car as you do with the Yugi rolls
                  cause it is blazing hot.
                </p>
              </div>
              <div className="px-6 m-auto md:py-4">
                <Image
                  src="/soup500.jpg"
                  alt="picture of eggroles"
                  height={250}
                  width={250}
                  layout=""
                />
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-col mb-6 md:pb-12 md:flex-row ">
              <div className="flex-col p-6 md:p-12 md:w-2/3">
                <h3 className="font-semibold">Almond cookies: $10/box </h3>
                <p>Also vegan.</p>
              </div>
              <div className="px-6 m-auto md:py-4">
                <Image
                  src="/cookies500.jpg"
                  alt="picture of eggroles"
                  height={250}
                  width={250}
                  layout=""
                />
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-col mb-6 md:pb-12 md:flex-row ">
              <div className="flex-col p-6 md:p-12 md:w-2/3">
                <h3 className="font-semibold">Vegan Potstickers: $20/bag</h3>
                <p>Sold frozen not cooked. Comes with sauce.</p>
              </div>
              <div className="px-6 m-auto md:py-4">
                <Image
                  src="/stickers500.jpg"
                  alt="picture of eggroles"
                  height={250}
                  width={250}
                  layout=""
                />
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-col mb-6 md:pb-12 md:flex-row">
              <div className="flex-col p-6 md:p-12 md:w-2/3">
                <h3 className="font-semibold">Vegan Mooncake. $12/2 cakes</h3>
                <p>
                  Traditionally mooncake is only available in the autumn and
                  sometimes at new year. Seasonal Item.
                </p>
              </div>
              <div className="px-6 m-auto md:py-4">
                <Image
                  src="/mooncake500.jpg"
                  alt="picture of eggroles"
                  height={250}
                  width={250}
                  layout=""
                />
              </div>
            </div>
          </FadeUp>

          <div className="flex justify-center mt-8">
            <Link href={"https://linktr.ee/yugirolls"} passHref>
              <button className="absolute p-3 -mt-5 text-base font-normal tracking-wide text-white bg-orange-600 border-2 border-orange-600 shadow-lg cursor-pointer w-36 hover:text-orange-600 shadow-neutral-500/50 lg:w-44 lg:text-xl hover:bg-transparent hover:shadow-inner font-display">
                ORDER
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
