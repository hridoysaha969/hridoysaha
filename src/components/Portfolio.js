import styles from "@/styles/portfolio.module.css";
import Link from "next/link";
import { MdArrowDropDown, MdOutlineRemoveRedEye } from "react-icons/md";
import img from "@/assets/projectImg/project-1.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function Portfolio({ activeMenu }) {
  const [filterSelect, setFilterSelect] = useState("all");
  const [selected, setSelected] = useState("");
  const [showOption, setShowOption] = useState(false);
  const [portfolioList, setPortfolioList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFilterChange = (category) => {
    setFilterSelect(category);
  };

  useEffect(() => {
    handleFilter();
  }, []);

  const handleFilter = async (params) => {
    setLoading(true);
    const url = params ? `/api/portfolio/${params}` : `/api/portfolio/all`;
    try {
      let response = await fetch(url);
      response = await response.json();

      if (response.success) {
        setPortfolioList(response.result);
      }

      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
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
              onClick={() => {
                handleFilterChange("all");
                handleFilter("all");
              }}
            >
              All
            </button>
          </li>
          <li className={styles.filter__item}>
            <button
              className={filterSelect === "web-design" ? styles.active : null}
              onClick={() => {
                handleFilterChange("web-design");
                handleFilter("web-design");
              }}
            >
              Web Design
            </button>
          </li>
          <li className={styles.filter__item}>
            <button
              className={
                filterSelect === "web-development" ? styles.active : null
              }
              onClick={() => {
                handleFilterChange("web-development");
                handleFilter("web-development");
              }}
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
                  handleFilter("all");
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
                  handleFilter("web-design");
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
                  handleFilter("web-development");
                }}
              >
                Web development
              </button>
            </li>
          </ul>
        </div>

        {loading ? <Loading /> : null}
        <ul className={styles.project__list}>
          {!loading &&
            portfolioList.length > 0 &&
            portfolioList.map((item, ind) => (
              <li
                key={ind}
                className={`${styles.project__item} ${styles.active}`}
              >
                <Link href={item.liveLink}>
                  <figure className={styles.project__img}>
                    <div className={styles.project__item_icon_box}>
                      <MdOutlineRemoveRedEye />
                    </div>

                    <Image
                      src={item.image.src}
                      width={300}
                      height={200}
                      alt="finance"
                      loading="lazy"
                    />
                  </figure>

                  <h3 className={styles.project__title}>{item.title}</h3>

                  <p className={styles.project__category}>{item.category}</p>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </article>
  );
}

export default Portfolio;
