import styles from "@/styles/navbar.module.css";
function Navbar({ activeMenu, setActiveMenu }) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>
          <button
            className={`${styles.navbar__link} ${
              activeMenu === "about" && styles.active
            }`}
            onClick={() => setActiveMenu("about")}
          >
            About
          </button>
        </li>
        <li className={styles.navbar__item}>
          <button
            className={`${styles.navbar__link} ${
              activeMenu === "resume" && styles.active
            }`}
            onClick={() => setActiveMenu("resume")}
          >
            Resume
          </button>
        </li>

        <li className={styles.navbar__item}>
          <button
            className={`${styles.navbar__link} ${
              activeMenu === "portfolio" && styles.active
            }`}
            onClick={() => setActiveMenu("portfolio")}
          >
            Portfolio
          </button>
        </li>

        <li className={styles.navbar__item}>
          <button
            className={`${styles.navbar__link} ${
              activeMenu === "blog" && styles.active
            }`}
            onClick={() => setActiveMenu("blog")}
          >
            Blog
          </button>
        </li>

        <li className={styles.navbar__item}>
          <button
            className={`${styles.navbar__link} ${
              activeMenu === "contact" && styles.active
            }`}
            onClick={() => setActiveMenu("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
