import styles from "@/styles/resume.module.css";
import {
  MdBusinessCenter,
  MdGesture,
  MdLightbulb,
  MdOutlineMenuBook,
} from "react-icons/md";

function Resume({ activeMenu }) {
  return (
    <article className={`resume ${activeMenu === "resume" ? "active" : null}`}>
      <header>
        <h2 className={`h2 article-title ${styles.article__title}`}>Resume</h2>
      </header>

      <section className={styles.timeline}>
        <div className={styles.title__wrapper}>
          <div className="icon-box">
            <MdOutlineMenuBook />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className={styles.timeline__list}>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>
              University school of the arts
            </h4>

            <span>2007 — 2008</span>

            <p className={styles.timeline__text}>
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>
              New york academy of art
            </h4>

            <span>2006 — 2007</span>

            <p className={styles.timeline__text}>
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda
              ossimus, omnis voluptas assumenda est omnis..
            </p>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>
              High school of art and design
            </h4>

            <span>2002 — 2004</span>

            <p className={styles.timeline__text}>
              Duis aute irure dolor in reprehenderit in voluptate, quila
              voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
            </p>
          </li>
        </ol>
      </section>

      <section className={styles.timeline}>
        <div className={styles.title__wrapper}>
          <div className="icon-box">
            <MdBusinessCenter />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className={styles.timeline__list}>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>Fiverr</h4>

            <span>2021 — Present</span>

            <p className={styles.timeline__text}>
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>GreenRubino</h4>

            <span>July - August</span>

            <p className={styles.timeline__text}>
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda
              ossimus, omnis voluptas assumenda est omnis..
            </p>
          </li>
        </ol>
      </section>

      <section className={styles.timeline}>
        <div className={styles.title__wrapper}>
          <div className="icon-box">
            <MdLightbulb />
          </div>

          <h3 className="h3">Skills</h3>
        </div>

        <ol className={styles.timeline__list}>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>Frontend</h4>
            <p className={styles.timeline__text}>
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>Backend</h4>
            <p className={styles.timeline__text}>
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda
              ossimus, omnis voluptas assumenda est omnis..
            </p>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>Database</h4>
            <p className={styles.timeline__text}>
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda
              ossimus, omnis voluptas assumenda est omnis..
            </p>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>
              Tools & Version Control
            </h4>
            <p className={styles.timeline__text}>
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda
              ossimus, omnis voluptas assumenda est omnis..
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
}

export default Resume;
