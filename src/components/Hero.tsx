import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="section border h-[376px] sm:h-[450px]  bg-[url('/hero_mobile.png')] bg-cover ">
      <Navbar />
    </section>
  );
};

export default Hero;
// bg-cover bg-[url('/public/hero.svg')]
