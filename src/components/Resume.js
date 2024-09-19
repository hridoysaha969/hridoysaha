import styles from "@/styles/resume.module.css";
import Image from "next/image";
import html from "@/assets/html.png";
import css from "@/assets/css.png";
import js from "@/assets/javascript.png";
import bs from "@/assets/bs.png";
import tailwind from "@/assets/tailwind.png";
import react from "@/assets/react.png";
import next from "@/assets/next.svg";
import node from "@/assets/nodejs.png";
import firebase from "@/assets/firebase.svg";
import mongodb from "@/assets/mongodb.png";
import vscode from "@/assets/vscode.png";
import git from "@/assets/git.png";
import github from "@/assets/github.png";
import Link from "next/link";
import {
  MdBusinessCenter,
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
              <Link href="https://www.w3schools.com/">W3School</Link>
            </h4>

            <span>2019 — 2020</span>

            <p className={styles.timeline__text}>
              Learned the fundamentals of <strong>HTML</strong> and{" "}
              <strong>CSS</strong> to build the structure and style of websites.
            </p>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>
              <Link href="https://www.youtube.com/@StackLearner">
                Stack Learner
              </Link>
            </h4>

            <span>2020 — 2021</span>

            <p className={styles.timeline__text}>
              Dove deeper into <strong>JavaScript</strong>, learning key and
              concepts and functionalities that brought interactivity to my web
              projects.
            </p>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>
              <Link href="https://www.youtube.com/@LearnwithSumit">
                Learn With Sumit
              </Link>
            </h4>

            <span>2021 — 2022</span>

            <p className={styles.timeline__text}>
              Advanced to <strong>React.js</strong>, mastering modern front-end
              library for building interactive website and{" "}
              <strong>node.js</strong> for building dynamic web application.
            </p>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>
              <Link href="https://www.youtube.com/@codestepbystep">
                Code Step by Step
              </Link>
            </h4>

            <span>2022 — 2023</span>

            <p className={styles.timeline__text}>
              Advanced to <strong>Next.js</strong>, mastering modern front-end
              framework for building SEO friendly and high-performance web
              application.
            </p>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>
              <Link href="https://www.youtube.com/@WebDevSimplified">
                Web Dev Simplified
              </Link>
            </h4>

            <span>2023 — 2024</span>

            <p className={styles.timeline__text}>
              Gained experience in <strong>Firebase</strong> and{" "}
              <strong>MongoDB</strong>, focusing on backend integration, data
              storage and user authentication for full-stack development.
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
              Providing web development services on Fiverr, specializing in
              frontend, backend, and API integrations for clients worldwide.
            </p>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>GreenRubino</h4>

            <span>June - August{`(2024)`}</span>

            <p className={styles.timeline__text}>
              Worked with GreenRubino on a contract-based project, developing a
              dynamic JavaScript fluid animation, delivering smooth and
              interactive web experiences.
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
            <div className={styles.timeline__skills_wrapper}>
              <div className={styles.timeline__skill}>
                <Image src={html} width={30} alt="HTML" />
                <span>HTML</span>
              </div>
              <div className={styles.timeline__skill}>
                <Image src={css} width={30} alt="CSS" />
                <span>CSS</span>
              </div>
              <div className={styles.timeline__skill}>
                <Image src={js} width={30} alt="JavaScript" />
                <span>JS</span>
              </div>
              <div className={styles.timeline__skill}>
                <Image src={bs} width={30} alt="Bootstrap" />
                <span>Bootstrap</span>
              </div>
              <div className={styles.timeline__skill}>
                <Image src={tailwind} width={30} alt="Tailwind CSS" />
                <span>Tailwind</span>
              </div>
              <div className={styles.timeline__skill}>
                <Image src={react} width={30} alt="React.js" />
                <span>React.js</span>
              </div>
              <div className={styles.timeline__skill}>
                <Image src={next} width={30} alt="Next.js" />
                <span>Next.js</span>
              </div>
            </div>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>Backend</h4>
            <div className={styles.timeline__skills_wrapper}>
              <div className={styles.timeline__skill}>
                <Image src={node} width={30} alt="Node.js" />
                <span>Node.js</span>
              </div>
            </div>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>Database</h4>
            <div className={styles.timeline__skills_wrapper}>
              <div className={styles.timeline__skill}>
                <Image src={firebase} width={30} alt="Firebase" />
                <span>Firebase</span>
              </div>
              <div className={styles.timeline__skill}>
                <Image src={mongodb} width={30} alt="MongoDB" />
                <span>MongoDB</span>
              </div>
            </div>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>
              Tools & Version Control
            </h4>
            <div className={styles.timeline__skills_wrapper}>
              <div className={styles.timeline__skill}>
                <Image src={vscode} width={30} alt="VS Code" />
                <span>VS Code</span>
              </div>
              <div className={styles.timeline__skill}>
                <Image src={git} width={30} alt="Git" />
                <span>Git</span>
              </div>
              <div className={styles.timeline__skill}>
                <Image src={github} width={30} alt="GitHub" />
                <span>GitHub</span>
              </div>
            </div>
          </li>
        </ol>
      </section>
    </article>
  );
}

export default Resume;
