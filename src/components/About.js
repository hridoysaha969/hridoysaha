import styles from "@/styles/about.module.css";
import Image from "next/image";
import design from "@/assets/icon-design.svg";
import dev from "@/assets/icon-dev.svg";
import database from "@/assets/icon-app.svg";

function About({ activeMenu }) {
  return (
    <article
      className={`${styles.about} ${activeMenu === "about" ? "active" : null}`}
    >
      <header>
        <h2 className={`h2 article-title ${styles.article__title}`}>
          About me
        </h2>
      </header>

      <section className={styles.about__text}>
        <p>
          I am Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </section>

      <section className={styles.service}>
        <h3 className={`h3 ${styles.service__title}`}>What i'm doing</h3>

        <ul className={styles.service__list}>
          <li className={styles.service__item}>
            <div className={styles.service__icon_box}>
              <Image src={design} alt="design icon" width="40" />
            </div>

            <div className={styles.service__content_box}>
              <h4 className={`h4 ${styles.service__item_title}`}>Frontend</h4>

              <p className={styles.service__item_text}>
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>

          <li className={styles.service__item}>
            <div className={styles.service__icon_box}>
              <Image src={dev} alt="design icon" width="40" />
            </div>

            <div className={styles.service__content_box}>
              <h4 className={`h4 ${styles.service__item_title}`}>Backend</h4>

              <p className={styles.service__item_text}>
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>

          <li className={styles.service__item}>
            <div className={styles.service__icon_box}>
              <Image src={database} alt="design icon" width="40" />
            </div>

            <div className={styles.service__content_box}>
              <h4 className={`h4 ${styles.service__item_title}`}>Database</h4>

              <p className={styles.service__item_text}>
                Highly skilled for database management and API integration.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default About;
