import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Image height={39} width={132} src="/svg/logo.svg" alt="Company logo" />
        <nav></nav>
        <nav className={styles.footerColumn} aria-labelledby="footer-explore">
          <h3 id="footer-explore">Explore</h3>
          <ul>
            <li>
              <a href="#">Neighbourhood</a>
            </li>
            <li>
              <a href="#">Categories</a> 
            </li>
          </ul>
        </nav>

        <nav className={styles.footerColumn} aria-labelledby="footer-info">
          <h3 id="footer-info">Info</h3>
          <ul>
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
        </nav>

        <nav className={styles.footerColumn} aria-labelledby="footer-support">
          <h3 id="footer-support">Support</h3>
          <ul>
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
        </nav>

        <nav className={styles.footerColumn} aria-labelledby="footer-social">
          <h3 id="footer-social">Socials</h3>
          <ul>
            <li>
              <a href="#">
                <Image
                  height={20}
                  width={20}
                  src="/svg/instagram.svg"
                  alt="Instagram icon"
                  aria-hidden="true"
                />
                Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  height={20}
                  width={20}
                  src="/svg/facebook.svg"
                  alt="Facebook icon"
                  aria-hidden="true"
                />
                Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  height={20}
                  width={20}
                  src="/svg/youtube.svg"
                  alt="YouTube icon"
                  aria-hidden="true"
                />
                YouTube
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  height={20}
                  width={20}
                  src="/svg/tiktock.svg"
                  alt="Tiktok icon"
                  aria-hidden="true"
                />
                TikTok
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
