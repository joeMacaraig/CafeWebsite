import { HashLink } from "react-router-hash-link";
import { animateScroll as scrolls } from "react-scroll";

export const Footer = () => {
  const onScroll = () => {
    scrolls.scrollTo(0, {
      duration: 500,
      smooth: true,
    });
  };
  return (
    <div className="max-w-full h-full flex flex-col items-center mx-auto bg-gray-800 overflow-hidden md: min-w-2xl md:max-w-full text-slate-400">
      <div className="flex m-10 h-full text-lg">
        <div className="w-1/2 space-y-5">
          <div className="flex items-center flex-shrink-0 text-white">
            <span className="font-bold text-coffee text-2xl tracking-tight">
              JoezCoffee
            </span>
          </div>
          <div className="">
            <p>
              JoezCoffee is a cafe that serves a variety of coffee and other
              dishes while having an aesthetic and comfortable environment to
              chat and work in.
            </p>
          </div>
          <div>
            <p>1234 Colorado Blvd.</p>
            <p>Los Angeles CA, 90041</p>
            <p>joezcoffee@example.com</p>
          </div>
        </div>
        <div className="flex w-1/2 justify-center">
          <div className="text-md m-2 space-y-4">
            <p className="text-slate-100">Products</p>
            <ul className="space-y-3">
              <li className="">Beverages</li>
              <li className="">Coffee Beans</li>
              <li className="">Food</li>
            </ul>
          </div>
          <div className="text-md m-2 space-y-4">
            <p className="text-slate-100 ">Support</p>
            <div className="flex flex-col space-y-4">
              <HashLink
                to="/about-us#mission"
                scroll={(e) =>
                  e.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                onClick={onScroll}
              >
                <p>Our Mission</p>
              </HashLink>
              <HashLink
                to="/about-us#contact"
                scroll={(e) =>
                  e.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                onClick={onScroll}
              >
                <p>Contact Us</p>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5">© 2023 JoezCoffee. All right reserved.</div>
    </div>
  );
};
