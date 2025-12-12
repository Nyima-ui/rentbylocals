import styles from "./ProductCard.module.css";
import { Product } from "@/types/types";
import Image from "next/image";

interface ProductCardProps {
  item: Product;
}

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <li className={styles.productCard}>
      <a href={item.id} aria-label={`View details for ${item.title}`}>
        <div className={styles.productImageWrapper}>
          <Image
            fill
            src={item.images[0]}
            alt={item.title}
            style={{ objectFit: "cover" }}
          />
        </div>
        <p
          className={styles.productPrice}
          aria-label={`Price: $${item.price_daily} per day`}
        >
          ${item.price_daily}/day
        </p>
        <h3 className={styles.productName}>{item.title}</h3>
      </a>
    </li>
  );
};

export default ProductCard;
