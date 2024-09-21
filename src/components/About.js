import styles from "@/styles/about.module.css";
import Image from "next/image";
import design from "@/assets/design.png";
import dev from "@/assets/dev.png";
import database from "@/assets/database.png";
import fiverr from "@/assets/fiverr.png";
import linkedin from "@/assets/linkedin.png";
import Link from "next/link";

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
          I am a passionate Full Stack Developer with a focus in both front-end
          and back-end development. Since starting my journey in 2020, I have
          continuously honed my skills through self-learning, mastering modern
          web technologies to deliver clean and efficient solutions.
        </p>
      </section>

      <section className={styles.service}>
        <h3 className={`h3 ${styles.service__title}`}>What i am doing</h3>

        <ul className={styles.service__list}>
          <li className={styles.service__item}>
            <div className={styles.service__icon_box}>
              <Image src={design} alt="design icon" width="40" />
            </div>

            <div className={styles.service__content_box}>
              <h4 className={`h4 ${styles.service__item_title}`}>Frontend</h4>

              <p className={styles.service__item_text}>
                Crafting responsive and user-friendly interfaces with the latest
                technologies to deliver seamless, engaging web experiences.
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
                Building robust and scalable server-side solutions, ensuring
                secure, fast, and efficient functionality for your web
                applications.
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
                Designing and managing efficient databases to store, organize,
                and retrieve data, providing seamless data flow and integration.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.service}>
        <h3 className={`h3 ${styles.service__title}`}>Professional Network</h3>

        <ul className={styles.service__list}>
          <li className={styles.service__item}>
            <div className={styles.service__icon_box}>
              <Image src={fiverr} alt="design icon" width="40" />
            </div>

            <div className={styles.service__content_box}>
              <h4 className={`h4 ${styles.service__item_title}`}>Fiverr</h4>

              <p className={styles.service__item_text}>
                Explore my services on Fiverr, Where I deliver professional web
                development solutions tailored to your project needs.{" "}
                <Link href="https://www.fiverr.com/hridoy_saha">
                  Explore now
                </Link>
              </p>
            </div>
          </li>

          <li className={styles.service__item}>
            <div className={styles.service__icon_box}>
              <Image src={linkedin} alt="design icon" width="40" />
            </div>

            <div className={styles.service__content_box}>
              <h4 className={`h4 ${styles.service__item_title}`}>LinkedIn</h4>

              <p className={styles.service__item_text}>
                Connect with me on LinkedIn to view my professional journey,
                network, and explore opportunities for collaboration.{" "}
                <Link href="https://www.linkedin.com/in/b2c/">
                  {" "}
                  Explore now
                </Link>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default About;
