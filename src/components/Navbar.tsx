"use client";
import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
  showSearchBox?: boolean;
}

const Navbar = ({ showSearchBox = false }: NavbarProps) => {
  const [menuOpened, setmenuOpened] = useState(false);
  return (
    <nav
      className="flex justify-between mx-5 pt-5 md:pt-[15px] relative max-w-6xl md:mx-10 lg:mx-15 xl:mx-auto items-center gap-2 sm:gap-0"
      aria-label="Main navigation"
    >
      <div className="flex items-start gap-5 flex-col sm:flex-row sm:items-center">
        <Image height={39} width={132} alt="Logo" src={"/svg/logo.svg"} />

        {showSearchBox && (
          <form
            className="bg-white flex items-center p-1.5 rounded-sm sm:w-[296px]"
            role="search"
          >
            <label htmlFor="navbar-search" className="sr-only">
              Search listings
            </label>
            <input
              id="navbar-search"
              type="text"
              className="text-main-blue placeholder:text-gray-text outline-accent-blue focus:outline-[0.5px] rounded-sm transition-all duration-150 pl-1 font-medium grow min-w-0"
              placeholder="What would you like to rent today?"
            />
            <button
              type="submit"
              className="cursor-pointer hover:bg-black/10 p-px rounded-sm transition-all duration-150 ease-in"
            >
              <Image
                height={25}
                width={25}
                alt="Search icon"
                src={"/svg/search.svg"}
              />
            </button>
          </form>
        )}
      </div>
      {/* Mobile menu buttons  */}
      <div className="flex flex-col sm:flex-row shrink-0  gap-[25px] md:hidden justify-between">
        <button
          onClick={() => setmenuOpened(!menuOpened)}
          className="cursor-pointer"
          aria-expanded={menuOpened}
          aria-controls="mobile-menu"
          aria-label={menuOpened ? "Close menu" : "Open menu"}
        >
          {menuOpened ? (
            <Image
              height={32}
              width={32}
              alt="Close menu"
              src={"/svg/X.svg"}
              className="ml-auto"
            />
          ) : (
            <Image
              height={32}
              width={32}
              alt="Open menu"
              src={"/svg/bars.svg"}
              className="ml-auto"
            />
          )}
        </button>
        {showSearchBox && (
          <button className="text-main-blue bg-white rounded-sm flex py-2 px-1.5">
            <Image
              height={24}
              width={24}
              src={"/svg/filter_list.svg"}
              alt="Filter icon"
              aria-hidden="true"
            />
            <span>Filter</span>
          </button>
        )}
      </div>

      <ul
        className={`absolute right-0.5 top-full rounded-sm overflow-hidden transition-all duration-300 ease-in-out md:p-0 md:relative md:w-auto md:h-auto md:bg-transparent z-20 ${
          menuOpened ? "w-[261px] h-[200px] p-7.5" : "w-0 h-0 p-0"
        } ${showSearchBox ? "bg-gray-200" : "bg-main-blue"}`}
        role="menu"
      >
        <div
          className={`transition-all ease-in duration-350 md:opacity-100 md:visible md:flex md:gap-[15px] md:items-center
           ${
             menuOpened
               ? "opacity-100 visible delay-250"
               : "opacity-0 invisible"
           }
        `}
        >
          <li className={`${menuOpened ? "block" : "hidden"} md:inline`}>
            <a
              href=""
              className={`md:block md:py-2.5 md:px-2.5 hover:opacity-70 transition-all duration-150 ease-in ${
                showSearchBox ? "text-main-blue md:text-white" : "text-white"
              }`}
            >
              Sign in
            </a>
          </li>
          <li
            className={`${
              menuOpened ? "block mt-[15px]" : "hidden"
            } md:inline md:mt-0`}
          >
            <a
              href=""
              className="bg-accent-blue px-[7px] py-1.5 md:px-3 md:py-2.5 rounded-sm md:block hover:bg-[#2F3EE0] transition-all duration-150 ease-in
                        hover:shadow-2xl hover:shadow-blue-500 text-white"
            >
              Create listing
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
