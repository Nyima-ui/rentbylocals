"use client";
import Image from "next/image";
import styles from "./CategoryLine.module.css";
import { useRef } from "react";

const CategoryLine = () => {
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
    <section className="px-5 py-7.5">
      <div className={styles.categoryContainer}>
        <h2 className="text-lg">Rent items in Greater Toronto Area</h2>
        <div className={styles.categoryWrapper}>
          <ul className={styles.categoryMenu} ref={menuRef}>
            <li>
              <a href="#">All</a>
            </li>
            <li>
              <a href="#">Furniture</a>
            </li>
            <li>
              <a href="#">Electronics & Appliances </a>
            </li>
            <li>
              <a href="#">Health & Beauty</a>
            </li>
            <li>
              <a href="#">Mens Fashion</a>
            </li>
            <li>
              <a href="#">Sports & Outdoors</a>
            </li>
            <li>
              <a href="#">Books & Music</a>
            </li>
            <li>
              <a href="#">Rental</a>
            </li>
            <li>
              <a href="#">Art & Collections </a>
            </li>
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
