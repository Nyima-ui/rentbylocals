import styles from "./ProductGrid.module.css";
import data from "../../../pseudoData.json";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = () => {
  return (
    <section
      className={styles.productGrid}
      aria-label="product-grid-section"
    >
      <h2 className="sr-only">Available Products</h2>
      <ul className={styles.productGridContainer}>
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default ProductGrid;
