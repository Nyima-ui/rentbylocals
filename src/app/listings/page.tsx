import SecondaryNavbar from "@/components/SecondaryNavbar/SecondaryNavbar";
import styles from "./listings.module.css";
import Navbar from "@/components/Navbar";
import CategoryLine from "@/components/CategoryLine/CategoryLine";

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

const page = () => {
  return (
    <div className="bg-main-blue h-screen text-white">
      <Navbar showSearchBox={true} />
      <CategoryLine pseudoCategories={popularRentals} homePage={false} />
    </div>
  );
};

export default page;
