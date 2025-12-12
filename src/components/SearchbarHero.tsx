import Image from "next/image";

const SearchbarHero = () => {
  return (
    <form
      className="bg-white rounded-sm flex items-center p-[5px] mt-[25px] gap-0.5 max-w-[610px] mx-auto"
      role="Search"
      aria-label="Search marketplace"
    >
      <Image
        height={30}
        width={30}
        src={"/svg/search.svg"}
        alt="Search icon"
        aria-hidden="true"
      />
      <label htmlFor="hero-search" className="sr-only">
        Search for items to rent
      </label>
      <input
        type="text"
        className="text-main-blue p-1 grow placeholder:text-gray-text outline-accent-blue focus:outline-2 rounded-sm 
        transition-all duration-150"
        placeholder="Search what you need"
        autoComplete="on"
      />
      <button
        className="bg-accent-blue px-3 py-1.5 rounded-sm cursor-pointer hover:bg-[#2F3EE0] transition-all duration-150 ease-in"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchbarHero;
