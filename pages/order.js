import FadeUp from "../animations/FadeUp";
import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Order() {
  return (
    <>
      <Meta />
      <Nav />
      <section
        className="flex flex-col justify-center px-6 text-lg md:px-20 lg:px-64 py-28 lg:py-32 font-body md:text-xl lg:text-2xl"
        id="order"
      >
        <h1 className="py-4 font-medium text-center">
          HOW TO pre-ORDER for February 14th event between 4-7pm:
        </h1>
        <p className="py-4">
          *** Paying with Cash:
          <br /> 1. Send me your order in an email to: info@yugirolls.com
          <br /> 2. Make sure to indicate time for pickup between (4 and 7 pm)
          "Example: 1 x yugirolls, 1 x HS soup, 5:15 pickup"
        </p>
        <p className="py-4">
          *** Paying with E-transfer: <br />
          1. Tell me what you want in your e-transfer comment/message <br />
          2. Use: info@yugirolls.com - use password “yugirolls”. <br />
          3. Make sure to indicate time for pickup between (4 and 7 pm)
          "Example: 1 x yugirolls, 1 x HS soup, 6:15 pickup”
        </p>
        <p className="py-4">
          WHERE TO PICK UP: <br />
          Little Jo Berry&apos;s (1305 WELLINGTON ST. W, Ottawa) • Show up at
          your pickup time you indicated, go inside the front door, and we will
          hand you your order by name
        </p>
        <ul className="py-4">
          <h2 className="pb-4 font-medium underline ">MENU (Limited):</h2>
          <li className="pb-2"> #1 Yugi Rolls - $30/dozen</li>
          <li className="pb-2">
            #2  Yugi Spring Rolls - $30/dozen
          </li>
          <li className="pb-2">#3 Vegan Wonton Soup - $10/bowl</li>
          <li className="pb-2">
            {" "}
            #4 Vegan Almond cookies - $10/dozen
          </li>
          <li className="pb-2">#5 Vegan Potsticker - $20 for 20 (FROZEN UNCOOKED)</li>
          <li className="pb-2"> #6 Mad Paw Tofu - $20</li>
          <li className="pb-2"> #7 S/S Vegan Fried WonTons - $20 for 15 </li>
        </ul>
      </section>
    </>
  );
}
