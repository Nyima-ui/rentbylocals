"use client";
import CategoryLine from "@/components/CategoryLine/CategoryLine";
import Navbar from "@/components/Navbar";
import data from "../../../pseudoData.json";
import ProductCard from "@/components/ProductCard/ProductCard";
import Categories from "@/components/Categories";
import { useEffect, useState } from "react";

const popularRentals = [
  "Desk",
  "Headphones",
  "Ikea",
  "Iphone",
  "Sofa bed",
  "Mirror bed",
  "Xbox",
  "Car Jack",
  "Camera equipment",
];

const Page = () => {
  const [filterMenuOpened, setFilterMenuOpened] = useState<boolean>(false);
  useEffect(() => {
    document.body.style.overflow = filterMenuOpened ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [filterMenuOpened]);
  return (
    <div
      className={`bg-main-blue text-white ${
        filterMenuOpened ? "scroll-lock" : ""
      }`}
    >
      <header>
        <Navbar
          showSearchBox={true}
          setFilterMenuOpened={setFilterMenuOpened}
        />
      </header>
      <main className="max-w-6xl mx-auto px-5 xl:px-0 relative">
        <CategoryLine pseudoCategories={popularRentals} homePage={false} />
        <div className="flex justify-between">
          <Categories
            filterMenuOpened={filterMenuOpened}
            setFilterMenuOpened={setFilterMenuOpened}
          />
          {/* product grid section  */}
          <div className="max-w-[854px] px-5 grow">
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-y-2.5 gap-x-3.5">
              {data.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))}
            </ul>
            <button className="bg-accent-blue py-2 sm:py-3 rounded-sm w-full max-w-[430px] mx-auto block mt-15 cursor-pointer transition-all duration-150 ease-in hover:bg-hover-blue">
              Show more
            </button>
          </div>
        </div>
      </main>
      {filterMenuOpened && (
        <div
          aria-label="Close filters"
          onClick={() => setFilterMenuOpened(false)}
          className="fixed inset-0 z-20 bg-black/50"
        ></div>
      )}
    </div>
  );
};

export default Page;
