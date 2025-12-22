"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import CustomSignUp from "./CustomSignUp";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavbarProps {
  showSearchBox?: boolean;
  setFilterMenuOpened?: React.Dispatch<React.SetStateAction<boolean>>;
  hideFilterButton?: boolean;
}

const Navbar = ({
  showSearchBox = false,
  setFilterMenuOpened,
  hideFilterButton = false,
}: NavbarProps) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (isLoaded) {
      console.log(isSignedIn);
      console.log(`User : ${user?.fullName}`);
    }
  }, [isSignedIn, isLoaded, user]);
  const [menuOpened, setmenuOpened] = useState(false);
  const { signOut } = useClerk();
  const [isSignUpDialogOpened, setisSignUpDialogOpened] = useState(false);
  useEffect(() => {
    if (isSignUpDialogOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignUpDialogOpened]);



  return (
    <nav
      className="flex justify-between mx-5 pt-5 md:pt-[15px] relative max-w-6xl lg:mx-15 xl:mx-auto items-center gap-2 sm:gap-0"
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
          onClick={() => setmenuOpened((prev) => !prev)}
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
        {showSearchBox && !hideFilterButton && (
          <button
            className="text-main-blue bg-white rounded-sm flex py-2 px-1.5 cursor-pointer"
            onClick={() => setFilterMenuOpened?.((prev) => !prev)}
          >
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
          <li className={`${menuOpened ? "block" : "hidden"} md:block`}>
            {isSignedIn ? (
              <>
                <Link href={"/user-profile"} className="hover:opacity-80 transition-opacity duration-150 ease-in">
                  <Image
                    className="rounded-[400px] overflow-hidden"
                    width={45}
                    height={45}
                    src={user.imageUrl}
                    alt={`User profile`}
                  />
                </Link>
                {/* <span>{user.primaryEmailAddress?.emailAddress}</span> */}
                {/* TODO: move the log out button on user profile later */}
                {/* <button
                  className="block cursor-pointer"
                  onClick={handleSignOut}
                >
                  Log out
                </button> */}
              </>
            ) : (
              <button
                onClick={() => setisSignUpDialogOpened(true)}
                className={`md:block md:py-2.5 md:px-2.5 hover:opacity-70 transition-all duration-150 ease-in focus:outline-white block cursor-pointer ${
                  showSearchBox ? "text-main-blue md:text-white" : "text-white"
                }`}
              >
                Sign in
              </button>
            )}
          </li>
          <li
            className={`${
              menuOpened ? "block mt-[15px]" : "hidden"
            } md:inline md:mt-0 md:border md:border-transparent`}
          >
            <button
              className="bg-accent-blue px-[7px] py-1.5 md:px-3 md:py-2.5 rounded-sm md:block hover:bg-[#2F3EE0] transition-all duration-150 ease-in hover:shadow-2xl text-white cursor-pointer focus:outline-1 focus:outline-white"
              onClick={() =>
                isSignedIn
                  ? router.push("/create-listing")
                  : setisSignUpDialogOpened(true)
              }
            >
              Create listing
            </button>
          </li>
        </div>
      </ul>
      {isSignUpDialogOpened && (
        <CustomSignUp
          isSignUpDialogOpened={isSignUpDialogOpened}
          setisSignUpDialogOpened={setisSignUpDialogOpened}
        />
      )}
    </nav>
  );
};

export default Navbar;
