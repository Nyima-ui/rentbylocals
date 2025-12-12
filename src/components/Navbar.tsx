"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  return (
    <nav
      className="flex justify-between mx-5 pt-5 md:pt-[15px] relative max-w-6xl md:mx-10 lg:mx-15 xl:mx-auto items-center"
      aria-label="Main navigation"
    >
      <Image height={39} width={132} alt="Logo" src={"/svg/logo.svg"} />
      {/* Mobile menu button  */}
      <button
        onClick={() => setmenuOpened(!menuOpened)}
        className="cursor-pointer md:hidden"
        aria-expanded={menuOpened}
        aria-controls="mobile-menu"
        aria-label={menuOpened ? "Close menu" : "Open menu"}
      >
        {menuOpened ? (
          <Image height={32} width={32} alt="Close menu" src={"/svg/X.svg"} />
        ) : (
          <Image height={32} width={32} alt="Open menu" src={"/svg/bars.svg"} />
        )}
      </button>

      <ul
        className={`absolute right-0.5 bg-main-blue top-full rounded-sm overflow-hidden transition-all duration-300 ease-in-out md:p-0 md:relative md:w-auto md:h-auto md:bg-transparent ${
          menuOpened ? "w-[261px] h-[200px] p-7.5" : "w-0 h-0 p-0"
        }`}
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
              className="md:block md:py-2.5 md:px-2.5 hover:opacity-70 transition-all duration-150 ease-in"
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
                        hover:shadow-2xl hover:shadow-blue-500"
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
