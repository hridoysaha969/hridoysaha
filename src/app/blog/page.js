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

export function generateMetadata() {
  return {
    title: "Blog | Hridoy Saha - Web Developer",
    description:
      "Explore some Blog about Hridoy Saha's life and programming experiences",
  };
}
