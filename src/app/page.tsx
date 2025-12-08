import CategoryLine from "@/components/CategoryLine/CategoryLine";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-main-blue text-white h-screen">
      <Hero />
      <CategoryLine />
    </div>
  );
}
