import styles from "./ProductCard.module.css";
import { Product } from "@/types/types";
import Image from "next/image";

interface ProductCardProps {
  item: Product;
}

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <article className={styles.productCard}>
      <a href={item.id}>
        <div className={styles.productImageWrapper}>
          <Image
            fill
            src={item.images[0]}
            alt={item.title}
            style={{objectFit : "cover"}}
          />
        </div>
        <p className={styles.productPrice}>${item.price_daily}/day</p>
        <p className={styles.productName}>{item.title}</p>
      </a>
    </article>
  );
};

export default ProductCard;
