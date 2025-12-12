import styles from "./Showmorebtn.module.css";

const Showmorebtn = () => {
  return (
    <button
      type="button"
      aria-label="Show more products"
      className={styles.showMoreBtn}
    >
      Show more
    </button>
  );
};

export default Showmorebtn;
