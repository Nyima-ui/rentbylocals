"use client";
import Showmorebtn from "@/components/Showmorebtn/Showmorebtn";
import ProductCard from "@/components/ProductCard/ProductCard";
import RentalDisplay from "@/components/RentalDisplay";
import ProfileSec from "@/components/ProfileSec";
import MapModal from "@/components/MapModal";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import data from "../../../../pseudoData.json";

const Page = () => {
  const [hideFilterButton] = useState<boolean>(true);
  const [isMapModalOpen, setisMapModalOpen] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  return (
    <div className="text-white">
      <header>
        <Navbar showSearchBox={true} hideFilterButton={hideFilterButton} />
      </header>
      <main className="max-w-6xl mx-auto px-5">
        <RentalDisplay rentalId={id} setisMapModalOpen={setisMapModalOpen} />
        <MapModal
          isMapModalOpen={isMapModalOpen}
          setisMapModalOpen={setisMapModalOpen}
        />
        <ProfileSec />
        <section className="mt-10" aria-labelledby="more-items-heading">
          <h3 id="more-items-heading" className="text-2xl">
            More items by Michele G
          </h3>
          <ul
            className="grid grid-cols-[repeat(auto-fit,minmax(149px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-y-2.5 gap-x-3.5 mt-5"
            role="list"
            aria-label="More items by Michele G"
          >
            {data.slice(0, 5).map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </ul>
        </section>
        <section className="mt-10">
          <h3 className="text-2xl">Similar items</h3>
          <ul
            className="grid grid-cols-[repeat(auto-fit,minmax(149px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(202px,1fr))] gap-y-2.5 gap-x-3.5 mt-5"
            role="list"
            aria-label="Similar rentals items"
          >
            {data.slice(0, 15).map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </ul>
        </section>
        {/* TODO: send aria-label as props  */}
        <Showmorebtn />
      </main>
    </div>
  );
};

export default Page;
