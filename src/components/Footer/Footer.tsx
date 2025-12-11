import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Image height={39} width={132} src={"/logo.svg"} alt="Company logo" />
        <div className={styles.infoContainer}>
          <ul className={styles.footerColumn}>
            <h3>Explore</h3>
            <li>
              <a href="#">Neighbourhood</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
          <ul className={styles.footerColumn}>
            <h3>Info</h3>
            <li>
              <a href="#">Buyer guide</a>
            </li>
            <li>
              <a href="#">Seller guide</a>
            </li>
            <li>
              <a href="#">Community guidelines</a>
            </li>
          </ul>
          <ul className={styles.footerColumn}>
            <h3>Support</h3>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Terms of services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <ul className={styles.footerColumn}>
            <h3>Socials</h3>
            <li>
              <a href="#">
                <Image
                  height={20}
                  width={20}
                  src={"/logo.svg"}
                  alt="Instagram logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
