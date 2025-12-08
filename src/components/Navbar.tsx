"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  return (
    <nav className="flex justify-between mx-5 pt-5 md:pt-[15px] relative max-w-6xl md:mx-10 lg:mx-15 xl:mx-auto items-center">
      <Image height={39} width={132} alt="Logo" src={"/logo.svg"} />
      <button
        onClick={() => setmenuOpened(!menuOpened)}
        className="cursor-pointer md:hidden"
      >
        {menuOpened ? (
          <Image height={32} width={32} alt="Close menu" src={"/X.svg"} />
        ) : (
          <Image height={32} width={32} alt="Logo" src={"/bars.svg"} />
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
            <a href="" className="md:block md:py-2.5 md:px-3">
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
              className="bg-accent-blue px-[7px] py-1.5 md:px-3  md:py-2.5 rounded-sm md:block"
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
