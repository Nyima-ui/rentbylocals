"use client";
import Image from "next/image";
import styles from "./CategoryLine.module.css";
import { useRef } from "react";

interface CategoryLineProps {
  pseudoCategories: string[];
  homePage: boolean;
}

const CategoryLine = ({ pseudoCategories, homePage }: CategoryLineProps) => {
  const menuRef = useRef<HTMLUListElement>(null);
  function scrollHorizontal() {
    if (menuRef.current) {
      const scrollDistance = 250;

      menuRef.current.scrollBy({
        left: scrollDistance,
        behavior: "smooth",
      });
    }
  }
  return (
    <section className={`px-5 xl:px-0 ${homePage ? "py-7.5" : "pt-7.5 pb-6.5 sm:pt-15"}`}>
      <div className={styles.categoryContainer}>
        <h2 className="text-lg">
          {homePage ? "Rent items in Greater Toronto Area" : "Popular rentals"}
        </h2>
        <div className={styles.categoryWrapper}>
          <ul
            className={`${styles.categoryMenu} ${
              homePage ? styles.homeMenu : styles.defaultMenu
            }`}
            ref={menuRef}
          >
            {pseudoCategories.map((category, idx) => (
              <li key={idx}>
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>

          <button
            className={styles.scrollBtn}
            onClick={scrollHorizontal}
            aria-label="Scroll categories right"
          >
            <Image
              height={24}
              width={24}
              src={"/svg/right_arrow.svg"}
              alt="Scroll right button"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryLine;
