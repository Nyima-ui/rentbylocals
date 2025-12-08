"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  return (
    <nav className="flex justify-between border mx-5 mt-5 relative">
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
        className="absolute right-0.5 bg-main-blue top-full p-7.5 rounded-sm overflow-hidden md:relative"
        style={{
          width: menuOpened ? "261px" : "0px",
          height: menuOpened ? "200px" : "0px",
          padding: menuOpened ? "30px" : "0px",
          transition: "all 0.3s linear",
        }}
      >
        <div
          style={{
            opacity: menuOpened ? 1 : 0,
            visibility: menuOpened ? "visible" : "hidden",
            transition: "opacity 0.35s ease-in, visibility 0.35s ease-in",
            transitionDelay: menuOpened ? "0.2s" : "0s",
          }}
        >
          {menuOpened && (
            <>
              <li>
                <a href="">Sign in</a>
              </li>
              <li className="block mt-[15px]">
                <a
                  href=""
                  className="bg-accent-blue px-[7px] py-1.5 rounded-sm"
                >
                  Create listing
                </a>
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
