"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface CategoriesProps {
  filterMenuOpened: boolean;
  setFilterMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
const pseudoCategories: string[] = [
  "Furniture",
  "Electronics & Appliances",
  "Health & Beauty",
  "Mens Fashion",
  "Sports & Outdoors",
  "Books & Music",
  "Rental",
  "Art & Collections",
];

const Categories = ({
  filterMenuOpened,
  setFilterMenuOpened,
}: CategoriesProps) => {
  const asideRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!filterMenuOpened) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        asideRef.current &&
        !asideRef.current.contains(event.target as Node)
      ) {
        setFilterMenuOpened(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setFilterMenuOpened(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [filterMenuOpened, setFilterMenuOpened]);

  return (
    <aside
      className={`bg-main-blue border-t-2 absolute -top-11 left-0 w-full pb-10  z-30 rounded-t-[30px] rounded-b-sm transition-transform duration-200 ease-out text-base 
      md:relative md:border-t-0 md:rounded-t-none md:top-0 md:max-w-[289px] grow-0 ${
        filterMenuOpened
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto"
      }`}
      ref={asideRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="filters-title"
      tabIndex={-1}
    >
      <div className="container max-w-[400px] h-[721px] mx-auto pt-5 space-y-2.5 relative overflow-scroll no-scrollbar md:h-auto">
        {/* header  */}
        <header className="flex justify-between sticky -top-4 bg-main-blue pt-2 md:relative md:top-0 md:pt-0">
          <h4 className="text-lg" id="filters-title">
            Filters
          </h4>
          <button
            aria-label="Close filters"
            onClick={() => setFilterMenuOpened(false)}
          >
            <Image
              height={30}
              width={30}
              src={"/svg/X.svg"}
              alt="Close filter menu icn"
            />
          </button>
        </header>
        <hr className="opacity-43" />
        {/* first row */}
        <fieldset>
          <legend className="text-lg">Status</legend>
          <div className="flex items-center gap-[5px] mt-[7px]">
            <input
              type="checkbox"
              id="active-listings"
              className="accent-white size-[18px] cursor-pointer"
            />
            <label
              htmlFor="active-listings"
              className="cursor-pointer select-none"
            >
              Show active listings only
            </label>
          </div>
        </fieldset>
        <hr className="opacity-43" />
        {/* second row  */}
        <fieldset>
          <legend className="text-lg">Category</legend>
          {pseudoCategories.map((item, idx) => (
            <div key={idx} className="flex items-center gap-[5px] mt-[7px]">
              <input
                type="checkbox"
                id={item}
                className="accent-white size-[18px] cursor-pointer"
              />
              <label htmlFor={item} className="cursor-pointer select-none">
                {item}
              </label>
            </div>
          ))}
        </fieldset>
        <hr className="opacity-43" />
        {/* third row  */}
        <fieldset>
          <legend className="text-lg">Sort</legend>
          <div className="flex items-center gap-[5px] mt-[7px]">
            <input
              type="checkbox"
              id="lowest-price"
              className="accent-white size-[18px] cursor-pointer"
            />
            <label
              htmlFor="lowest-price"
              className="cursor-pointer select-none"
            >
              Lowest price
            </label>
          </div>
          <div className="flex items-center gap-[5px] mt-[7px]">
            <input
              type="checkbox"
              id="nearest-location"
              className="accent-white size-[18px] cursor-pointer"
            />
            <label
              htmlFor="nearest-location"
              className="cursor-pointer select-none"
            >
              Nearest location
            </label>
          </div>
          <div className="flex items-center gap-[5px] mt-[7px]">
            <input
              type="checkbox"
              id="newest-listing"
              className="accent-white size-[18px] cursor-pointer"
            />
            <label
              htmlFor="newest-listing"
              className="cursor-pointer select-none"
            >
              Newest listing
            </label>
          </div>
        </fieldset>
        <hr className="opacity-43" />
        <fieldset className="pb-10">
          <legend className="text-lg">Distance & Neighborhood</legend>
          <div className="flex items-center gap-2.5 mt-[7px]">
            <label htmlFor="Distance" className="select-none">
              Distance:
            </label>
            <select
              name="Distance"
              id="Distance"
              className="rounded-sm bg-main-blue border-gray-50 px-2 py-0.5 cursor-pointer"
            >
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="8">8</option>
              <option value="24">24</option>
              <option value="28">48</option>
            </select>
            {/* <Image height={24} width={24} src={"/svg/expand.svg"} alt="Exapand icon"/> */}
          </div>
          <div className="flex items-center gap-2.5 mt-[7px]">
            <label htmlFor="Neighbourhood" className="select-none">
              Neighbourhood:
            </label>
            <select
              name="Neighbourhood"
              id="Neighbourhood"
              className="rounded-sm bg-main-blue px-2 py-0.5 cursor-pointer"
            >
              <option value="Mississauga">Mississauga</option>
              <option value="Oakville">Oakville</option>
              <option value="Caledon">Caledon</option>
              <option value="Brampton">Brampton</option>
              <option value="Toronto">Toronto</option>
              <option value="Durham Region">Durham Region</option>
            </select>
          </div>
        </fieldset>
        <footer className="flex justify-between border-t pt-1 border-t-white/43 sticky bottom-2 w-full bg-main-blue pb-4 md:relative md:bottom-0">
          <button className="underline">Clear all</button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-accent-blue rounded-sm hover:bg-hover-blue transition-all duration-150 ease-in">
            Apply
          </button>
        </footer>
      </div>
    </aside>
  );
};

export default Categories;
