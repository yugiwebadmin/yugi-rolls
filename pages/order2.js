import FadeUp from "../animations/FadeUp";
import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Order2() {
  return (
    <>
      <Meta />
      <Nav />
      <section
        className="flex flex-col justify-center px-6 text-lg md:px-20 lg:px-64 py-28 lg:py-32 font-body md:text-xl lg:text-2xl"
        id="order2"
      >
        <h1 className="py-4 text-3xl font-bold text-center">Coming Soon</h1>
        <p className="py-4 font-medium text-center">
          Please check back soon for more information.
        </p>
      </section>
    </>
  );
}
