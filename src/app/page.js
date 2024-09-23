import Aside from "@/components/Aside";
import styles from "./page.module.css";
import MainContent from "@/components/MainContent";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Hridoy Saha | Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Full-stack web developer offering frontend, backend, and database solutions. Expert in creating responsive websites, robust APIs, and efficient databases."
        />
        <meta
          property="og:title"
          content="Hridoy Saha | Full-Stack Web Developer"
        />
        <meta
          property="og:description"
          content="Full-stack web developer offering frontend, backend, and database solutions. Expert in creating responsive websites, robust APIs, and efficient databases."
        />
        <meta property="og:url" content="https://hridoysaha.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <main className={styles.main}>
        <Aside />
        <MainContent />
      </main>
    </>
  );
}
