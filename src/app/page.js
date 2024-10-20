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
      type: "website",
      title: "Hridoy Saha | Full-Stack Web Developer",
      description:
        "Full-stack web developer offering frontend, backend, and database solutions. Expert in creating responsive websites, robust APIs, and efficient databases.",
      url: "https://hridoysaha.vercel.app/",
      images: [
        {
          url: "../assets/hridoy-saha.jpg", // The image to appear when sharing
          width: 1200,
          height: 1200,
          alt: "My Website Homepage Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Hridoy Saha | Full-Stack Web Developer",
      description:
        "Full-stack web developer offering frontend, backend, and database solutions. Expert in creating responsive websites, robust APIs, and efficient databases.",
      images: ["../assets/hridoy-saha.jpg"], // Same image for Twitter
    },
  };
}
