import FadeUp from "../animations/FadeUp.js";

export default function Testimonials() {
  return (
    <div className="pt-16 bg-white lg:py-24 font-body">
      <div className="pb-16 mb-16 shadow-xl bg-neutral-800 lg:pb-0 lg:z-10 lg:relative shadow-neutral-400">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 bg-white h-1/2 lg:hidden"
            />
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="overflow-hidden shadow-xl shadow-neutral-800 aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="/aboutburger2000.jpg"
                  alt="picture of burger"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <blockquote>
                <div>
                  <svg
                    className="w-12 h-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <FadeUp>
                    <p className="mt-6 text-2xl font-medium text-white ">
                      ...These burgers are so unbelievably good, every
                      ingredient incredibly fresh. I'll never eat a burger
                      anywhere else. My standards are now too high.
                    </p>
                  </FadeUp>
                </div>
                <footer className="mt-6">
                  <FadeUp>
                    <p className="text-base font-medium text-white">
                      Joe Foody
                    </p>
                    <p className="text-base font-medium text-gray-100">
                      The Daily Planet
                    </p>
                  </FadeUp>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
