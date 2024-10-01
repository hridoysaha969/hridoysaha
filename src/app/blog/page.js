import Aside from "@/components/Aside";
import BlogContent from "@/components/BlogContent";
import styles from "@/styles/blog.module.css";

async function getBlogs() {
  let data = await fetch("http://localhost:3000/api/blog", {
    cache: "no-cache",
  });
  data = await data.json();

  return data;
}

async function page() {
  const blogs = await getBlogs();
  // console.log(blogs.blogs);

  return (
    <main className={styles.main}>
      <Aside />
      <BlogContent blogs={blogs.blogs} />
    </main>
  );
}

export default page;

export function generateMetadata() {
  return {
    title: "Blog - Hridoy Saha | Web Development Insights & Tutorials",
    description:
      "Stay updated with Hridoy Saha's blog, featuring articles on web development, frontend and backend technologies, coding tutorials, and project insights.",
    openGraph: {
      title: "Blog - Hridoy Saha | Web Development Insights & Tutorials",
      description:
        "Stay updated with Hridoy Saha's blog, featuring articles on web development, frontend and backend technologies, coding tutorials, and project insights.",
      url: "https://hridoysaha.netlify.app/blog",
      type: "website",
    },
  };
}
