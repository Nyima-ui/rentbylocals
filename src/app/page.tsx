import CategoryLine from "@/components/CategoryLine/CategoryLine";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import Showmorebtn from "@/components/Showmorebtn/Showmorebtn";

export default function Home() {
  return (
    <div className="bg-main-blue text-white">
      <Hero />
      <CategoryLine />
      <ProductGrid />
      <Showmorebtn />
      <Footer />
    </div>
  );
}
