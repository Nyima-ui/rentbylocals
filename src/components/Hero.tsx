import Navbar from "./Navbar";
import SearchbarHero from "./SearchbarHero";

const Hero = () => {
  return (
    <section className="section h-[376px] sm:h-[450px] md:h-[520px] lg:bg-[url('/hero.png')] bg-[url('/hero_mobile.png')] bg-cover bg-no-repeat md:bg-center">
      <Navbar />
      <div className="text-center mt-[45px] border h-[200px] overflow-hidden max-w-[320px] md:max-w-[400px] lg:max-w-[850px] mx-auto bg-black/40">
        <h1 className="text-3xl font-semibold leading-7 md:text-4xl md:leading-9 lg:text-5xl">
          Rent what you need. Earn from what you own.
        </h1>
        <p className="mt-[15px] lg:text-lg">Your neighborhood rental marketplace</p>
        <SearchbarHero />
      </div>
    </section>
  );
};

export default Hero;
// bg-cover bg-[url('/public/hero.svg')]
