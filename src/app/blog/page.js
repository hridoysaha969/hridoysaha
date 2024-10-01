import Aside from "@/components/Aside";
import BlogContent from "@/components/BlogContent";
import styles from "@/styles/blog.module.css";

// async function getBlogs() {
//   const url =
//     process.env.NODE_ENV !== "development"
//       ? `https://hridoysaha.netlify.app/api/blog`
//       : `http://localhost:3000/api/blog`;
//   let data = await fetch(url, {
//     cache: "no-cache",
//   });
//   data = await data.json();

//   return data.blogs;
// }

async function getBlogs() {
  try {
    const url =
      process.env.NODE_ENV !== "development"
        ? `https://hridoysaha.netlify.app/api/blog`
        : `http://localhost:3000/api/blog`;
    let res = await fetch(url, {
      cache: "no-cache",
    });

    // Check if the response is valid
    if (!res.ok) {
      throw new Error(`Failed to fetch blogs, status: ${res.status}`);
    }

    const data = await res.json();

    // Check if the blogs property exists in the response
    if (!data || !data.blogs) {
      throw new Error("Invalid data structure: blogs not found");
    }

    return data.blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return []; // Return an empty array if an error occurs
  }
}

async function page() {
  const blogs = await getBlogs();

  return (
    <main className={styles.main}>
      <Aside />
      <BlogContent blogs={blogs} />
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
