import CategoryLine from "@/components/CategoryLine/CategoryLine";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import Showmorebtn from "@/components/Showmorebtn/Showmorebtn";

const pseudoCategories: string[] = [
  "All",
  "Furniture",
  "Electronics & Appliances",
  "Health & Beauty",
  "Mens Fashion",
  "Sports & Outdoors",
  "Books & Music",
  "Rental",
  "Art & Collections",
];

export default function Home() {
  return (
    <main className="bg-main-blue text-white">
      <Hero />
      <div className="max-w-6xl mx-auto">
        <CategoryLine pseudoCategories={pseudoCategories} homePage={true} />
        <ProductGrid />
        <Showmorebtn />
      </div>
    </main>
  );
}
