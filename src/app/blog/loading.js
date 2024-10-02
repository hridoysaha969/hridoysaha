"use client";
import styles from "../page.module.css";
function Loading() {
  return (
    <main className={styles.loading__main}>
      <aside className={styles.loading__aside}></aside>
      <div className={styles.loading__content}></div>
    </main>
  );
}

export default Loading;
