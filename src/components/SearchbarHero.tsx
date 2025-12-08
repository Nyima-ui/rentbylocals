import Image from "next/image";

const SearchbarHero = () => {
  return (
    <div className="bg-white rounded-sm flex items-center p-[5px] mt-[25px] gap-0.5 max-w-[610px] mx-auto">
      <Image height={30} width={30} src={"/search.svg"} alt="Search button" />
      <input
        type="text"
        className="text-main-blue p-1 grow placeholder:text-gray-text outline-accent-blue focus:outline-[0.5px] rounded-sm 
        transition-all duration-900"
        placeholder="Search what you need"
      />
      <button className="bg-accent-blue px-3 py-1.5 rounded-sm cursor-pointer hover:bg-[#2F3EE0] transition-all duration-150 ease-in">
        Search
      </button>
    </div>
  );
};

export default SearchbarHero;
