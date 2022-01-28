import Link from "next/link";
import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Menu() {
  return (
    <>
      <Meta />
      <Nav />
      <section
        className="px-12 py-28 md:py-32 lg:py-36 md:px-28 lg:px-56 2xl:px-96 text-neutral-800 font-body"
        id="menu"
      >
        <div className="pb-6 mx-6 border-b-2 border-neutral-500">
          <h1 className="text-2xl font-medium text-center md:text-3xl lg:text-4xl font-display">
            OUR MENU
          </h1>
        </div>
        <div className="flex flex-col justify-center pt-4 md:text-lg lg:text-xl">
          <div className="p-6">
            <h3 className="font-semibold">YUGI Rolls: $30/dozen </h3>
            <p>
              Hand-made from scratch. Vegan (no egg, dairy, or animal products).
              Deep-fried in vegetable oil - So it can be greasy as meat
              eggrolls. Contains gluten.
            </p>
          </div>
          <div className="p-6">
            <h3 className="font-semibold">Won Ton Soup: $10/bowl </h3>
            <p>
              Each one hand wrapped. No egg, No dairy, No Animal products -
              Vegan. 4 pieces to a bowl. Sorry, this is not gluten-free. Don't
              drink this in the car as you do with the Yugi rolls cause it is
              blazing hot.
            </p>
          </div>
          <div className="p-6">
            <h3 className="font-semibold">Almond cookies: $10/box </h3>
            <p>Also vegan.</p>
          </div>
          <div className="p-6">
            <h3 className="font-semibold">Vegan Potstickers: $20/bag</h3>
            <p>Sold frozen not cooked. Comes with sauce.</p>
          </div>
          <div className="p-6">
            <h3 className="font-semibold">Vegan Mooncake. $12/2 cakes</h3>
            <p>
              Traditionally mooncake is only available in the autumn and
              sometimes at new year. Seasonal Item.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
