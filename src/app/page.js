import Aside from "@/components/Aside";
import styles from "./page.module.css";
import MainContent from "@/components/MainContent";
export default function Home() {
  return (
    <main className={styles.main}>
      <Aside />
      <MainContent />
    </main>
  );
}
