import styles from "@/styles/blogArticle.module.css";
import Image from "next/image";

async function getBlog(id) {
  try {
    const url =
      process.env.NODE_ENV !== "development"
        ? `https://hridoysaha.netlify.app/api/blog/${id}`
        : `http://localhost:3000/api/blog/${id}`;
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
    return {}; // Return an empty array if an error occurs
  }
}

async function page({ params }) {
  const blog = await getBlog(params.blogID);
  // console.log(blog);

  const handleFormateDate = (dynamicDate) => {
    // Convert the MongoDB date string to a Date object
    const createdAt = new Date(dynamicDate);

    const formattedDate = createdAt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return formattedDate;
  };

  return (
    <main className={styles.blog__container}>
      {blog ? (
        <article className={`${styles.blog__article} active`}>
          <header>
            <h2 className={`h2`}>{blog?.title}</h2>
          </header>

          <figure className={styles.article__img}>
            <Image
              src={blog?.image}
              alt="Hridoy Saha Blog"
              height={400}
              width={600}
            />
          </figure>

          <div className={styles.blog__meta}>
            <p className={styles.blog__category}>{blog?.category}</p>

            <span className={styles.dot}></span>

            <time>{handleFormateDate(blog?.publishDate)}</time>
          </div>

          <div className={styles.blog__article_content}>
            <p
              className={styles.blog__text}
              dangerouslySetInnerHTML={{ __html: blog?.content }}
            ></p>
            <h4
              className="h3"
              dangerouslySetInnerHTML={{ __html: blog?.heading }}
            ></h4>
            <p
              className={styles.blog__text}
              dangerouslySetInnerHTML={{ __html: blog?.sub_content }}
            ></p>
          </div>
        </article>
      ) : null}
    </main>
  );
}

export default page;
