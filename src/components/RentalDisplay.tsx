"use client";
import Image from "next/image";
import { useState } from "react";

interface RentalDisplayProps {
  rentalId: string;
  setisMapModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const pseudoImageUrls = [
  "/img/main_xpen.png",
  "/img/xpen2.png",
  "/img/xpen3.png",
  "/img/xpend4.png",
];

const RentalDisplay = ({ rentalId, setisMapModalOpen }: RentalDisplayProps) => {
  const [mainImage, setMainImage] = useState<string>(pseudoImageUrls[0]);
  return (
    <article className="mt-7.5 sm:mt-[55px] md:flex md:justify-between gap-[25px]">
      {/* rental image coloumn */}
      <section className="grow">
        <figure
          className="relative h-[336px] sm:h-[500px] 
        md:h-[300px] lg:h-[480px] xl:h-[560px] lg:w-[600px] xl:w-[662px] overflow-hidden rounded-sm cursor-pointer"
        >
          <Image
            fill
            src={mainImage}
            alt="Change this later"
            className="transition-transform duration-150 ease-in hover:scale-102"
          />
        </figure>
        <ul className="flex gap-2.5 mt-2.5">
          {pseudoImageUrls.map((url, idx) => (
            <li
              key={idx}
              className="size-11 lg:size-15 xl:size-18 relative cursor-pointer rounded-sm overflow-hidden "
            >
              <button
                onClick={() => setMainImage(url)}
                type="button"
                aria-label={`View image ${idx + 1}`}
                className="relative size-full"
              >
                <Image
                  fill
                  src={`${url}`}
                  alt={`Thumbnail ${idx + 1}`}
                  className="transition-transform duration-150 ease-in hover:scale-110"
                />
              </button>
            </li>
          ))}
        </ul>
      </section>
      {/* rental info coloumn  */}
      <section
        aria-labelledby="rental-info"
        className="flex flex-col h-[650px] justify-between md:max-w-[50%]"
      >
        {/* title */}
        <h1 className="text-3xl md:text-4xl leading-10 mt-5 md:mt-0">
          Xp-pen innovator display 16 drawing tablet (15.6)
        </h1>
        {/* rating  */}
        <div aria-label="Rating: 4 out of 5 stars" className="flex gap-0.5">
          <Image
            height={20}
            width={108}
            src={"/svg/stars.svg"}
            alt="Rental item rating"
          />
          <span>(4)</span>
        </div>
        {/* prices  */}
        <ul className="flex items-center gap-[7px]">
          <li>
            <span>$20</span>
            <span>/day</span>
          </li>
          <li>
            <span>&bull;</span>
          </li>
          <li>
            <span>$120</span>
            <span>/7days</span>
          </li>
          <li>
            <span>&bull;</span>
          </li>
          <li>
            <span>$720</span>
            <span>/month</span>
          </li>
        </ul>
        {/* location  */}
        <div className="">
          <p>Pick up and drop off location:</p>
          <button
            className="px-[17px] py-[7px] border rounded-sm border-accent-blue mt-2.5 cursor-pointer transition-transform duration-150 ease-in hover:scale-101"
            onClick={() => setisMapModalOpen(true)}
          >
            View map
          </button>
        </div>
        {/* date  */}
        <form className="">
          <fieldset>
            <legend className="text-[18px]">Booking dates:</legend>
            <div className="flex gap-7.5">
              <div className="cursor-pointer">
                <label htmlFor="start-date" className="block">
                  Start date
                </label>
                <input
                  type="date"
                  id="start-date"
                  className="border rounded-sm border-white/20 p-0.5 bg-accent-blue/20 text-white cursor-pointer mt-[3px]"
                />
              </div>
              <div>
                <label htmlFor="end-date" className="block">
                  End date
                </label>
                <input
                  type="date"
                  id="end-date"
                  className="border rounded-sm border-white/20 p-0.5 bg-accent-blue/20 text-white cursor-pointer mt-[3px]"
                />
              </div>
            </div>
          </fieldset>
          <div className="flex gap-5 text-lg mt-5">
            <p className="font-bold">Total</p>
            <span>$400</span>
          </div>
          <button
            type="submit"
            className="px-3 py-2.5 bg-accent-blue rounded-sm cursor-pointer transition-all duration-150 ease-in hover:bg-hover-blue mt-5"
          >
            Request booking
          </button>
        </form>
        {/* product description  */}
        <section aria-label="about-item">
          <h2 className="text-[18px] mt-2.5">About this item:</h2>
          <p className="text-base mt-2.5">
            Lorem ipsum felis diam ultrices neque magna tortor volutpat massa
            varius eget accumsan lectus id tincidunt nec facilisis viverra
            commodo a morbi cras cursus facilisi dui quam suspendisse ut eu
            dolor enim quis aliquet donec quam felis
          </p>
        </section>
      </section>
    </article>
  );
};

export default RentalDisplay;
