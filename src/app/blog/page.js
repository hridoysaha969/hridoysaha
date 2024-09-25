import Aside from "@/components/Aside";
import BlogContent from "@/components/BlogContent";
import styles from "@/styles/blog.module.css";

function page() {
  return (
    <main className={styles.main}>
      <Aside />
      <BlogContent />
    </main>
  );
}

export default page;
