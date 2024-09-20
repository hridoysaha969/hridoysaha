import styles from "@/styles/portfolio.module.css";
import Link from "next/link";
import { MdArrowDropDown, MdOutlineRemoveRedEye } from "react-icons/md";
import img from "@/assets/projectImg/project-1.jpg";
import Image from "next/image";
import { useState } from "react";

function Portfolio({ activeMenu }) {
  const [filterSelect, setFilterSelect] = useState("all");
  const [selected, setSelected] = useState("");
  const [showOption, setShowOption] = useState(false);
  const handleFilterChange = (category) => {
    setFilterSelect(category);
  };
  return (
    <article className={`portfolio ${activeMenu === "portfolio" && "active"}`}>
      <header>
        <h2 className={`h2 article-title ${styles.article__title}`}>
          Portfolio
        </h2>
      </header>

      <section className="projects">
        <ul className={styles.filter__list}>
          <li className={styles.filter__item}>
            <button
              className={filterSelect === "all" ? styles.active : null}
              onClick={() => handleFilterChange("all")}
            >
              All
            </button>
          </li>
          <li className={styles.filter__item}>
            <button
              className={filterSelect === "web-design" ? styles.active : null}
              onClick={() => handleFilterChange("web-design")}
            >
              Web Design
            </button>
          </li>
          <li className={styles.filter__item}>
            <button
              className={
                filterSelect === "web-development" ? styles.active : null
              }
              onClick={() => handleFilterChange("web-development")}
            >
              Web Development
            </button>
          </li>
        </ul>

        <div className={styles.filter__select_box}>
          <button
            className={`${styles.filter__select} ${
              showOption && styles.active
            }`}
            onClick={() => setShowOption(!showOption)}
          >
            <div className={styles.select__value} data-selecct-value>
              {selected ? selected : "Select category"}
            </div>

            <div className={styles.select__icon}>
              <MdArrowDropDown />
            </div>
          </button>

          <ul className={styles.select__list}>
            <li className={styles.select__item}>
              <button
                onClick={() => {
                  setSelected("All");
                  setShowOption(!showOption);
                  handleFilterChange("all");
                }}
              >
                All
              </button>
            </li>

            <li className={styles.select__item}>
              <button
                onClick={() => {
                  setSelected("Web Design");
                  setShowOption(!showOption);
                  handleFilterChange("web-design");
                }}
              >
                Web design
              </button>
            </li>

            <li className={styles.select__item}>
              <button
                onClick={() => {
                  setSelected("Web Development");
                  setShowOption(!showOption);
                  handleFilterChange("web-development");
                }}
              >
                Web development
              </button>
            </li>
          </ul>
        </div>

        <ul className={styles.project__list}>
          <li
            className={`${styles.project__item} ${styles.active}`}
            data-filter-item
            data-category="web development"
          >
            <Link href="#">
              <figure className={styles.project__img}>
                <div className={styles.project__item_icon_box}>
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                  <MdOutlineRemoveRedEye />
                </div>

                <Image src={img} alt="finance" loading="lazy" />
              </figure>

              <h3 className={styles.project__title}>Finance</h3>

              <p className={styles.project__category}>Web development</p>
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Portfolio;
