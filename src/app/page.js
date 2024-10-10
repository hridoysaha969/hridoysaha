import Aside from "@/components/Aside";
import styles from "./page.module.css";
import MainContent from "@/components/MainContent";

export default function Home({ searchParams }) {
  return (
    <main className={styles.main}>
      <Aside />
      <MainContent searchParams={searchParams} />
    </main>
  );
}

export async function generateMetadata() {
  return {
    title: "Hridoy Saha | Full-Stack Web Developer",
    description:
      "Full-stack web developer offering frontend, backend, and database solutions. Expert in creating responsive websites, robust APIs, and efficient databases.",
    openGraph: {
      title: "Hridoy Saha | Full-Stack Web Developer",
      description:
        "Full-stack web developer offering frontend, backend, and database solutions. Expert in creating responsive websites, robust APIs, and efficient databases.",
      url: "https://hridoysaha.netlify.app/",
      type: "website",
    },
  };
}
