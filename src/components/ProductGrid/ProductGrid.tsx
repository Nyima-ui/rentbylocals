import styles from "./ProductGrid.module.css";
import data from "../../../pseudoData.json";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = () => {
  return (
    <section className={styles.productGrid}>
      <div className={styles.productGridContainer}>
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
