import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {animateScroll as scrolls} from 'react-scroll';

export const Nav = () => {
  const onScroll = () => {
    scrolls.scrollTo(0, {
      duration: 500, 
      smooth: true
    });
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-100 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-coffee text-xl tracking-tight">
          JoezCoffee
        </span>
      </div>
      <div
        className="w-full sm:block flex-grow lg:flex lg:items-center lg:w-auto"
        id="navbar"
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            as={NavLink}
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 mr-4"
          >
            Home
          </a>
          <a
            href="/menu"
            as={NavLink}
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-4"
          >
            Menu
          </a>
          <a
            href="/about-us"
            as={NavLink}
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500"
          >
            About Us
          </a>
        </div>
        <div>
          <HashLink
            to="/about-us#contact"
            scroll={e => e.scrollIntoView({behavior: 'smooth', block:'start'})}
            onClick={onScroll}
          >
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-coffee border-coffee hover:border-transparent hover:text-white hover:bg-coffee mt-4 lg:mt-0">
              Contact Us
            </button>
          </HashLink>
        </div>
      </div>
    </nav>
  );
};
