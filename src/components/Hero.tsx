import Navbar from "./Navbar";
import SearchbarHero from "./SearchbarHero";

const Hero = () => {
  return (
    <section className="section h-[376px] sm:h-[450px] md:h-[520px] lg:bg-[url('/hero.png')] bg-[url('/hero_mobile.png')] bg-cover bg-no-repeat md:bg-center">
      <Navbar />
      <div className="text-center mt-[45px] sm:mt-[55px] md:mt-[90px] h-[200px] overflow-hidden max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[850px] mx-auto">
        <h1 className="text-3xl font-semibold leading-7 sm:text-4xl sm:leading-8.5 md:text-4xl md:leading-9 lg:text-5xl">
          Rent what you need. Earn from what you own.
        </h1>
        <p className="mt-[15px] lg:text-lg">Your neighborhood rental marketplace</p>
        <SearchbarHero />
      </div>
    </section>
  );
};

export default Hero;

