import styles from "./ProductCard.module.css";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  item: Product;
}

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <li className={styles.productCard}>
      <Link
        href={`/rentals/${item.id}`}
        aria-label={`View details for ${item.title}`}
      >
        <div className={styles.productImageWrapper}>
          <Image
            fill
            src={item.images[0]}
            alt={item.title}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
          />
        </div>
        <p
          className={styles.productPrice}
          aria-label={`Price: $${item.price_daily} per day`}
        >
          ${item.price_daily}/day
        </p>
        <h3 className={styles.productName}>{item.title}</h3>
      </Link>
    </li>
  );
};

export default ProductCard;
