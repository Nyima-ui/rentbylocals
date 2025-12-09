import CategoryLine from "@/components/CategoryLine/CategoryLine";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid/ProductGrid";

export default function Home() {
  return (
    <div className="bg-main-blue text-white">
      <Hero />
      <CategoryLine />
      <ProductGrid />
    </div>
  );
}
